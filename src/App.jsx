import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Zap, Palette, Video, Calendar, Share2, Camera, Target, Youtube, TrendingUp, Search, Megaphone } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Sparkles, title: 'Branding', desc: 'Crafting unique identities that resonate', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, title: 'Web Development', desc: 'Building digital experiences that perform', color: 'from-blue-500 to-cyan-500' },
    { icon: Palette, title: 'Graphic Designing', desc: 'Visual storytelling that captivates', color: 'from-pink-500 to-orange-500' },
    { icon: Video, title: 'Motion Graphics', desc: 'Bringing ideas to life with animation', color: 'from-indigo-500 to-purple-500' },
    { icon: Calendar, title: 'Events', desc: 'Creating memorable experiences', color: 'from-green-500 to-teal-500' },
    { icon: Share2, title: 'Social Media Marketing', desc: 'Amplifying your voice across platforms', color: 'from-cyan-500 to-blue-500' },
    { icon: Camera, title: 'Photography', desc: 'Capturing moments that matter', color: 'from-yellow-500 to-orange-500' },
    { icon: Target, title: 'Advertising', desc: 'Strategic campaigns that convert', color: 'from-red-500 to-pink-500' },
    { icon: Youtube, title: 'YouTube Marketing', desc: 'Growing your channel exponentially', color: 'from-red-600 to-red-400' },
    { icon: TrendingUp, title: 'Video Advertising', desc: 'Engaging content that sells', color: 'from-purple-600 to-pink-400' },
    { icon: Search, title: 'SEO', desc: 'Dominating search rankings organically', color: 'from-green-600 to-emerald-400' },
    { icon: Megaphone, title: 'Campaigns', desc: 'Integrated marketing that delivers', color: 'from-orange-500 to-yellow-500' }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '200+', label: 'Happy Clients' },
    { number: '15+', label: 'Countries Served' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            ViyaSolutions
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Get Started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Transform Your
            <br />
            Digital Presence
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            We craft extraordinary digital experiences that elevate brands and drive results across the globe
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-slate-400">Comprehensive solutions for your digital success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveService(idx)}
                  onMouseLeave={() => setActiveService(null)}
                  className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">{service.desc}</p>
                  
                  <div className="mt-4 flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's create something extraordinary together. Join 200+ satisfied clients worldwide.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 px-12 py-5 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                ViyaSolutions
              </div>
              <p className="text-slate-400">Transforming visions into digital reality</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Services</h4>
              <div className="space-y-2 text-slate-400">
                <div>Branding</div>
                <div>Web Development</div>
                <div>Marketing</div>
                <div>Design</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Company</h4>
              <div className="space-y-2 text-slate-400">
                <div>About Us</div>
                <div>Portfolio</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Connect</h4>
              <div className="space-y-2 text-slate-400">
                <div>LinkedIn</div>
                <div>Instagram</div>
                <div>Twitter</div>
                <div>Facebook</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ViyaSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;