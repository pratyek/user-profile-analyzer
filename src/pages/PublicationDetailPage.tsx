import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, BookOpen, Award, Book, ExternalLink } from 'lucide-react';

// Reuse the types from PublicationsPage
interface BasePublication {
  id: number;
  title: string;
  year: number;
  keywords?: string[];
}

interface JournalPaper extends BasePublication {
  authors: string;
  journal: string;
  doi: string;
}

interface ConferencePaper extends BasePublication {
  authors: string;
  conference: string;
  location: string;
}

interface Patent extends BasePublication {
  inventors: string;
  patentNumber: string;
  status: string;
}

interface BookPublication extends BasePublication {
  authors: string;
  publisher: string;
  isbn: string;
  bookTitle?: string;
  editor?: string;
}

type Publication = JournalPaper | ConferencePaper | Patent | BookPublication;

interface PublicationsData {
  'journal-papers': JournalPaper[];
  'conference-papers': ConferencePaper[];
  'patents': Patent[];
  'books': BookPublication[];
}

type PublicationType = keyof PublicationsData;

const PublicationDetailPage = () => {
  const { pubType, pubId } = useParams<{ pubType: string; pubId: string }>();
  const [publication, setPublication] = useState<Publication | null>(null);
  const [loading, setLoading] = useState(true);

  // Sample dummy pdf data (in a real app, these would be actual file paths or URLs)
  const pdfLinks = {
    'journal-papers': {
      1: '/papers/neuromorphic-computing-memristive-crossbar.pdf',
      2: '/papers/quantum-effects-2d-materials-logic.pdf',
      3: '/papers/energy-efficient-in-memory-computing.pdf',
      4: '/papers/scaling-challenges-logic-devices.pdf',
      5: '/papers/spiking-neural-networks-neuromorphic-hardware.pdf'
    },
    'conference-papers': {
      1: '/papers/novel-ferroelectric-fet-architecture.pdf',
      2: '/papers/hardware-acceleration-spiking-neural-networks.pdf',
      3: '/papers/resistive-switching-hfo2-memristive.pdf',
      4: '/papers/quantum-transport-heterostructure-nanowire.pdf',
      5: '/papers/thermal-management-3d-memory.pdf'
    },
    'patents': {
      1: '/papers/patent-neuromorphic-computing-memristive.pdf',
      2: '/papers/patent-phase-change-memory-reliability.pdf',
      3: '/papers/patent-ferroelectric-fet-storage.pdf',
      4: '/papers/patent-2d-material-logic-devices.pdf'
    },
    'books': {
      1: '/papers/book-neuromorphic-computing-principles.pdf',
      2: '/papers/book-chapter-memristive-devices-neural.pdf',
      3: '/papers/book-chapter-quantum-effects-nanoscale.pdf'
    }
  };

  // Sample data - in a real app, this would typically come from an API
  const publications: PublicationsData = {
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

  useEffect(() => {
    if (pubType && pubId) {
      // Find the requested publication
      const validPubType = pubType as PublicationType;
      
      if (publications[validPubType]) {
        const pub = publications[validPubType].find(
          p => p.id === parseInt(pubId)
        );
        
        if (pub) {
          setPublication(pub);
        }
      }
      
      setLoading(false);
    }
  }, [pubType, pubId]);

  // Type guard functions
  const isJournalPaper = (pub: Publication): pub is JournalPaper => 'journal' in pub;
  const isConferencePaper = (pub: Publication): pub is ConferencePaper => 'conference' in pub;
  const isPatent = (pub: Publication): pub is Patent => 'patentNumber' in pub;
  const isBook = (pub: Publication): pub is BookPublication => 'isbn' in pub;

  // Generate PDF URL for the current publication
  const getPdfUrl = () => {
    if (!pubType || !pubId || !pdfLinks[pubType as keyof typeof pdfLinks]) return '#';
    return pdfLinks[pubType as keyof typeof pdfLinks][parseInt(pubId) as keyof typeof pdfLinks[keyof typeof pdfLinks]] || '#';
  };

  // Get icon based on publication type
  const getPublicationIcon = () => {
    switch (pubType) {
      case 'journal-papers':
        return <FileText className="h-6 w-6" />;
      case 'conference-papers':
        return <BookOpen className="h-6 w-6" />;
      case 'patents':
        return <Award className="h-6 w-6" />;
      case 'books':
        return <Book className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  // Function to handle PDF download
  const handleDownload = () => {
    // In a real app, this would trigger the actual download
    // For this example, we'll just log the action
    console.log(`Downloading ${getPdfUrl()}`);
    
    // Simulate download with an alert
    alert(`Downloading: ${publication?.title}`);
    
    // In a real implementation, you would use:
    // window.open(getPdfUrl(), '_blank');
    // or
    // const link = document.createElement('a');
    // link.href = getPdfUrl();
    // link.download = `${publication?.title}.pdf`;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="pt-20 flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!publication) {
    return (
      <div className="pt-20 max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Publication Not Found</h2>
        <p className="mb-6">The requested publication could not be found.</p>
        <Link to="/publications" className="text-blue-600 hover:underline flex items-center justify-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Publications
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Back button */}
        <Link 
          to={`/publications/${pubType}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Publication List
        </Link>
        
        {/* Publication header */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
              {getPublicationIcon()}
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{publication.title}</h1>
              {/* Publication metadata based on type */}
              {isJournalPaper(publication) && (
                <div className="space-y-2">
                  <p className="text-lg"><strong>Authors:</strong> {publication.authors}</p>
                  <p><strong>Journal:</strong> {publication.journal}</p>
                  <p><strong>Year:</strong> {publication.year}</p>
                  <p><strong>DOI:</strong> <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center">
                    {publication.doi} <ExternalLink className="h-4 w-4 ml-1" />
                  </a></p>
                </div>
              )}
              
              {isConferencePaper(publication) && (
                <div className="space-y-2">
                  <p className="text-lg"><strong>Authors:</strong> {publication.authors}</p>
                  <p><strong>Conference:</strong> {publication.conference}</p>
                  <p><strong>Year:</strong> {publication.year}</p>
                  <p><strong>Location:</strong> {publication.location}</p>
                </div>
              )}
              
              {isPatent(publication) && (
                <div className="space-y-2">
                  <p className="text-lg"><strong>Inventors:</strong> {publication.inventors}</p>
                  <p><strong>Patent Number:</strong> {publication.patentNumber}</p>
                  <p><strong>Year:</strong> {publication.year}</p>
                  <p><strong>Status:</strong> <span className={`px-2 py-1 rounded-full text-sm ${publication.status === 'Granted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {publication.status}
                  </span></p>
                </div>
              )}
              
              {isBook(publication) && (
                <div className="space-y-2">
                  <p className="text-lg"><strong>Authors:</strong> {publication.authors}</p>
                  {publication.bookTitle && <p><strong>Book Title:</strong> {publication.bookTitle}</p>}
                  {publication.editor && <p><strong>Editor:</strong> {publication.editor}</p>}
                  <p><strong>Publisher:</strong> {publication.publisher}</p>
                  <p><strong>Year:</strong> {publication.year}</p>
                  <p><strong>ISBN:</strong> {publication.isbn}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Keywords */}
        {publication.keywords && publication.keywords.length > 0 && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {publication.keywords.map((keyword, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Abstract (simulated content) */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Abstract</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, 
            nisl nisl aliquet nisl, nec tincidunt nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia,
            nisl nisl aliquet nisl, nec tincidunt nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia,
            nisl nisl aliquet nisl, nec tincidunt nisl nisl eu nisl.
          </p>
        </div>
        
        {/* PDF Viewer (simulated) */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Paper Preview</h2>
          <div className="border-2 border-gray-200 rounded-lg aspect-video bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">PDF Preview</p>
              <button 
                onClick={handleDownload}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" /> Download PDF
              </button>
            </div>
          </div>
        </div>
        
        {/* Citation Information */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Citation</h2>
          <div className="bg-gray-50 p-4 rounded-md font-mono text-sm overflow-x-auto">
            {isJournalPaper(publication) && (
              <p>
                {`${publication.authors.replace(/, /g, ', ')}. (${publication.year}). ${publication.title}. ${publication.journal}. https://doi.org/${publication.doi}`}
              </p>
            )}
            
            {isConferencePaper(publication) && (
              <p>
                {`${publication.authors.replace(/, /g, ', ')}. (${publication.year}). ${publication.title}. In ${publication.conference}, ${publication.location}.`}
              </p>
            )}
            
            {isPatent(publication) && (
              <p>
                {`${publication.inventors.replace(/, /g, ', ')}. (${publication.year}). ${publication.title}. ${publication.patentNumber}, ${publication.status}.`}
              </p>
            )}
            
            {isBook(publication) && (
              <p>
                {publication.bookTitle ? 
                  `${publication.authors.replace(/, /g, ', ')}. (${publication.year}). ${publication.title}. In ${publication.editor ? publication.editor + ' (Ed.), ' : ''}${publication.bookTitle}. ${publication.publisher}. ISBN: ${publication.isbn}` :
                  `${publication.authors.replace(/, /g, ', ')}. (${publication.year}). ${publication.title}. ${publication.publisher}. ISBN: ${publication.isbn}`
                }
              </p>
            )}
          </div>
          <button 
            className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            onClick={() => {
              // In a real app, this would copy the citation to clipboard
              alert('Citation copied to clipboard!');
            }}
          >
            Copy Citation
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicationDetailPage;