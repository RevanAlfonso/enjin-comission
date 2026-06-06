import React, { useState, useEffect } from 'react';
import { Music2, Mail, X, Moon, Sun, ChevronRight, Globe, ArrowRight } from 'lucide-react';

const InstagramIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const TikTokIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const t = {
  en: {
    pricelist: 'Pricelist',
    tos: 'Terms of Service',
    portfolio: 'Portfolio',
    modalPricelistTitle: 'Commission Pricelist',
    modalTosTitle: 'Terms of Service',
    modalPortfolioTitle: 'Selected Works',
    mannequin: 'HUMAN MANNEQUIN',
    skeleton: 'SKELETON BASE',
    priceDisclaimer: '*Prices are base estimates in USD. Complex designs may incur additional costs.',
    nextTos: 'Next: Terms of Service',
    nextPortfolio: 'Next: Portfolio',
    backHome: 'Back to Home'
  },
  id: {
    pricelist: 'Daftar Harga',
    tos: 'Syarat & Ketentuan',
    portfolio: 'Portofolio',
    modalPricelistTitle: 'Daftar Harga Komisi',
    modalTosTitle: 'Syarat & Ketentuan',
    modalPortfolioTitle: 'Karya Terpilih',
    mannequin: 'MANEKIN MANUSIA',
    skeleton: 'DASAR TENGKORAK',
    priceDisclaimer: '*Harga adalah perkiraan dasar. Desain kompleks mungkin memerlukan biaya tambahan.',
    nextTos: 'Selanjutnya: Syarat & Ketentuan',
    nextPortfolio: 'Selanjutnya: Portofolio',
    backHome: 'Kembali ke Beranda'
  }
};

const GardenTheme = {
  id: 'garden',
  name: "Enjin's Garden",
  quote: {
    en: '"Sometimes something beautiful comes from a sincere hand."',
    id: '"Terkadang sesuatu yang indah berasal dari tangan yang tulus."'
  },
  avatar: 'https://images.unsplash.com/photo-1585834891480-1a76e01a916d?auto=format&fit=crop&w=400&q=80',
  bgStyle: {
    backgroundColor: '#fdfbf7',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E"), radial-gradient(circle at 50% 0%, #fdfbf7 0%, #f4eefc 100%)`,
  },
  textPrimary: 'text-[#6b5b95]',
  textSecondary: 'text-[#8b7ea8]',
  buttonClass: 'bg-[#aaa4f0] hover:bg-[#9993db] text-white shadow-sm rounded-full',
  iconClass: 'text-[#6b5b95] hover:text-[#d4c4fb]',
  modalBg: 'bg-[#fdfbf7]/95 backdrop-blur-md',
  modalCard: 'bg-white rounded-3xl border border-[#d4c4fb]/30 shadow-xl overflow-hidden',
};

const LabTheme = {
  id: 'lab',
  name: "Enjin's Lab",
  quote: {
    en: '"A laboratory where every creature is meticulously sculpted by hand into Arts."',
    id: '"Sebuah laboratorium di mana setiap makhluk dipahat dengan teliti menjadi Seni."'
  },
  avatar: 'https://images.unsplash.com/photo-1509650085025-5e042cf38aee?auto=format&fit=crop&w=400&q=80',
  bgStyle: {
    backgroundColor: '#050508',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E"), radial-gradient(circle at 50% 0%, #1a1e2e 0%, #050508 100%)`,
  },
  textPrimary: 'text-[#e0e0e0]',
  textSecondary: 'text-[#a0aabf]',
  buttonClass: 'bg-[#5b738e]/40 hover:bg-[#5b738e]/60 text-[#e0e0e0] border border-[#5b738e]/30 shadow-sm backdrop-blur-sm rounded-full',
  iconClass: 'text-[#a0aabf] hover:text-[#00f0ff]',
  modalBg: 'bg-[#050508]/95 backdrop-blur-md',
  modalCard: 'bg-[#0a0f1a] rounded-xl border border-[#00f0ff]/20 shadow-[0_0_30px_rgba(0,240,255,0.05)] overflow-hidden',
};

