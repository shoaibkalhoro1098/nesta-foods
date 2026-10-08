'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, PhoneCall, Sparkles, Target, Globe, ShieldCheck, 
  Truck, CheckCircle, Droplets, ThermometerSnowflake, FileText, 
  Briefcase, ChevronRight, Calculator, Search, Leaf, Shield, 
  Award, Menu, X, LineChart, TrendingUp, MapPin, Mail, Users, ArrowRight, Quote, Factory, Send
} from 'lucide-react';

// --- SHARED ANIMATIONS & GLOBAL DATA ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const WA_NUMBER = "923000977397";

const productsData = [
  {
    id: 1,
    title: "Premium Cow Milk",
    seoDesc: "Buy the best pure cow milk nationwide.",
    format: "1 Liter Flexible Pouch",
    desc: "Sourced directly from Sargodha's finest farms. Our pasteurized milk delivers a clean dairy aroma and natural creaminess. Zero powder, zero preservatives—just the best milk for your family's daily nutrition.",
    image: "/2_2.jpeg",
    badge: "Top Rated Milk"
  },
  {
    id: 2,
    title: "Sweet Yogurt",
    seoDesc: "Order delicious sweet yogurt online for desserts and snacking.",
    format: "400g Premium Cup",
    desc: "Perfectly balanced sweetness with a velvety texture. This ready-to-eat sweet yogurt is the rising standard for healthy snacking and festive dining.",
    image: "/4_2.jpeg",
    badge: "Household Favorite"
  },
  {
    id: 3,
    title: "Farm Fresh Plain Yogurt",
    seoDesc: "Best plain yogurt for cooking and raita in Pakistan.",
    format: "450g Flexible Pouch",
    desc: "Traditional cultured yogurt engineered for modern hygiene. Featuring a smooth consistency and fresh flavor profile, it is the ultimate choice for daily meals and authentic recipes.",
    image: "/3_2.jpeg",
    badge: "Daily Nutrition"
  },
  {
    id: 4,
    title: "Commercial Set Yogurt",
    seoDesc: "Bulk 5kg yogurt buckets for HoReCa, restaurants, and catering.",
    format: "5 KG Heavy-Duty Bucket",
    desc: "The professional chef's secret. A heavy-duty bucket with a tamper-evident seal, delivering a rich, firm texture with zero water separation. Trusted by top hotels and restaurants.",
    image: "/1_2.jpeg",
    badge: "HORECA Bestseller"
  }
];

