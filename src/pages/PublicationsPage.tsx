import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, FileText, Award, Book } from 'lucide-react';

const PublicationsPage = () => {
  const { subpage } = useParams();
  const [activeTab, setActiveTab] = useState(subpage || 'journal-papers');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('');

  useEffect(() => {
    if (subpage) {
      setActiveTab(subpage);
    }
  }, [subpage]);

  // Sample data
  const publications = {
    'journal-papers': [
      { id: 1, title: 'High-Performance Neuromorphic Computing with Memristive Crossbar Arrays', authors: 'J. Smith, M. Johnson, S. Williams', journal: 'Nature Electronics', year: 2024, doi: '10.1038/s41928-024-0001-1', keywords: ['neuromorphic', 'memristor', 'computing'] },
      { id: 2, title: 'Quantum Effects in 2D Materials for Logic Applications', authors: 'R. Chen, E. Davis, J. Smith', journal: 'IEEE Transactions on Electron Devices', year: 2023, doi: '10.1109/TED.2023.1234567', keywords: ['quantum', '2D materials', 'logic'] },
      { id: 3, title: 'Energy-Efficient In-Memory Computing with Phase-Change Memory', authors: 'S. Williams, A. Rodriguez, P. Patel', journal: 'Advanced Materials', year: 2023, doi: '10.1002/adma.202300001', keywords: ['memory', 'phase-change', 'in-memory computing'] },
      { id: 4, title: 'Scaling Challenges in Advanced Logic Devices Beyond 1nm Node', authors: 'M. Johnson, J. Wilson, D. Kim', journal: 'IEEE Electron Device Letters', year: 2022, doi: '10.1109/LED.2022.9876543', keywords: ['scaling', 'logic', 'semiconductor'] },
      { id: 5, title: 'Spiking Neural Networks on Neuromorphic Hardware: Performance Analysis', authors: 'E. Davis, J. Smith, S. Lee', journal: 'Frontiers in Neuroscience', year: 2022, doi: '10.3389/fnins.2022.123456', keywords: ['spiking neural networks', 'performance', 'neuromorphic'] }
    ],
    'conference-papers': [
      { id: 1, title: 'A Novel Ferroelectric FET Architecture for Ultra-Low Power Computing', authors: 'D. Kim, M. Johnson, S. Williams', conference: 'IEEE International Electron Devices Meeting (IEDM)', year: 2024, location: 'San Francisco, CA', keywords: ['FeFET', 'low power', 'computing'] },
      { id: 2, title: 'Hardware Acceleration of Spiking Neural Networks for Edge AI Applications', authors: 'A. Rodriguez, E. Davis, J. Smith', conference: 'International Symposium on Computer Architecture (ISCA)', year: 2023, location: 'Orlando, FL', keywords: ['hardware acceleration', 'SNN', 'edge AI'] },
      { id: 3, title: 'Resistive Switching Characteristics of HfO2-based Memristive Devices', authors: 'P. Patel, S. Williams, R. Chen', conference: 'IEEE International Memory Workshop (IMW)', year: 2023, location: 'Dresden, Germany', keywords: ['resistive switching', 'HfO2', 'memristor'] },
      { id: 4, title: 'Quantum Transport in Heterostructure Nanowire Devices', authors: 'J. Wilson, M. Johnson, S. Lee', conference: 'APS March Meeting', year: 2022, location: 'Chicago, IL', keywords: ['quantum transport', 'nanowire', 'heterostructure'] },
      { id: 5, title: 'Thermal Management Challenges in 3D Memory Integration', authors: 'S. Lee, P. Patel, J. Smith', conference: 'International Symposium on Physical Design', year: 2022, location: 'Virtual Conference', keywords: ['thermal management', '3D memory', 'integration'] }
    ],
    'patents': [
      { id: 1, title: 'Method and Apparatus for Neuromorphic Computing Using Memristive Crossbar Arrays', inventors: 'J. Smith, M. Johnson', patentNumber: 'US 11,123,456', year: 2023, status: 'Granted', keywords: ['neuromorphic', 'memristor', 'crossbar'] },
      { id: 2, title: 'Phase-Change Memory Cell with Enhanced Reliability', inventors: 'S. Williams, P. Patel', patentNumber: 'US 11,234,567', year: 2023, status: 'Granted', keywords: ['phase-change memory', 'reliability', 'memory cell'] },
      { id: 3, title: 'Ferroelectric Field-Effect Transistor with Multi-Level Storage Capability', inventors: 'M. Johnson, D. Kim', patentNumber: 'US 2022/0123456', year: 2022, status: 'Application', keywords: ['FeFET', 'multi-level', 'storage'] },
      { id: 4, title: 'Method for Fabricating 2D Material-Based Logic Devices', inventors: 'R. Chen, J. Smith', patentNumber: 'US 2022/0234567', year: 2022, status: 'Application', keywords: ['2D materials', 'fabrication', 'logic'] }
    ],
    'books': [
      { id: 1, title: 'Neuromorphic Computing: Principles and Applications', authors: 'J. Smith, E. Davis', publisher: 'Academic Press', year: 2023, isbn: '978-0-12-345678-9', keywords: ['neuromorphic', 'computing', 'applications'] },
      { id: 2, title: 'Chapter 5: Memristive Devices for Neural Networks', bookTitle: 'Handbook of Advanced Memory Technologies', authors: 'S. Williams, P. Patel', editor: 'R. Johnson', publisher: 'Springer', year: 2022, isbn: '978-3-030-12345-6', keywords: ['memristive', 'neural networks', 'memory'] },
      { id: 3, title: 'Chapter 8: Quantum Effects in Nanoscale Electronic Devices', bookTitle: 'Quantum Electronics for Advanced Computing', authors: 'M. Johnson, J. Wilson', editor: 'T. Anderson', publisher: 'Wiley', year: 2022, isbn: '978-1-118-12345-6', keywords: ['quantum effects', 'nanoscale', 'electronic devices'] }
    ]
  };

  const tabItems = [
    { id: 'journal-papers', label: 'Journal Papers', icon: <FileText className="h-4 w-4" /> },
    { id: 'conference-papers', label: 'Conference Papers', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'patents', label: 'Patents', icon: <Award className="h-4 w-4" /> },
    { id: 'books', label: 'Books & Book Chapters', icon: <Book className="h-4 w-4" /> }
  ];

  // Get all years for filtering
  const getYears = () => {
    const years = new Set<number>(); // Explicitly set type as number
    Object.values(publications).forEach(category => {
      category.forEach(pub => years.add(pub.year));
    });
    return Array.from(years).sort((a, b) => b - a); // Sort descending
  };
  

  // Filter publications based on search term and year
  const getFilteredPublications = () => {
    if (!publications || !publications[activeTab as keyof typeof publications]) return [];
  
    return publications[activeTab as keyof typeof publications]!.filter(pub => {
      const matchesSearch =
        !searchTerm ||
        pub.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ("authors" in pub && pub.authors?.toLowerCase().includes(searchTerm.toLowerCase())) ||
        ("inventors" in pub && pub.inventors?.toLowerCase().includes(searchTerm.toLowerCase())) ||
        pub.keywords?.some(kw => kw.toLowerCase().includes(searchTerm.toLowerCase()));
  
      const matchesYear = !filterYear || pub.year?.toString() === filterYear;
  
      return matchesSearch && matchesYear;
    });
  };
  
  
  
  const filteredPublications = getFilteredPublications();

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Publications</h1>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center space-x-1 md:space-x-4 mb-8 border-b">
          {tabItems.map(tab => (
            <Link 
              key={tab.id}
              to={`/publications/${tab.id}`}
              className={`px-4 py-2 font-medium text-sm md:text-base mb-1 flex items-center gap-2 ${activeTab === tab.id ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {tab.icon}
              {tab.label}
            </Link>
          ))}
        </div>
        
        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search by title, author, or keyword..."
              className="w-full p-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <select
              className="w-full p-2 border rounded-md"
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
            >
              <option value="">All Years</option>
              {getYears().map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Publication List */}
        <div className="space-y-6">
          {filteredPublications?.length > 0 ? (
            filteredPublications.map(pub => (
              <div key={pub.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                {activeTab === 'journal-papers' && (
                  <>
                    <p className="text-gray-700 mb-1"><strong>Authors:</strong> {pub.authors}</p>
                    <p className="text-gray-700 mb-1"><strong>Journal:</strong> {pub.journal}, {pub.year}</p>
                    <p className="text-gray-700 mb-1"><strong>DOI:</strong> {pub.doi}</p>
                  </>
                )}
                {activeTab === 'conference-papers' && (
                  <>
                    <p className="text-gray-700 mb-1"><strong>Authors:</strong> {pub.authors}</p>
                    <p className="text-gray-700 mb-1"><strong>Conference:</strong> {pub.conference}, {pub.year}</p>
                    <p className="text-gray-700 mb-1"><strong>Location:</strong> {pub.location}</p>
                  </>
                )}
                {activeTab === 'patents' && (
                  <>
                    <p className="text-gray-700 mb-1"><strong>Inventors:</strong> {pub.inventors}</p>
                    <p className="text-gray-700 mb-1"><strong>Patent Number:</strong> {pub.patentNumber}</p>
                    <p className="text-gray-700 mb-1"><strong>Year:</strong> {pub.year}</p>
                    <p className="text-gray-700 mb-1"><strong>Status:</strong> {pub.status}</p>
                  </>
                )}
                {activeTab === 'books' && (
                  <>
                    <p className="text-gray-700 mb-1"><strong>Authors:</strong> {pub.authors}</p>
                    {pub.bookTitle && <p className="text-gray-700 mb-1"><strong>In:</strong> {pub.bookTitle}</p>}
                    <p className="text-gray-700 mb-1"><strong>Publisher:</strong> {pub.publisher}, {pub.year}</p>
                    <p className="text-gray-700 mb-1"><strong>ISBN:</strong> {pub.isbn}</p>
                  </>
                )}
                <div className="mt-2 flex flex-wrap gap-2">
                  {pub.keywords?.map((keyword, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No publications found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;