const pricingData = {
  garden: [
    { title: { en: 'Headshot', id: 'Pas Foto' }, price: { en: '$25', id: 'Rp 350.000' } },
    { title: { en: 'Bust Up', id: 'Dada ke Atas' }, price: { en: '$40', id: 'Rp 600.000' } },
    { title: { en: 'Half Body', id: 'Setengah Badan' }, price: { en: '$55', id: 'Rp 850.000' } },
    { title: { en: 'Knee Up', id: 'Lutut ke Atas' }, price: { en: '$75', id: 'Rp 1.150.000' } },
    { title: { en: 'Full Body', id: 'Seluruh Badan' }, price: { en: '$90', id: 'Rp 1.400.000' } },
  ],
  lab: [
    { title: { en: 'Headshot', id: 'Pas Foto' }, price: { en: '$35', id: 'Rp 500.000' } },
    { title: { en: 'Bust Up', id: 'Dada ke Atas' }, price: { en: '$55', id: 'Rp 850.000' } },
    { title: { en: 'Half Body', id: 'Setengah Badan' }, price: { en: '$75', id: 'Rp 1.150.000' } },
    { title: { en: 'Knee Up', id: 'Lutut ke Atas' }, price: { en: '$100', id: 'Rp 1.500.000' } },
    { title: { en: 'Full Body', id: 'Seluruh Badan' }, price: { en: '$130', id: 'Rp 1.950.000' } },
  ]
};

const tosData = {
  en: [
    { title: 'Payment', content: 'Payments must be made upfront via PayPal. I will begin sketching once the payment is confirmed.' },
    { title: 'Revisions', content: 'Up to 3 major revisions during the sketch phase. Minor color adjustments are free during the final phase.' },
    { title: 'Deadlines', content: 'Standard completion time is 2-4 weeks depending on queue length and complexity.' },
    { title: 'Refunds', content: 'Full refund before sketch begins. 50% refund during sketch. No refunds once lineart is started.' },
    { title: 'Commercial Use', content: 'Base prices are for personal use only. Commercial rights require a +100% fee multiplier.' },
  ],
  id: [
    { title: 'Pembayaran', content: 'Pembayaran harus dilakukan di muka via Transfer Bank / E-Wallet. Saya akan mulai membuat sketsa setelah pembayaran dikonfirmasi.' },
    { title: 'Revisi', content: 'Hingga 3 revisi besar selama fase sketsa. Penyesuaian warna minor gratis selama fase akhir.' },
    { title: 'Tenggat Waktu', content: 'Waktu penyelesaian standar adalah 2-4 minggu tergantung pada panjang antrean dan kompleksitas.' },
    { title: 'Pengembalian Dana', content: 'Pengembalian dana penuh sebelum sketsa dimulai. Pengembalian 50% selama sketsa. Tidak ada pengembalian dana setelah lineart dimulai.' },
    { title: 'Penggunaan Komersial', content: 'Harga dasar hanya untuk penggunaan pribadi. Hak komersial memerlukan pengganda biaya +100%.' },
  ]
};

const portfolioData = {
  garden: [
    'https://images.unsplash.com/photo-1518599904199-0ca897819ddb?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1522061266050-7164101e4a1a?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1528696892704-5e1122852276?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=400&q=80',
  ],
  lab: [
    'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1542466500-dccb2789cbaa?auto=format&fit=crop&w=400&q=80',
  ]
};

