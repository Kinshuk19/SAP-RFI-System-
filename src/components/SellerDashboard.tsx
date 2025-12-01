import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  FileText, 
  Upload, 
  Clock, 
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Eye,
  Send
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';
import NavBar from './NavBar';

interface ResponseForm {
  rfiId: string;
  response: string;
  timeline: string;
  pricing: string;
  experience: string;
}

const SellerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showResponseForm, setShowResponseForm] = useState(false);
  const [selectedRFI, setSelectedRFI] = useState<any>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, reset } = useForm<ResponseForm>();

  const submissionData = [
    { status: 'Submitted', value: 15, color: '#10B981' },
    { status: 'In Progress', value: 8, color: '#F59E0B' },
    { status: 'Pending', value: 12, color: '#EF4444' }
  ];

  const performanceData = [
    { month: 'Jan', submissions: 8, accepted: 6, winRate: 75 },
    { month: 'Feb', submissions: 12, accepted: 9, winRate: 75 },
    { month: 'Mar', submissions: 10, accepted: 8, winRate: 80 },
    { month: 'Apr', submissions: 15, accepted: 11, winRate: 73 },
    { month: 'May', submissions: 18, accepted: 14, winRate: 78 },
    { month: 'Jun', submissions: 16, accepted: 13, winRate: 81 }
  ];

  const categoryData = [
    { category: 'IT Services', count: 12 },
    { category: 'Consulting', count: 8 },
    { category: 'Software', count: 15 },
    { category: 'Hardware', count: 6 }
  ];

  const openRFIs = [
    {
      id: 1,
      title: 'Cloud Infrastructure Services',
      client: 'TechCorp Solutions',
      deadline: '2025-02-15',
      budget: '$50K - $100K',
      status: 'Open',
      category: 'IT Services',
      description: 'Looking for comprehensive cloud infrastructure solutions...',
      requirements: 'AWS/Azure experience, 24/7 support, scalability'
    },
    {
      id: 2,
      title: 'CRM Implementation',
      client: 'Global Manufacturing Inc',
      deadline: '2025-02-20',
      budget: '$25K - $75K',
      status: 'Open',
      category: 'Software',
      description: 'Need CRM system implementation and customization...',
      requirements: 'Salesforce expertise, data migration, training'
    },
    {
      id: 3,
      title: 'Cybersecurity Assessment',
      client: 'Financial Services Ltd',
      deadline: '2025-02-12',
      budget: '$15K - $30K',
      status: 'Open',
      category: 'Consulting',
      description: 'Comprehensive security audit and recommendations...',
      requirements: 'CISSP certification, banking experience, compliance'
    }
  ];

  const handleFileUpload = async (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    setUploadedFiles(prev => [...prev, ...fileArray]);
  };

  const onSubmitResponse = async (data: ResponseForm) => {
    try {
      // Simulate file upload (in a real app, you'd upload to your storage service)
      const fileNames = uploadedFiles.map(file => file.name);
      
      console.log('Response Data:', { ...data, attachments: fileNames });
      setShowResponseForm(false);
      setSelectedRFI(null);
      setUploadedFiles([]);
      reset();
    } catch (error) {
      console.error('Error submitting response:', error);
    }
  };

  const openResponseForm = (rfi: any) => {
    setSelectedRFI(rfi);
    setShowResponseForm(true);
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'rfis', name: 'Open RFIs', icon: <FileText className="w-5 h-5" /> },
    { id: 'submissions', name: 'My Submissions', icon: <Send className="w-5 h-5" /> },
    { id: 'analytics', name: 'Performance', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
          <p className="text-gray-600 mt-2">Discover RFI opportunities and track your submissions</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Open Opportunities', value: '23', icon: <FileText className="w-8 h-8" />, color: 'blue' },
            { title: 'Active Submissions', value: '8', icon: <Clock className="w-8 h-8" />, color: 'yellow' },
            { title: 'Completed RFIs', value: '35', icon: <CheckCircle className="w-8 h-8" />, color: 'green' },
            { title: 'Win Rate', value: '78%', icon: <TrendingUp className="w-8 h-8" />, color: 'purple' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className={`text-${stat.color}-600 mb-4`}>{stat.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-gray-900">Dashboard Overview</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Submission Status</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={submissionData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {submissionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Opportunities</h3>
                    <div className="space-y-3">
                      {openRFIs.slice(0, 3).map((rfi) => (
                        <div key={rfi.id} className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium text-gray-900">{rfi.title}</h4>
                              <p className="text-sm text-gray-600">{rfi.client}</p>
                            </div>
                            <button
                              onClick={() => openResponseForm(rfi)}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                              Respond
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'rfis' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-semibold text-gray-900">Open RFI Opportunities</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {openRFIs.map((rfi) => (
                    <motion.div
                      key={rfi.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                      className="bg-white rounded-xl shadow-md p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{rfi.title}</h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {rfi.status}
                        </span>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Client:</span>
                          <span className="font-medium">{rfi.client}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Budget:</span>
                          <span className="font-medium text-green-600">{rfi.budget}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Deadline:</span>
                          <span className="font-medium text-red-600">{rfi.deadline}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Category:</span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{rfi.category}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">{rfi.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => openResponseForm(rfi)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          Submit Response
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'submissions' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-gray-900">My Submissions</h2>
                
                <div className="bg-white rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RFI Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { id: 1, title: 'Cloud Infrastructure Services', client: 'TechCorp', status: 'Under Review', date: '2025-01-10' },
                        { id: 2, title: 'CRM Implementation', client: 'Global Mfg', status: 'Shortlisted', date: '2025-01-08' },
                        { id: 3, title: 'Cybersecurity Assessment', client: 'Financial Ltd', status: 'Submitted', date: '2025-01-12' },
                        { id: 4, title: 'Data Analytics Platform', client: 'Retail Corp', status: 'Rejected', date: '2025-01-05' },
                        { id: 5, title: 'Mobile App Development', client: 'StartupXYZ', status: 'Won', date: '2025-01-03' }
                      ].map((submission) => (
                        <tr key={submission.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{submission.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.client}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              submission.status === 'Won' ? 'bg-green-100 text-green-800' :
                              submission.status === 'Shortlisted' ? 'bg-blue-100 text-blue-800' :
                              submission.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                              submission.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {submission.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-gray-900">Performance Analytics</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Win Rate Trend</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="winRate" stroke="#10B981" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">RFI Categories</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={categoryData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#3B82F6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                        <p className="text-2xl font-bold text-gray-900">89</p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Send className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">+12% from last month</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Success Rate</p>
                        <p className="text-2xl font-bold text-green-600">78%</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">+5% improvement</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
                        <p className="text-2xl font-bold text-yellow-600">2.3 days</p>
                      </div>
                      <div className="bg-yellow-100 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-yellow-600" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">-0.5 days faster</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Response Form Modal */}
        {showResponseForm && selectedRFI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-screen overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Submit Response</h2>
                  <button
                    onClick={() => setShowResponseForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-600 mt-2">{selectedRFI.title}</p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmitResponse)} className="p-6 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Response Details
                      </label>
                      <textarea
                        {...register('response', { required: true })}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Provide detailed response to the RFI requirements..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Proposed Timeline
                      </label>
                      <input
                        {...register('timeline', { required: true })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., 8-12 weeks"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pricing Information
                      </label>
                      <textarea
                        {...register('pricing')}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Provide pricing details and breakdown..."
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Relevant Experience
                      </label>
                      <textarea
                        {...register('experience')}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Describe relevant experience and past projects..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Supporting Documents
                      </label>
                      <div
                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 cursor-pointer"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">
                          Click to upload files or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PDF, DOC, XLS up to 10MB each</p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          className="hidden"
                          onChange={(e) => handleFileUpload(e.target.files)}
                          accept=".pdf,.doc,.docx,.xls,.xlsx"
                        />
                      </div>
                      
                      {uploadedFiles.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Files:</h4>
                          <div className="space-y-2">
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                                <span className="text-sm text-gray-600">{file.name}</span>
                                <button
                                  type="button"
                                  onClick={() => setUploadedFiles(files => files.filter((_, i) => i !== index))}
                                  className="text-red-600 hover:text-red-800 text-sm"
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowResponseForm(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Response</span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;