import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card';
import {
  Alert,
  AlertDescription,
  AlertTitle
} from './ui/alert';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from './ui/tabs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import {
  ExternalLink,
  Github,
  AlertCircle,
  Loader2
} from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

interface CommitActivity {
  name: string;
  commits: number;
}

const GitHubProfileAnalyzer = () => {
  const [username, setUsername] = useState<string>('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [commitActivity, setCommitActivity] = useState<CommitActivity[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>('repositories'); // Track the selected tab

  const fetchGitHubData = async () => {
    if (!username.trim()) {
      setError('Please enter a GitHub username');
      return;
    }

    setLoading(true);
    setError(null);

    const token = "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"; // Get token from environment variable
    console.log(token);
    if (!token) {
      setError('GitHub Token is missing.');
      setLoading(false);
      return;
    }

    try {
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        headers: {
          'Authorization': `token ${token}`, // Add the Authorization header
        },
      });
      if (!reposResponse.ok) {
        console.error('GitHub API error:', reposResponse.statusText);
        const text = await reposResponse.text();
        console.log('Response body:', text);
        return;
      }
      const reposData = await reposResponse.json();

      // Check if the response is an array before proceeding
      if (Array.isArray(reposData)) {
        setRepositories(reposData);
      } else {
        setError('No repositories found for this username.');
        return;
      }

      // Fetch commit activity for up to 5 repositories
      const commitDataPromises = reposData.slice(0, 5).map(async (repo: Repository) => {
        try {
          const commitResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/stats/commit_activity`, {
            headers: {
              'Authorization': `token ${token}`, // Add the Authorization header for commit activity
            },
          });
          if (commitResponse.ok) {
            return await commitResponse.json();
          }
          return null;
        } catch (error) {
          console.error(`Failed to fetch commit activity for ${repo.name}:`, error);
          return null;
        }
      });

      const commitDataResults = await Promise.all(commitDataPromises);
      const processedCommitData = processCommitData(commitDataResults.filter(Boolean));
      setCommitActivity(processedCommitData);

      setLoading(false);

    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      setError(`Failed to fetch GitHub data: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setLoading(false);
    }
  };

  // Processes commit activity data from multiple repositories
  const processCommitData = (commitData: any[][]): CommitActivity[] => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayCounts: CommitActivity[] = daysOfWeek.map(day => ({ name: day, commits: 0 }));

    commitData.forEach(repoData => {
      if (Array.isArray(repoData)) {
        repoData.forEach(weekData => {
          if (weekData && Array.isArray(weekData.days)) {
            weekData.days.forEach((count: number, dayIndex: number) => {
              dayCounts[dayIndex].commits += count;
            });
          }
        });
      }
    });

    return dayCounts;
  };

  // Utility to format dates for display
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="mb-6 bg-gray-800 text-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="h-6 w-6" />
            GitHub Profile Analyzer
          </CardTitle>
          <CardDescription>
            Enter a GitHub username to view their repositories and commit activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="GitHub username"
              value={username}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') fetchGitHubData();
              }}
              className="max-w-sm text-black bg-gray-300"
            />
            <Button onClick={fetchGitHubData} disabled={loading} className="bg-gray-600 hover:bg-gray-700">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {loading ? 'Loading...' : 'Analyze'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {repositories.length > 0 && (
        <Tabs defaultValue="repositories" className="mb-6">
          <TabsList>
            <TabsTrigger
              value="repositories"
              onClick={() => setSelectedTab('repositories')}
              className={`${
                selectedTab === 'repositories' ? 'bg-gray-700' : 'bg-gray-500'
              } text-white`}
            >
              Repositories ({repositories.length})
            </TabsTrigger>
            <TabsTrigger
              value="commits"
              onClick={() => setSelectedTab('commits')}
              className={`${
                selectedTab === 'commits' ? 'bg-gray-700' : 'bg-gray-500'
              } text-white`}
            >
              Commit Activity
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="repositories">
            <div className="grid gap-4 md:grid-cols-2">
              {repositories.map((repo) => (
                <Card key={repo.id} className="bg-white shadow-xl hover:shadow-2xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-700">{repo.name}</CardTitle>
                    <CardDescription>{repo.description || 'No description available'}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>⭐ Stars: {repo.stargazers_count}</div>
                      <div>🍴 Forks: {repo.forks_count}</div>
                      <div>🔤 Language: {repo.language || 'Not specified'}</div>
                      <div>📅 Updated: {formatDate(repo.updated_at)}</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        View on GitHub <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="commits">
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all">
              <CardHeader>
                <CardTitle>Commit Activity by Day of Week</CardTitle>
                <CardDescription>
                  Based on commit data from top 5 repositories
                </CardDescription>
              </CardHeader>
              <CardContent>
                {commitActivity.length > 0 ? (
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={commitActivity}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="commits" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="text-center p-4">No commit data available</div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default GitHubProfileAnalyzer;