export default function App() {
  const [activeTheme, setActiveTheme] = useState('garden');
  const [activeModal, setActiveModal] = useState(null); // 'pricelist', 'tos', 'portfolio', null
  const [language, setLanguage] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const theme = activeTheme === 'garden' ? GardenTheme : LabTheme;
  const i18n = t[language];

  const toggleTheme = () => {
    setActiveTheme(prev => prev === 'garden' ? 'lab' : 'garden');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  const openModal = (id) => {
    setActiveModal(id);
    setAnimationKey(prev => prev + 1);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  const navigateModal = (id) => {
    setAnimationKey(prev => prev + 1);
    setActiveModal(id);
    // Scroll to top of the modal body when navigating
    setTimeout(() => {
      const modalBody = document.getElementById('modal-body-container');
      if (modalBody) modalBody.scrollTop = 0;
    }, 10);
  };

  return (
    <div 
      className="min-h-screen w-full transition-smooth flex justify-center selection:bg-black/10"
      style={theme.bgStyle}
    >
      {/* Top Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={toggleLanguage}
          className={`p-3 rounded-full backdrop-blur-md transition-smooth hover:scale-110 active:scale-95 flex items-center justify-center font-bold text-xs ${
            activeTheme === 'garden' 
              ? 'bg-white/50 text-[#6b5b95] border border-[#d4c4fb]/50' 
              : 'bg-[#0a0f1a]/80 text-[#00f0ff] border border-[#00f0ff]/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
          }`}
          aria-label="Toggle language"
        >
          {language === 'en' ? 'ID' : 'EN'}
        </button>

        <button 
          onClick={toggleTheme}
          className={`p-3 rounded-full backdrop-blur-md transition-smooth hover:scale-110 active:scale-95 ${
            activeTheme === 'garden' 
              ? 'bg-white/50 text-[#6b5b95] border border-[#d4c4fb]/50' 
              : 'bg-[#0a0f1a]/80 text-[#00f0ff] border border-[#00f0ff]/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
          }`}
          aria-label="Toggle theme"
        >
          {activeTheme === 'garden' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      {/* Main Container - Mobile Centered Card Layout */}
      <main className={`w-full max-w-sm px-6 py-12 flex flex-col items-center min-h-[100dvh] relative transition-smooth ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
        {/* Avatar */}
        <div className="relative mb-6">
          <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden transition-smooth duration-500 ${
            activeTheme === 'garden' ? 'border-4 border-white shadow-lg' : 'border border-[#00f0ff]/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
          }`}>
            <img 
              src={theme.avatar} 
              alt={theme.name} 
              className="w-full h-full object-cover transition-smooth hover:scale-110 duration-700"
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className={`text-2xl md:text-3xl font-bold mb-2 transition-smooth ${theme.textPrimary}`}>
          {theme.name}
        </h1>

        {/* Quote */}
        <p className={`text-center text-sm mb-8 px-4 transition-smooth ${theme.textSecondary}`}>
          {theme.quote[language]}
        </p>

        {/* Links */}
        <div className="w-full flex flex-col gap-4 mb-10">
          <button 
            onClick={() => openModal('pricelist')}
            className={`w-full py-4 px-6 flex items-center justify-between text-base font-medium transition-smooth hover:scale-[1.02] active:scale-[0.98] ${theme.buttonClass}`}
          >
            <span>{i18n.pricelist}</span>
            <ChevronRight size={18} opacity={0.6} />
          </button>
          
          <button 
            onClick={() => openModal('tos')}
            className={`w-full py-4 px-6 flex items-center justify-between text-base font-medium transition-smooth hover:scale-[1.02] active:scale-[0.98] ${theme.buttonClass}`}
          >
            <span>{i18n.tos}</span>
            <ChevronRight size={18} opacity={0.6} />
          </button>

          <button 
            onClick={() => openModal('portfolio')}
            className={`w-full py-4 px-6 flex items-center justify-between text-base font-medium transition-smooth hover:scale-[1.02] active:scale-[0.98] ${theme.buttonClass}`}
          >
            <span>{i18n.portfolio}</span>
            <ChevronRight size={18} opacity={0.6} />
          </button>
        </div>

        {/* Socials */}
        <div className="flex gap-6 mt-auto">
          {[
            { icon: InstagramIcon, href: '#' },
            { icon: TikTokIcon, href: '#' },
            { icon: TwitterIcon, href: '#' },
            { icon: Mail, href: '#' }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href}
              className={`p-2 transition-smooth hover:scale-110 active:scale-95 ${theme.iconClass}`}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </main>

      {/* Modals */}
      <div 
        className={`fixed inset-0 z-40 transition-smooth flex items-center justify-center p-4 md:p-8 ${
          activeModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } ${theme.modalBg}`}
      >
        <div 
          className={`w-full max-w-md max-h-[90dvh] flex flex-col transition-smooth transform ${
            activeModal ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
          } ${theme.modalCard}`}
        >
          {/* Modal Header */}
          <div className={`flex items-center justify-between p-5 border-b shrink-0 ${
            activeTheme === 'garden' ? 'border-[#d4c4fb]/20 bg-white/50' : 'border-[#00f0ff]/10 bg-[#050508]/50'
          }`}>
            <h2 className={`font-bold text-lg ${theme.textPrimary}`}>
              {activeModal === 'pricelist' && i18n.modalPricelistTitle}
              {activeModal === 'tos' && i18n.modalTosTitle}
              {activeModal === 'portfolio' && i18n.modalPortfolioTitle}
            </h2>
            <button 
              onClick={closeModal}
              className={`p-2 rounded-full transition-smooth hover:rotate-90 ${
                activeTheme === 'garden' ? 'bg-[#f4eefc] text-[#6b5b95] hover:bg-[#e4d7f5]' : 'bg-[#111827] text-[#00f0ff] hover:bg-[#1f2937]'
              }`}
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div id="modal-body-container" className="overflow-y-auto p-5 flex-1 custom-scrollbar">
            <div key={animationKey} className="animate-slide-up-fade flex flex-col h-full">
              {activeModal === 'pricelist' && <PricelistContent theme={activeTheme} language={language} i18n={i18n} onNext={() => navigateModal('tos')} />}
              {activeModal === 'tos' && <ToSContent theme={activeTheme} language={language} i18n={i18n} onNext={() => navigateModal('portfolio')} />}
              {activeModal === 'portfolio' && <PortfolioContent theme={activeTheme} i18n={i18n} onNext={closeModal} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Modals Components ---

function PricelistContent({ theme, language, i18n, onNext }) {
  const isGarden = theme === 'garden';
  const data = pricingData[theme];
  const [currency, setCurrency] = React.useState(language);

  // Sync internal currency if global language is changed
  React.useEffect(() => {
    setCurrency(language);
  }, [language]);

  const toggleCurrency = () => {
    setCurrency(prev => prev === 'en' ? 'id' : 'en');
  };
  
  return (
    <div className="flex flex-col space-y-6 flex-1">
      <div className={`w-full h-48 shrink-0 rounded-xl overflow-hidden flex items-center justify-center relative ${
        isGarden ? 'bg-[#f4eefc]' : 'bg-[#050508] border border-[#00f0ff]/20'
      }`}>
        <div className="absolute inset-0 opacity-50 flex items-center justify-center pointer-events-none">
          {isGarden ? (
             <div className="w-24 h-48 bg-white/50 rounded-full blur-sm"></div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-16 border border-[#00f0ff]/30 rounded-full"></div>
              <div className="w-16 h-24 border border-[#00f0ff]/30 rounded-lg"></div>
            </div>
          )}
        </div>
        <p className={`relative z-10 font-bold tracking-widest text-xl opacity-70 ${
          isGarden ? 'text-[#6b5b95]' : 'text-[#00f0ff]'
        }`}>
          {isGarden ? i18n.mannequin : i18n.skeleton}
        </p>
      </div>

      <div className="flex justify-end shrink-0">
        <button 
          onClick={toggleCurrency}
          className={`px-4 py-2 text-xs font-bold rounded-full transition-smooth hover:scale-105 active:scale-95 ${
            isGarden 
              ? 'bg-[#aaa4f0] text-white shadow-sm hover:bg-[#9993db]' 
              : 'bg-[#5b738e]/40 text-[#e0e0e0] border border-[#5b738e]/30 shadow-sm hover:bg-[#5b738e]/60'
          }`}
        >
          {currency === 'en' ? 'Switch to IDR (Rp)' : 'Switch to USD ($)'}
        </button>
      </div>

      <div className="space-y-3 shrink-0">
        {data.map((item, i) => (
          <div 
            key={i}
            className={`flex justify-between items-center p-4 rounded-xl transition-smooth hover:-translate-y-1 ${
              isGarden 
                ? 'bg-[#fdfbf7] border border-[#d4c4fb]/30 shadow-sm' 
                : 'bg-[#111827] border border-[#00f0ff]/10 hover:border-[#00f0ff]/40'
            }`}
          >
            <span className={`font-medium ${isGarden ? 'text-[#6b5b95]' : 'text-[#e0e0e0]'}`}>
              {item.title[language]}
            </span>
            <span className={`font-bold ${isGarden ? 'text-[#8b7ea8]' : 'text-[#00f0ff]'}`}>
              {item.price[currency]}
            </span>
          </div>
        ))}
      </div>
      
      <p className={`text-xs text-center mt-2 opacity-70 shrink-0 ${isGarden ? 'text-[#6b5b95]' : 'text-[#a0aabf]'}`}>
        {i18n.priceDisclaimer}
      </p>

      {/* Next Button */}
      <div className="mt-8 pt-4 pb-2 mt-auto shrink-0 border-t border-opacity-10 border-current">
        <button 
          onClick={onNext}
          className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-smooth hover:scale-[1.02] active:scale-[0.98] ${
            isGarden 
              ? 'bg-[#d4c4fb]/20 text-[#6b5b95] hover:bg-[#d4c4fb]/40' 
              : 'bg-[#00f0ff]/10 text-[#00f0ff] hover:bg-[#00f0ff]/20'
          }`}
        >
          {i18n.nextTos} <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

function ToSContent({ theme, language, i18n, onNext }) {
  const isGarden = theme === 'garden';
  const sections = tosData[language];

  return (
    <div className={`flex flex-col space-y-6 flex-1 ${isGarden ? '' : 'font-mono text-sm'}`}>
      <div className="space-y-4 shrink-0">
        {sections.map((sec, i) => (
          <div key={i} className={`p-4 rounded-xl ${
            isGarden 
              ? 'bg-[#fdfbf7] border-l-4 border-[#d4c4fb]' 
              : 'bg-[#050508] border border-[#00f0ff]/10 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#00f0ff]/50'
          }`}>
            <h3 className={`font-bold mb-2 ${isGarden ? 'text-[#6b5b95]' : 'text-[#00f0ff]'}`}>
              {sec.title}
            </h3>
            <p className={`leading-relaxed ${isGarden ? 'text-[#8b7ea8] text-sm' : 'text-[#a0aabf]'}`}>
              {sec.content}
            </p>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="mt-8 pt-4 pb-2 mt-auto shrink-0 border-t border-opacity-10 border-current">
        <button 
          onClick={onNext}
          className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-smooth hover:scale-[1.02] active:scale-[0.98] ${
            isGarden 
              ? 'bg-[#d4c4fb]/20 text-[#6b5b95] hover:bg-[#d4c4fb]/40' 
              : 'bg-[#00f0ff]/10 text-[#00f0ff] hover:bg-[#00f0ff]/20'
          }`}
        >
          {i18n.nextPortfolio} <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

function PortfolioContent({ theme, i18n, onNext }) {
  const isGarden = theme === 'garden';
  const images = portfolioData[theme];

  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="grid grid-cols-2 gap-3 shrink-0">
        {images.map((url, i) => (
          <div 
            key={i}
            className={`aspect-square rounded-xl overflow-hidden cursor-pointer transition-smooth hover:scale-105 ${
              isGarden 
                ? 'shadow-sm border border-white' 
                : 'border border-[#00f0ff]/20 hover:border-[#00f0ff]/80 shadow-[0_0_10px_rgba(0,240,255,0.05)] hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
            }`}
          >
            <img 
              src={url} 
              alt={`Portfolio piece ${i+1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="mt-8 pt-4 pb-2 mt-auto shrink-0">
        <button 
          onClick={onNext}
          className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-smooth hover:scale-[1.02] active:scale-[0.98] ${
            isGarden 
              ? 'bg-[#d4c4fb]/20 text-[#6b5b95] hover:bg-[#d4c4fb]/40' 
              : 'bg-[#00f0ff]/10 text-[#00f0ff] hover:bg-[#00f0ff]/20'
          }`}
        >
          {i18n.backHome}
        </button>
      </div>
    </div>
  );
}
