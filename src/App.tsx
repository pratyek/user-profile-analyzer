import { useState, useEffect } from 'react';
import { Menu, X, Cpu, Users, FlaskConical, BookOpen, Building2, GraduationCap, Mail, ChevronDown } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Page Components
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
// import FacilityPage from './pages/FacilityPage';
// import LecturePage from './pages/LecturePage';
// import ContactPage from './pages/ContactPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setNavVisible(false);
      } else {
        // Scrolling up
        setNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation items with dropdown options
  const navItems = [
    {
      id: 'member',
      text: 'MEMBER',
      icon: <Users className="h-4 w-4" />,
      path: '/members',
      dropdown: [
        { text: 'Faculty', path: '/members/faculty' },
        { text: 'Researchers', path: '/members/researchers' },
        { text: 'Graduate Students', path: '/members/graduate-students' },
        { text: 'Alumni', path: '/members/alumni' }
      ]
    },
    {
      id: 'research',
      text: 'RESEARCH',
      icon: <FlaskConical className="h-4 w-4" />,
      path: '/research',
      dropdown: [
        { text: 'Neuromorphic Computing', path: '/research/neuromorphic-computing' },
        { text: 'Nano-electronics', path: '/research/nano-electronics' },
        { text: 'Future Logic Devices', path: '/research/future-logic-devices' },
        { text: 'Memory Technologies', path: '/research/memory-technologies' }
      ]
    },
    {
      id: 'publication',
      text: 'PUBLICATION',
      icon: <BookOpen className="h-4 w-4" />,
      path: '/publications',
      dropdown: [
        { text: 'Journal Papers', path: '/publications/journal-papers' },
        { text: 'Conference Papers', path: '/publications/conference-papers' },
        { text: 'Patents', path: '/publications/patents' },
        { text: 'Books & Book Chapters', path: '/publications/books' }
      ]
    },
    {
      id: 'facility',
      text: 'FACILITY',
      icon: <Building2 className="h-4 w-4" />,
      path: '/facility',
      dropdown: [
        { text: 'Lab Equipment', path: '/facility/lab-equipment' },
        { text: 'Cleanroom', path: '/facility/cleanroom' },
        { text: 'Computation Resources', path: '/facility/computation-resources' },
        { text: 'Virtual Tour', path: '/facility/virtual-tour' }
      ]
    },
    {
      id: 'lecture',
      text: 'LECTURE',
      icon: <GraduationCap className="h-4 w-4" />,
      path: '/lecture',
      dropdown: [
        { text: 'Undergraduate Courses', path: '/lecture/undergraduate' },
        { text: 'Graduate Courses', path: '/lecture/graduate' },
        { text: 'Workshops', path: '/lecture/workshops' },
        { text: 'Tutorial Videos', path: '/lecture/tutorials' }
      ]
    },
    {
      id: 'contact',
      text: 'CONTACT',
      icon: <Mail className="h-4 w-4" />,
      path: '/contact',
      dropdown: [
        { text: 'Location', path: '/contact/location' },
        { text: 'Email', path: '/contact/email' },
        { text: 'Join Us', path: '/contact/join-us' },
        { text: 'Collaboration Inquiries', path: '/contact/collaboration' }
      ]
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 bg-transparent transition-transform duration-300 ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link to="/" onClick={closeMenu}>
                  <div className="flex items-center">
                    <Cpu className="h-8 w-8 text-white" />
                    <span className="ml-2 text-xl font-semibold text-white">SMILE Lab</span>
                  </div>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center">
                {navItems.map((item) => (
                  <div key={item.id} className="relative group">
                    <Link 
                      to={item.path}
                      className="text-white hover:text-gray-200 px-3 py-2 mx-1 rounded-md text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      {item.icon}
                      {item.text}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Link>
                    
                    {/* Desktop Dropdown - Now shows on hover */}
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 hidden group-hover:block">
                      <div className="py-1">
                        <Link 
                          to={item.path} 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          All {item.text}
                        </Link>
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link 
                            key={index} 
                            to={dropdownItem.path} 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {dropdownItem.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-gray-200"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/80 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <div key={item.id} className="group">
                    <Link
                      to={item.path}
                      className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between cursor-pointer"
                      onClick={closeMenu}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        {item.text}
                      </div>
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Link>
                    
                    {/* Mobile Dropdown - Made to work with hover on mobile via groups */}
                    <div className="pl-6 mt-1 space-y-1 hidden group-hover:block">
                      {item.dropdown.map((dropdownItem, index) => (
                        <Link 
                          key={index} 
                          to={dropdownItem.path} 
                          className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white"
                          onClick={closeMenu}
                        >
                          {dropdownItem.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/members/:subpage" element={<MembersPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:subpage" element={<ResearchPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/publications/:subpage" element={<PublicationsPage />} />
          {/* <Route path="/facility" element={<FacilityPage />} />
          <Route path="/facility/:subpage" element={<FacilityPage />} />
          <Route path="/lecture" element={<LecturePage />} />
          <Route path="/lecture/:subpage" element={<LecturePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/:subpage" element={<ContactPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;