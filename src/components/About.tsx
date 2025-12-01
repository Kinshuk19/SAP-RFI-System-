import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Clock, 
  Shield, 
  BarChart3, 
  Users, 
  FileText, 
  TrendingUp, 
  CheckCircle,
  Zap,
  Globe
} from 'lucide-react';
import NavBar from './NavBar';
import Footer from './Footer';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Smart RFI Creation",
      description: "Create comprehensive RFI documents with customizable templates and automated workflows."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Supplier Management",
      description: "Efficiently manage supplier relationships and track their performance across multiple RFIs."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Gain insights with powerful analytics and reporting tools for data-driven decisions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Platform",
      description: "Enterprise-grade security ensuring your sensitive procurement data is protected."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Efficiency",
      description: "Reduce procurement cycles by up to 60% with automated processes and streamlined workflows."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Connect with suppliers worldwide and expand your procurement network effortlessly."
    }
  ];

  const impacts = [
    { metric: "60%", label: "Faster Procurement", icon: <Zap className="w-6 h-6" /> },
    { metric: "85%", label: "Cost Reduction", icon: <TrendingUp className="w-6 h-6" /> },
    { metric: "95%", label: "Process Efficiency", icon: <Target className="w-6 h-6" /> },
    { metric: "100K+", label: "RFIs Processed", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              About{" "}
              <span className="text-blue-600">SAP RFI System</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Revolutionizing procurement processes with intelligent automation, 
              comprehensive analytics, and seamless supplier collaboration.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is SAP RFI System */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is SAP RFI System?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                SAP RFI System is a comprehensive procurement platform designed to streamline 
                the Request for Information process. Built with enterprise-grade capabilities, 
                it connects buyers and suppliers in a secure, efficient digital environment.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our platform leverages advanced analytics, automated workflows, and intelligent 
                matching algorithms to transform how organizations manage their procurement processes, 
                making them faster, more transparent, and data-driven.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Mission</h3>
                  <p className="text-gray-600">Simplify procurement for everyone</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-6">
                {impacts.map((impact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md text-center"
                  >
                    <div className="text-blue-600 mb-2 flex justify-center">{impact.icon}</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{impact.metric}</div>
                    <div className="text-sm text-gray-600">{impact.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Use It */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Why Choose SAP RFI System?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Transform your procurement process with cutting-edge technology and proven methodologies
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Save Time & Resources",
                description: "Automate repetitive tasks and reduce manual effort by up to 70%"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Ensure Compliance",
                description: "Built-in compliance checks and audit trails for regulatory requirements"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Data-Driven Decisions",
                description: "Advanced analytics provide insights for better procurement strategies"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Supplier Collaboration",
                description: "Seamless communication and collaboration with your supplier network"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Quality Assurance",
                description: "Standardized processes ensure consistent, high-quality outcomes"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Scalable Growth",
                description: "Platform grows with your business needs and procurement volume"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Key Features
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive tools designed to optimize every aspect of your procurement workflow
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
                className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-blue-600 mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our Impact
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
            >
              Trusted by leading organizations worldwide to transform their procurement processes
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Enterprise Clients" },
                { number: "2M+", label: "RFIs Processed" },
                { number: "50K+", label: "Active Suppliers" },
                { number: "99.9%", label: "Uptime Guarantee" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;