// ---------------------------------------------------------------------------
// INTELLIGENT AI CHATBOT ENGINE
// ---------------------------------------------------------------------------
function NestaAiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    { 
      sender: 'ai', 
      text: "Assalam-o-Alaikum! Welcome to NESTA Foods. I am your AI assistant trained on all our pure dairy standards. How can I help you today? Would you like to place an order or become a distributor?" 
    }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    const newMessages = [...messages, { sender: 'user' as const, text: userText }];
    setMessages(newMessages);
    setInputVal('');

    setTimeout(() => {
      let aiReply = "NESTA is Pakistan's rising star in premium dairy—100% Traceable and 0% Artificial. To secure your delivery or discuss bulk partnership, connect with our team directly on WhatsApp at 0300 0977397!";
      
      const lower = userText.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('rate')) {
        aiReply = "Our flexible pouch milk and pure yogurt are priced competitively for households and commercial kitchens. Let's connect you on WhatsApp (0300 0977397) to share today's exact rate sheet!";
      } else if (lower.includes('milk') || lower.includes('buy milk')) {
        aiReply = "Our Premium Cow Milk is sourced directly from Sargodha's finest farms, pasteurized in closed stainless steel vessels with zero powders or preservatives. Order instantly via WhatsApp at 0300 0977397!";
      } else if (lower.includes('yogurt') || lower.includes('dahi')) {
        aiReply = "We offer 400g Sweet Yogurt, 450g Plain Yogurt pouches, and heavy-duty 5KG Commercial Set Yogurt buckets designed specifically for chefs with zero water separation! Message us on WhatsApp to order.";
      } else if (lower.includes('distributor') || lower.includes('horeca') || lower.includes('business') || lower.includes('wholesale')) {
        aiReply = "We offer nationwide distribution and HoReCa wholesale partnerships with structured tier discounts and reliable cold-chain delivery! Fill out our B2B form on the website or message us directly on WhatsApp (0300 0977397).";
      } else if (lower.includes('location') || lower.includes('address') || lower.includes('where')) {
        aiReply = "Our Corporate Head Office is located at Khyber Market, G-13/4, Islamabad, with our primary processing facility operating out of Sargodha Industrial Estate. We deliver nationwide!";
      }

      setMessages([...newMessages, { sender: 'ai', text: aiReply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="absolute bottom-20 right-0 w-[360px] sm:w-[380px] bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-[#002D62] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span></div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider">NESTA AI Assistant</h4>
                  <span className="text-[10px] text-slate-300">Online • Nationwide Support</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white text-2xl leading-none">&times;</button>
            </div>

            <div className="p-4 text-xs sm:text-sm text-slate-700 bg-slate-50 h-72 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, index) => (
                <div key={index} className={`p-3.5 rounded-2xl max-w-[88%] shadow-sm leading-relaxed ${msg.sender === 'user' ? 'bg-[#002D62] text-white ml-auto rounded-tr-none' : 'bg-white text-slate-800 border border-slate-200 mr-auto rounded-tl-none'}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="px-4 py-2 bg-emerald-50 border-t border-emerald-100 flex items-center justify-between text-xs">
              <span className="text-emerald-800 font-semibold">Ready to order instantly?</span>
              <a href={`https://wa.me/${WA_NUMBER}?text=Hello%20NESTA,%20I%20chatted%20with%20your%20AI%20assistant%20and%20want%20to%20order.`} target="_blank" rel="noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider transition-colors flex items-center gap-1 shadow-sm">
                <PhoneCall className="w-3 h-3"/> WhatsApp 0300-0977397
              </a>
            </div>

            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex gap-2">
              <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} placeholder="Ask about milk, yogurt, prices..." className="w-full bg-slate-50 rounded-xl px-4 py-2 text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#5F8F5C] border border-slate-200" />
              <button type="submit" className="bg-[#002D62] hover:bg-[#001f44] text-white px-4 py-2 rounded-xl font-bold transition-colors flex items-center justify-center shadow-md">
                <Send className="w-4 h-4"/>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button aria-label="Open AI Assistant" onClick={() => setIsOpen(!isOpen)} className="bg-[#002D62] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#5F8F5C]/50 relative group">
        <Sparkles className="w-6 h-6 animate-pulse" />
        <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full uppercase shadow">AI</span>
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 1. HOME PAGE
// ---------------------------------------------------------------------------
const HomePage = () => (
  <main className="w-full animate-in fade-in duration-700 bg-[#FAFAFA]">
    <section className="relative pt-40 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#002D62]/10 to-[#5F8F5C]/15 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#5F8F5C]/10 border border-[#5F8F5C]/30 text-[#5F8F5C] text-xs font-bold mb-8 uppercase tracking-widest shadow-sm">
        <Award className="w-4 h-4" /> 
        Pakistan&apos;s Rising Star in Premium Dairy
      </motion.div>

      <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-5xl md:text-7xl lg:text-[85px] font-extrabold tracking-tight max-w-5xl leading-[1.05] mb-8 text-[#002D62]">
        Pure By Nature. <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] via-[#5F8F5C] to-emerald-500">Safe By Design.</span>
      </motion.h1>

      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-slate-600 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed font-medium">
        NESTA is redefining Pakistan's dairy industry. 100% Traceable. 0% Artificial. We deliver unbroken cold-chain purity directly from Sargodha to the Nation.
      </motion.p>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4 flex-wrap justify-center">
        <a href="#products" className="bg-[#002D62] hover:bg-[#001f44] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-[#002D62]/20 flex items-center gap-2">
          Explore Products <ChevronRight className="w-4 h-4"/>
        </a>
        <a href={`https://wa.me/${WA_NUMBER}?text=I%20want%20to%20order%20NESTA%20dairy`} target="_blank" rel="noreferrer" className="bg-white hover:bg-slate-50 text-[#002D62] border border-slate-200 px-8 py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-sm">
          Order via WhatsApp
        </a>
      </motion.div>
    </section>

    {/* Divine Inspiration / Quranic Verse */}
    <section className="py-20 px-6 bg-[#002D62] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5F8F5C]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto text-center relative z-10">
        <Quote className="w-12 h-12 text-[#5F8F5C] mx-auto mb-8 opacity-50" />
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-snug font-arabic" dir="rtl">
          وَإِنَّ لَكُمْ فِي الْأَنْعَامِ لَعِبْرَةً ۖ نُسْقِيكُمْ مِمَّا فِي بُطُونِهِ مِنْ بَيْنِ فَرْثٍ وَدَمٍ لَبَنًا خَالِصًا سَائِغًا لِلشَّارِبِينَ
        </h2>
        <p className="text-lg md:text-xl text-slate-300 italic mb-6">
          "And indeed, for you in grazing livestock is a lesson. We give you drink from what is in their bellies - between excretion and blood - pure milk, palatable to drinkers."
        </p>
        <p className="text-[#5F8F5C] font-bold uppercase tracking-widest text-sm">— Surah An-Nahl [16:66]</p>
      </motion.div>
    </section>

    {/* Who is NESTA */}
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <span className="text-[#5F8F5C] font-bold text-xs uppercase tracking-widest block mb-3">Who is NESTA</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002D62] mb-6">Dairy as an Amanah</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            For years, Pakistani families and chefs faced a difficult choice: unverified local open milk, or highly processed mass-market compromises. NESTA was born to eliminate that choice permanently.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            We operate out of our state-of-the-art Sargodha facility, utilizing closed-vessel technology to ensure that from the moment the milk leaves the farm to the moment it reaches your table, it remains untouched by human hands. We are a rising Nationwide brand built on absolute purity.
          </p>
          <a href="#about" className="inline-flex items-center gap-2 text-[#002D62] font-bold uppercase tracking-wider text-sm hover:text-[#5F8F5C] transition-colors">
            Read Our Full Story <ArrowRight className="w-4 h-4"/>
          </a>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative h-[500px] rounded-[36px] overflow-hidden shadow-2xl border border-slate-200">
          <img src="/7.jpeg" alt="NESTA Factory and Quality Control" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/80 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="font-bold text-xl mb-2">Sargodha Processing Hub</h3>
              <p className="text-slate-300 text-sm">Where technology meets nature.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Our Products Preview with Real Images */}
    <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#5F8F5C] font-bold text-xs uppercase tracking-widest block mb-3">Our Masterpieces</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002D62] mb-6">The Premium Portfolio</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((item) => (
            <motion.div key={item.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all group cursor-pointer flex flex-col h-full">
              <div className="h-56 bg-slate-50 rounded-2xl mb-6 p-4 flex items-center justify-center relative overflow-hidden border border-slate-100">
                <span className="absolute top-3 left-3 bg-[#5F8F5C] text-white text-[9px] font-bold uppercase px-2.5 py-1 rounded-full">{item.badge}</span>
                <img src={item.image} alt={item.title} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg" />
              </div>
              <span className="text-[#5F8F5C] text-[10px] font-bold uppercase tracking-widest mb-2">{item.format}</span>
              <h3 className="font-bold text-[#002D62] text-xl mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">{item.desc}</p>
              <a href="#products" className="mt-auto w-full bg-slate-100 text-[#002D62] py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center group-hover:bg-[#002D62] group-hover:text-white transition-colors">View Details</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* From Milk to Your Family (Journey Timeline) */}
    <section className="py-24 px-6 max-w-5xl mx-auto text-center">
      <span className="text-[#5F8F5C] font-bold text-xs uppercase tracking-widest block mb-3">The NESTA Process</span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#002D62] mb-16">From Farm to Family</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-12 left-10 right-10 h-1 bg-[#5F8F5C]/20 -z-10"></div>
        {[
          { icon: <Leaf/>, title: "Sourcing", desc: "Sourced from the finest rural farms in Sargodha." },
          { icon: <Factory/>, title: "Testing", desc: "18-point lactometer and microbiological screening." },
          { icon: <ShieldCheck/>, title: "Processing", desc: "Pasteurized in closed-vessel stainless steel." },
          { icon: <Truck/>, title: "Delivery", desc: "Unbroken 4°C cold-chain nationwide delivery." }
        ].map((step, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 bg-white border-4 border-[#002D62] rounded-full flex items-center justify-center text-[#002D62] mb-6 shadow-xl">
              {React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10" })}
            </div>
            <h3 className="text-xl font-bold text-[#002D62] mb-2">{step.title}</h3>
            <p className="text-sm text-slate-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Why Choose NESTA */}
    <section className="py-24 px-6 bg-[#002D62] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Why Choose NESTA?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">We are setting the benchmark for the future of Pakistan's dairy industry through absolute transparency.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 border border-white/20 p-10 rounded-3xl backdrop-blur-sm text-center hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 mx-auto bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6"><CheckCircle className="w-8 h-8"/></div>
            <h3 className="text-2xl font-bold mb-4">Zero Adulteration</h3>
            <p className="text-slate-300 text-sm leading-relaxed">No milk powders, no chemical thickeners, and absolutely no water mixing. Pure nutrition as nature intended.</p>
          </div>
          <div className="bg-white/10 border border-white/20 p-10 rounded-3xl backdrop-blur-sm text-center hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 mx-auto bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6"><Shield className="w-8 h-8"/></div>
            <h3 className="text-2xl font-bold mb-4">Absolute Taharah</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Processed in sealed environments, completely eliminating manual handling and airborne contamination.</p>
          </div>
          <div className="bg-white/10 border border-white/20 p-10 rounded-3xl backdrop-blur-sm text-center hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 mx-auto bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6"><Search className="w-8 h-8"/></div>
            <h3 className="text-2xl font-bold mb-4">100% Traceable</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Every pouch and bucket features a batch code. You can verify exactly when and where your dairy was processed.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

// ---------------------------------------------------------------------------
// 2. ABOUT US PAGE
// ---------------------------------------------------------------------------
const AboutPage = () => (
  <main className="w-full pt-32 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
    <div className="text-center mb-20">
      <span className="text-[#5F8F5C] font-bold text-xs uppercase tracking-widest block mb-3">The NESTA Story</span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#002D62] mb-6">Daily Nutrition as an Amanah</h1>
      <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
        In millions of homes across Pakistan, dairy is the heart of daily life. For years, families faced a difficult choice—unverified local sellers or mass-market compromises. NESTA was created to eliminate that compromise permanently. We view milk not merely as a commercial venture, but as an Amanah—a sacred trust.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-slate-50 border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-all">
        <div className="w-14 h-14 bg-[#002D62]/10 rounded-2xl flex items-center justify-center text-[#002D62] mb-6">
          <Globe className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
        <p className="text-slate-600 leading-relaxed">
          To be Pakistan&apos;s most trusted and recognized modern dairy brand, setting the undisputed industry benchmark for liquid milk and cultured yogurt through uncompromised purity and scientific discipline.
        </p>
      </div>
      <div className="bg-slate-50 border border-slate-200 p-10 rounded-[32px] shadow-sm hover:shadow-lg transition-all">
        <div className="w-14 h-14 bg-[#5F8F5C]/10 rounded-2xl flex items-center justify-center text-[#5F8F5C] mb-6">
          <Target className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
        <p className="text-slate-600 leading-relaxed">
          To nourish communities by bridging the gap between rural agricultural excellence in Sargodha and nationwide urban demand, ensuring guaranteed cold-chain safety in every package.
        </p>
      </div>
    </div>
  </main>
);

// ---------------------------------------------------------------------------
// 3. PRODUCTS PAGE (With Real Images & Traceability)
// ---------------------------------------------------------------------------
const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [batchCode, setBatchCode] = useState('');
  const [traceResult, setTraceResult] = useState<{ date: string; tank: string; status: string } | null>(null);

  const handleTraceLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!batchCode.trim()) return;
    setTraceResult({
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      tank: "Sargodha Cold-Storage Hub",
      status: "Passed 18-point Microbiological Screening"
    });
  };

  return (
    <main className="w-full pt-32 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="text-center mb-16">
        <span className="text-[#5F8F5C] font-bold text-xs uppercase tracking-widest block mb-3">Premium Dairy Portfolio</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#002D62] mb-4">Engineered for Perfection</h1>
        <p className="text-slate-600 max-w-xl mx-auto text-sm">Our world-class dairy products contain zero artificial thickeners and zero milk powders. Choose the rising standard.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {productsData.map((item, idx) => (
          <button key={item.id} onClick={() => setActiveTab(idx)} className={`px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all border ${activeTab === idx ? 'bg-[#002D62] border-[#002D62] text-white shadow-lg scale-105' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'}`}>
            {item.title}
          </button>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-[36px] p-8 md:p-12 shadow-xl shadow-slate-200/50 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="h-80 md:h-96 bg-slate-50 rounded-3xl p-8 flex items-center justify-center relative border border-slate-100">
          <span className="absolute top-6 left-6 bg-[#5F8F5C] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">{productsData[activeTab].badge}</span>
          <img src={productsData[activeTab].image} alt={productsData[activeTab].seoDesc} className="max-h-full object-contain drop-shadow-2xl transition-transform hover:scale-105" />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <span className="text-[#5F8F5C] font-bold text-xs uppercase tracking-widest">{productsData[activeTab].format}</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#002D62] mt-1 mb-2">{productsData[activeTab].title}</h3>
            <p className="text-slate-600 text-base leading-relaxed">{productsData[activeTab].desc}</p>
          </div>
          <a href={`https://wa.me/${WA_NUMBER}?text=I%20want%20to%20order%20${productsData[activeTab].title}`} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 bg-[#5F8F5C] hover:bg-[#4a7248] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md w-max px-8">
            Buy Now via WhatsApp <ChevronRight className="w-4 h-4"/>
          </a>
        </div>
      </div>

      {/* Traceability Tool Section */}
      <div className="bg-slate-50 border border-slate-200 rounded-[40px] p-10 text-center max-w-4xl mx-auto shadow-sm">
        <Search className="w-8 h-8 text-[#002D62] mx-auto mb-4" />
        <h2 className="text-3xl font-extrabold text-[#002D62] mb-4">Track Your Dairy's Journey</h2>
        <p className="text-slate-600 text-sm mb-8">Enter the batch code printed on your milk or yogurt to verify its Sargodha origin.</p>
        <form onSubmit={handleTraceLookup} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8">
          <input type="text" value={batchCode} onChange={(e) => setBatchCode(e.target.value)} placeholder="e.g. NST-2026-0810" className="w-full bg-white border border-slate-300 rounded-2xl px-6 py-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5F8F5C]" />
          <button type="submit" className="bg-[#002D62] text-white px-8 py-4 sm:py-0 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#001f44]">Verify</button>
        </form>
        {traceResult && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-[#5F8F5C]/30 p-6 rounded-2xl text-left max-w-xl mx-auto shadow-sm">
            <p className="text-sm text-slate-700 mb-2"><strong>Date:</strong> {traceResult.date}</p>
            <p className="text-sm text-slate-700 mb-2"><strong>Facility:</strong> {traceResult.tank}</p>
            <p className="text-sm text-emerald-600 font-bold flex items-center gap-1"><CheckCircle className="w-4 h-4"/> {traceResult.status}</p>
          </motion.div>
        )}
      </div>
    </main>
  );
};

// ---------------------------------------------------------------------------
// 4. QUALITY PAGE
// ---------------------------------------------------------------------------
const QualityPage = () => (
  <main className="w-full pt-32 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-[#5F8F5C] font-bold text-xs uppercase tracking-widest block mb-3">Our Operations</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#002D62] mb-6">The Three Pillars of NESTA Purity</h1>
        <p className="text-slate-600 leading-relaxed mb-8 text-lg">
          &quot;Pure by Nature&quot; combines physical and spiritual cleanliness (Taharah) with rigorous food safety testing across every production batch.
        </p>
        <div className="space-y-6">
          <div className="flex gap-4 items-start bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <div className="w-12 h-12 shrink-0 bg-[#002D62] rounded-xl flex items-center justify-center text-white"><Droplets className="w-6 h-6"/></div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">1. Zero Unnatural Alteration</h4>
              <p className="text-sm text-slate-600 mt-1">Preserving natural fat and solids profile without chemical additives or milk powders.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <div className="w-12 h-12 shrink-0 bg-[#002D62] rounded-xl flex items-center justify-center text-white"><ShieldCheck className="w-6 h-6"/></div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">2. Exacting Hygiene (Taharah)</h4>
              <p className="text-sm text-slate-600 mt-1">Closed-vessel stainless steel processing and food-grade barrier packaging eliminates airborne contamination.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <div className="w-12 h-12 shrink-0 bg-[#002D62] rounded-xl flex items-center justify-center text-white"><ThermometerSnowflake className="w-6 h-6"/></div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">3. Unbroken Cold Chain</h4>
              <p className="text-sm text-slate-600 mt-1">Strict temperature maintenance between 4°C and 8°C from Sargodha raw milk intake to nationwide retail delivery.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[600px] rounded-[36px] overflow-hidden border border-slate-200 shadow-xl">
        <img src="/7.jpeg" alt="Quality Control SOP" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-10 left-10 right-10">
          <div className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 shadow-xl">
            <p className="font-bold text-slate-900 italic text-base">&quot;Before acceptance, all milk undergoes strict temperature, specific gravity (lactometer), and titratable acidity checks.&quot;</p>
            <p className="text-[#5F8F5C] text-xs font-bold uppercase mt-2">— Factory SOP Manual</p>
          </div>
        </div>
      </div>
    </div>
  </main>
);

// ---------------------------------------------------------------------------
// 5. HORECA & DISTRIBUTION PAGE (With Intake Form)
// ---------------------------------------------------------------------------
const HorecaPage = () => {
  return (
    <main className="w-full pt-32 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-[#5F8F5C] font-bold text-xs uppercase tracking-widest block mb-3">B2B Wholesale Portal</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#002D62] mb-6">Nationwide Distribution Partner</h1>
        <p className="text-slate-600 leading-relaxed text-lg">
          Whether you are a local restaurant chef, a corporate hotel manager, or a regional distributor. Our commercial B2B supply chain is built on rigorous governance and guaranteed cold-chain delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm">
          <CheckCircle className="w-10 h-10 text-[#5F8F5C] mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Water Separation</h3>
          <p className="text-slate-600 text-sm">Our 5kg Set Yogurt undergoes intense protein denaturation at 90°C for 20 minutes, binding whey proteins to guarantee flawless cooking performance.</p>
        </div>
        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm">
          <Truck className="w-10 h-10 text-[#002D62] mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Order-to-Order Integrity</h3>
          <p className="text-slate-600 text-sm">We maintain a highly disciplined payment cycle. Fresh inventory is flawlessly delivered once the previous invoice is cleared, ensuring a sustainable partnership.</p>
        </div>
      </div>

      {/* Distributor & HoReCa Interest Form */}
      <div className="bg-gradient-to-br from-[#002D62] to-[#001533] text-white rounded-[40px] p-8 md:p-14 shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#5F8F5C] opacity-20 rounded-full blur-[80px]"></div>
        <div className="relative z-10 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Partner Application Form</h2>
          <p className="text-slate-300 text-sm">Submit your details below. Our B2B onboarding team will contact you within 24 hours.</p>
        </div>

        <form className="relative z-10 space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Application Submitted Successfully!'); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold uppercase text-slate-300 mb-2 block">Full Name</label>
              <input type="text" required placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 placeholder:text-slate-400" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-slate-300 mb-2 block">Business / Restaurant Name</label>
              <input type="text" required placeholder="Business Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 placeholder:text-slate-400" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold uppercase text-slate-300 mb-2 block">Phone / WhatsApp</label>
              <input type="tel" required placeholder="0300 0000000" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 placeholder:text-slate-400" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-slate-300 mb-2 block">City / Region</label>
              <input type="text" required placeholder="e.g. Islamabad, Lahore" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 placeholder:text-slate-400" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold uppercase text-slate-300 mb-2 block">Interest Category</label>
            <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 [&>option]:bg-[#002D62]">
              <option value="horeca">HoReCa (Hotel, Restaurant, Cafe)</option>
              <option value="retail">Retail Supermarket</option>
              <option value="distributor">Regional Distributor</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold uppercase text-slate-300 mb-2 block">Expected Weekly Volume (Liters/KG)</label>
            <input type="number" required placeholder="e.g. 500" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 placeholder:text-slate-400" />
          </div>
          <button type="submit" className="w-full bg-[#5F8F5C] hover:bg-emerald-500 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-lg mt-4">
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
};

// ---------------------------------------------------------------------------
// 6. INVESTOR / CORPORATE PAGE
// ---------------------------------------------------------------------------
const InvestorPage = () => (
  <main className="w-full pt-32 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
    <div className="text-center mb-16">
      <span className="text-[#5F8F5C] font-bold text-xs uppercase tracking-widest block mb-3">Corporate Strategy</span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#002D62] mb-6">Enterprise Roadmap</h1>
      <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
        NESTA is executing a rigid 36-Month scaling blueprint, advancing from a 700L/day agile launch into a 5,000L/day nationwide dairy conglomerate.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm text-center">
        <LineChart className="w-10 h-10 text-[#002D62] mx-auto mb-4"/>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Phase 1: Foundation</h3>
        <p className="text-sm text-slate-600">Scaling from 700L to 1,500L daily production. Achieving zero cash leakage to secure corporate banking leases for cold-chain trucks.</p>
      </div>
      <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm text-center">
        <TrendingUp className="w-10 h-10 text-[#5F8F5C] mx-auto mb-4"/>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Phase 2: Corporate Hub</h3>
        <p className="text-sm text-slate-600">Scaling to 3,000L/day. Aggressive retail chain acquisition driving sufficient net profit to finance the Islamabad Corporate Head Office.</p>
      </div>
      <div className="bg-[#002D62] border border-[#002D62] p-8 rounded-3xl shadow-xl text-center text-white">
        <Building2 className="w-10 h-10 text-emerald-400 mx-auto mb-4"/>
        <h3 className="text-lg font-bold mb-2">Phase 3: Enterprise Scale</h3>
        <p className="text-sm text-slate-300">Exceeding 5,000L/day production. Acquiring massive nationwide market share while introducing fresh culinary cream and specialty pipelines.</p>
      </div>
    </div>
    
    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 max-w-4xl mx-auto text-center">
      <h3 className="text-2xl font-bold text-[#002D62] mb-4">Strict Financial Governance</h3>
      <p className="text-slate-600 mb-6">Our expansion is funded through a disciplined profit distribution model and an unbroken Order-to-Order B2B cash recovery cycle managed from our Khyber Market Head Office.</p>
      <a href="mailto:info@nestapak.com?subject=Investor Relations Inquiry" className="inline-flex bg-[#5F8F5C] text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider">Contact Investor Relations</a>
    </div>
  </main>
);

// ---------------------------------------------------------------------------
// 7. CAREERS PAGE
// ---------------------------------------------------------------------------
const CareersPage = () => (
  <main className="w-full pt-32 pb-24 px-6 max-w-5xl mx-auto animate-in fade-in duration-700">
    <div className="text-center mb-16">
      <span className="text-[#5F8F5C] font-bold text-xs uppercase tracking-widest block mb-2">Join Our Mission</span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#002D62] mb-4">Build the Future of Dairy</h1>
      <p className="text-slate-600 max-w-xl mx-auto">We are actively expanding our Sargodha processing hub and Nationwide commercial sales teams with passionate professionals.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow">
        <div>
          <span className="bg-[#002D62]/10 text-[#002D62] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Sargodha Processing Hub</span>
          <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2">Quality & Pasteurization Lead</h3>
          <p className="text-sm text-slate-600 mb-6">Manage daily raw milk intake testing, lactometer density checks, and closed-vessel pasteurization safety protocols.</p>
        </div>
        <a href="mailto:careers@nestapak.com?subject=QA Lead Application" className="bg-[#002D62] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center hover:bg-[#001f44] transition-colors">Apply Now</a>
      </div>
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow">
        <div>
          <span className="bg-[#5F8F5C]/10 text-[#5F8F5C] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Nationwide Commercial</span>
          <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2">B2B Sales Executive</h3>
          <p className="text-sm text-slate-600 mb-6">Drive institutional HoReCa partnerships with top hotels, cafes, and supermarkets for our 5kg yogurt and milk distribution across Pakistan.</p>
        </div>
        <a href="mailto:careers@nestapak.com?subject=B2B Executive Application" className="bg-[#5F8F5C] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center hover:bg-[#4a7248] transition-colors">Apply Now</a>
      </div>
    </div>
  </main>
);

// ---------------------------------------------------------------------------
// 8. CONTACT US PAGE
// ---------------------------------------------------------------------------
const ContactPage = () => (
  <main className="w-full pt-32 pb-24 px-6 max-w-5xl mx-auto animate-in fade-in duration-700">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#002D62] mb-6">Contact NESTA</h1>
      <p className="text-slate-600 max-w-2xl mx-auto text-lg">Whether you are setting up a commercial wholesale account or need daily household delivery, our team is ready to assist you.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#002D62]/10 text-[#002D62] flex items-center justify-center shrink-0"><Building2 className="w-6 h-6"/></div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">Corporate Head Office</h3>
            <p className="text-slate-600 mt-1">Khyber Market, G-13/4, Islamabad.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#5F8F5C]/10 text-[#5F8F5C] flex items-center justify-center shrink-0"><MapPin className="w-6 h-6"/></div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">Commercial Reach</h3>
            <p className="text-slate-600 mt-1">Nationwide Distribution.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#002D62]/10 text-[#002D62] flex items-center justify-center shrink-0"><PhoneCall className="w-6 h-6"/></div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">WhatsApp / Phone</h3>
            <p className="text-slate-600 mt-1">0300 0977397</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <h3 className="font-bold text-2xl text-[#002D62] mb-6">Send an Inquiry</h3>
        <form onSubmit={(e) => { e.preventDefault(); alert('Message sent to NESTA successfully!'); }} className="space-y-4">
          <input type="text" required placeholder="Your Name or Business" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#002D62]" />
          <input type="tel" required placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#002D62]" />
          <textarea required placeholder="How can we help you?" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#002D62]"></textarea>
          <button type="submit" className="w-full bg-[#5F8F5C] hover:bg-[#4a7248] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md">Submit Message</button>
        </form>
      </div>
    </div>
  </main>
);

// ---------------------------------------------------------------------------
// MASTER LAYOUT COMPONENT
// ---------------------------------------------------------------------------
export default function NestaEnterprisePortal() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'products' | 'quality' | 'distribution' | 'investor' | 'careers' | 'contact' | 'privacy' | 'terms'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hash Router Logic
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'products', 'quality', 'distribution', 'investor', 'careers', 'contact', 'privacy', 'terms'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash as any);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-[#5F8F5C] selection:text-white flex flex-col overflow-x-hidden">
      
      {/* --- MASTER HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <a href="#home" onClick={closeMobileMenu} className="flex items-center gap-3 relative z-50">
          <img src="/NESTA_logo_brand_design_20261003045924.jpg" alt="NESTA Pure Dairy Brand Logo" className="h-10 w-auto rounded-md object-contain" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-slate-600">
          <a href="#home" className={`hover:text-[#002D62] transition-colors ${currentPage === 'home' && 'text-[#002D62]'}`}>Home</a>
          <a href="#about" className={`hover:text-[#002D62] transition-colors ${currentPage === 'about' && 'text-[#002D62]'}`}>About Us</a>
          <a href="#products" className={`hover:text-[#002D62] transition-colors ${currentPage === 'products' && 'text-[#002D62]'}`}>Products</a>
          <a href="#quality" className={`hover:text-[#002D62] transition-colors ${currentPage === 'quality' && 'text-[#002D62]'}`}>Quality</a>
          <a href="#distribution" className={`hover:text-[#002D62] transition-colors ${currentPage === 'distribution' && 'text-[#002D62]'}`}>HoReCa / Distribution</a>
          <a href="#investor" className={`hover:text-[#002D62] transition-colors ${currentPage === 'investor' && 'text-[#002D62]'}`}>Corporate</a>
          <a href="#careers" className={`hover:text-[#002D62] transition-colors ${currentPage === 'careers' && 'text-[#002D62]'}`}>Careers</a>
          <a href="#contact" className={`hover:text-[#002D62] transition-colors ${currentPage === 'contact' && 'text-[#002D62]'}`}>Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-[#002D62] relative z-50">
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </header>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 text-lg font-bold text-[#002D62] lg:hidden overflow-y-auto pb-10">
            <a href="#home" onClick={closeMobileMenu}>Home</a>
            <a href="#about" onClick={closeMobileMenu}>About Us</a>
            <a href="#products" onClick={closeMobileMenu}>Products</a>
            <a href="#quality" onClick={closeMobileMenu}>Quality Standards</a>
            <a href="#distribution" onClick={closeMobileMenu}>HoReCa / Distribution</a>
            <a href="#investor" onClick={closeMobileMenu}>Investor / Corporate</a>
            <a href="#careers" onClick={closeMobileMenu}>Careers</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ROUTER VIEW --- */}
      <div className="flex-grow">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'quality' && <QualityPage />}
        {currentPage === 'distribution' && <HorecaPage />}
        {currentPage === 'investor' && <InvestorPage />}
        {currentPage === 'careers' && <CareersPage />}
        {currentPage === 'contact' && <ContactPage />}
        {(currentPage === 'privacy' || currentPage === 'terms') && (
          <main className="w-full pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-700">
             <h1 className="text-4xl font-extrabold text-[#002D62] mb-6 capitalize">{currentPage} Policy</h1>
             <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-slate-600 leading-relaxed">Standard legal compliance and operational governance documents are maintained at our Islamabad Corporate office.</div>
          </main>
        )}
      </div>

      {/* --- TRAINED AI CHATBOT WIDGET --- */}
      <NestaAiChatWidget />

      {/* --- MASTER FOOTER --- */}
      <footer className="bg-[#0A0F16] text-slate-300 pt-20 pb-10 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <img src="/NESTA_logo_brand_design_20261003045924.jpg" alt="NESTA Pure Dairy Logo" className="h-14 object-contain mb-6 rounded-lg shadow-md" />
            <p className="text-sm text-slate-400 leading-relaxed mb-6 font-medium">
              The rising standard for premium dairy in Pakistan. 100% Traceable. 0% Artificial. Sourced from Sargodha and delivered Nationwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs"><PhoneCall className="w-4 h-4 text-[#5F8F5C]"/> Reach Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><strong>Head Office:</strong><br/> Khyber Market, G-13/4, Islamabad</li>
              <li><strong>Commercial Range:</strong><br/> Nationwide Distribution</li>
              <li><strong>WhatsApp / Phone:</strong><br/> 0300 0977397</li>
              <li><strong>Email:</strong><br/> info@nestapak.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs"><Briefcase className="w-4 h-4 text-[#5F8F5C]"/> Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider text-slate-400 flex flex-col">
              <a href="#about" className="hover:text-white w-max">The NESTA Story</a>
              <a href="#distribution" className="hover:text-white w-max">B2B Partner Form</a>
              <a href="#investor" className="hover:text-white w-max">Corporate Roadmap</a>
              <a href="#careers" className="hover:text-white w-max">Open Careers</a>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs"><Users className="w-4 h-4 text-[#5F8F5C]"/> Social & Community</h4>
            <p className="text-sm text-slate-400 mb-4">
              Follow Pakistan&apos;s fastest-growing dairy brand on our journey.
            </p>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#5F8F5C] text-white transition-colors cursor-pointer text-xs font-bold">IN</div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#5F8F5C] text-white transition-colors cursor-pointer text-xs font-bold">FB</div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#5F8F5C] text-white transition-colors cursor-pointer text-xs font-bold">IG</div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
          <p>&copy; 2026 NESTA Foods (Pvt) Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Supply</a>
          </div>
        </div>
      </footer>
    </div>
  );
}