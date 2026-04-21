/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Dumbbell, 
  Users, 
  Calendar, 
  Trophy, 
  ArrowRight, 
  Play, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Star,
  Quote,
  Instagram,
  Facebook
} from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Subhodeep Ghosh",
    role: "Local Guide",
    content: "A very good gym with high-quality equipment, and it is the cleanest gym in this area. The trainer is present in the gym all the time, is very helpful, and always corrects wrong form.",
    rating: 5
  },
  {
    name: "Punam Das",
    role: "Local Guide",
    content: "Awesome atmosphere.. staffs are very friendly.. equipments are so good and well maintained gym.. Love the energy here!",
    rating: 5
  },
  {
    name: "Sayan Sarkar",
    role: "Professional Athlete",
    content: "GYM LOCATION IS ON DH ROAD SO IT IS EASILY ACCESSIBLE. EQUIPMENTS ARE ULTRA PREMIUM. Suitable for everyone including professional athletes.",
    rating: 5
  },
  {
    name: "Subhajit Sadhukhan",
    role: "Member",
    content: "Gym is superb, such a good ambience gym in behala area is rare. Trainers and staffs are very helpful and friendly. The place is neat and clean.",
    rating: 5
  }
];

const pricingPlans = [
  {
    name: "Basic",
    price: "25",
    description: "Essential package for regular workouts",
    features: ["Unlimited access to the gym", "1 free group class per month", "Free access to relaxation areas"]
  },
  {
    name: "Standard",
    price: "35",
    description: "Extended package for comprehensive training",
    features: ["Unlimited access to the gym", "3 free group classes per month", "Free access to relaxation areas and sauna"],
    popular: true
  },
  {
    name: "Premium",
    price: "45",
    description: "Deluxe package with maximum benefits",
    features: [
      "Unlimited access to the gym", 
      "Unlimited group classes", 
      "2 personal training sessions per month",
      "Free access to relaxation areas, sauna, and pool"
    ]
  }
];

const services = [
  {
    title: "Personal Training",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    desc: "One-on-one sessions with our expert trainers."
  },
  {
    title: "Fitness Classes",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    desc: "High-energy group workouts for all levels."
  },
  {
    title: "Strength Training",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    desc: "Build muscle with our top-tier machines."
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState("About Us");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-brand selection:text-black flex">
      {/* Sidebar Rail - Artistic Flair Theme */}
      <div className="sidebar-rail hidden lg:flex">
        <div className="rail-text">SINCE 2024</div>
        <div className="rail-text">KOLKATA • INDIA</div>
      </div>

      <div className="flex-1 lg:ml-[60px] relative">
        {/* Navigation */}
        <nav className="fixed top-0 left-[60px] right-0 z-50 flex justify-center py-6 px-4">
          <div className="glass px-8 py-3 rounded-full flex items-center gap-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center -rotate-6">
                <Dumbbell className="w-5 h-5 text-black" />
              </div>
              <span className="font-display font-black text-xl italic tracking-tighter">CSF 2.O</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {["About Us", "Services", "Pricing", "Reviews"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-brand ${activeTab === item ? 'text-brand' : 'text-zinc-500'}`}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="bg-brand text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,78,0,0.3)]">
              Free Trial
            </button>
          </div>
        </nav>

        {/* Hero Section - Artistic Flair Layout */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-white/5">
          {/* Background Accents */}
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/10 blur-[150px] rounded-full" />
          
          <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7"
            >
              <div className="brand-tag text-brand font-bold tracking-[0.3em] uppercase mb-6 text-sm">
                Premium Fitness Experience
              </div>
              <h1 className="text-7xl md:text-[110px] leading-[0.82] mb-10 font-black uppercase tracking-tighter">
                CORE<br />
                STRENGTH<br />
                <span className="text-outline">FITNESS</span> 2.O
              </h1>
              <p className="text-zinc-500 text-lg max-w-md mb-12 leading-relaxed font-medium">
                From beginner to advanced, experience workouts designed to help you achieve peak performance and exceed your fitness goals.
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <button className="btn-theme shadow-[0_0_30px_rgba(255,78,0,0.4)]">
                  Join the Revolution
                </button>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black">4.8 (75 REVIEWS)</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Top Rated in Behala</span>
                  </div>
                </div>
              </div>

              {/* Stats Row - Theme Style */}
              <div className="mt-20 flex gap-12 border-t border-white/10 pt-8 max-w-lg">
                {[
                  { val: "ULTRA", label: "Premium Equipment" },
                  { val: "24/7", label: "Staff Support" },
                  { val: "EXPERT", label: "Transformation" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-black text-brand italic tracking-tighter">{stat.val}</span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="md:col-span-5 relative"
            >
              <div className="relative z-10 p-4 border border-white/10 bg-white/5 rounded-[2rem]">
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2ae617?auto=format&fit=crop&q=80&w=1200" 
                  alt="Athlete Training" 
                  className="w-full aspect-[4/5] object-cover rounded-[1.5rem] brightness-75 hover:brightness-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info Grid Implementation */}
        <section className="bg-surface-elevated overflow-hidden border-b border-white/5">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7 p-12 md:p-24 border-r border-white/5">
              <motion.div {...fadeIn}>
                <span className="text-brand text-xs font-black tracking-widest uppercase mb-4 block underline underline-offset-8">Location</span>
                <p className="text-2xl md:text-3xl font-black italic max-w-lg mb-12">
                  233, Bhattacharjee Para Rd, Golden FC Ground, Kolkata, 700063
                </p>
                <div className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 relative group">
                   <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all" />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <MapPin className="w-12 h-12 text-brand animate-bounce" />
                   </div>
                </div>
              </motion.div>
            </div>
            <div className="md:col-span-5 p-12 md:p-24 bg-gradient-to-br from-zinc-900/50 to-surface">
              <motion.div {...fadeIn}>
                <span className="text-brand text-xs font-black tracking-widest uppercase mb-4 block underline underline-offset-8">Testimonials</span>
                <div className="space-y-12 mt-12">
                  {testimonials.slice(0, 3).map((t, i) => (
                    <div key={i} className="testimonial-theme">
                      <p className="text-lg italic text-zinc-300 mb-4 leading-relaxed font-medium">"{t.content}"</p>
                      <div className="text-[10px] uppercase font-black tracking-[0.2em] text-brand">— {t.name}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-20 pt-10 border-t border-white/5 text-[10px] text-zinc-500 uppercase tracking-widest font-black">
                   MANAGED BY SHUBHAM & TEAM
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Maintaining Content but Styling to Theme */}
        <section id="pricing" className="py-32 bg-surface">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <span className="brand-tag text-brand inline-block mb-4">Pricing Strategy</span>
              <h2 className="text-6xl md:text-7xl font-black italic">Flexible <span className="text-outline">Plans</span></h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, i) => (
                <div key={i} className={`p-10 border ${plan.popular ? 'border-brand bg-brand/5' : 'border-white/10 bg-white/5'} transition-all`}>
                  <h3 className="text-xl font-black mb-6 italic tracking-tight">{plan.name}</h3>
                  <div className="text-5xl font-black text-brand mb-10 tracking-tighter italic">${plan.price}<span className="text-xs text-zinc-500 font-bold ml-1 uppercase">/mo</span></div>
                  <ul className="space-y-4 mb-12">
                    {plan.features.map((f, j) => (
                      <li key={j} className="text-xs font-medium text-zinc-400 flex gap-3">
                         <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                         {f}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 border border-zinc-700 hover:bg-brand hover:border-brand hover:text-white transition-all text-[10px] font-black uppercase tracking-widest">
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Testimonials */}
      <section id="reviews" className="py-32 bg-surface-elevated">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <span className="text-brand text-xs font-black tracking-widest uppercase mb-4 block">Success Stories</span>
              <h2 className="text-5xl italic font-black leading-tight mb-8">What Our Members Say About Us</h2>
              <p className="text-zinc-400 mb-12 text-lg">
                Join a community that actually cares about your progress. Real reviews from our real dedicated members.
              </p>
              <div className="flex gap-4">
                 <div className="p-6 bg-zinc-900/50 rounded-3xl border border-zinc-800">
                    <span className="text-4xl font-black italic text-brand">4.8/5</span>
                    <p className="text-[10px] uppercase font-bold text-zinc-500 mt-2 tracking-widest">Google Rating</p>
                 </div>
                 <div className="p-6 bg-zinc-900/50 rounded-3xl border border-zinc-800">
                    <span className="text-4xl font-black italic text-brand">75+</span>
                    <p className="text-[10px] uppercase font-bold text-zinc-500 mt-2 tracking-widest">Global Reviews</p>
                 </div>
              </div>
            </motion.div>

            <div className="grid gap-6">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 relative group hover:border-brand/30 transition-colors"
                >
                  <Quote className="absolute top-6 right-8 w-12 h-12 text-zinc-800 group-hover:text-brand/10 transition-colors fill-current" />
                  <div className="flex gap-4 items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center font-bold text-brand italic">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold tracking-tight">{t.name}</h4>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, idx) => <Star key={idx} className="w-3 h-3 text-brand fill-current" />)}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed italic">"{t.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="relative">
              <img 
                src="https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=1200" 
                alt="Trainer Support" 
                className="rounded-[3rem] w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand/10 rounded-[3rem]" />
            </motion.div>
            
            <motion.div {...fadeIn}>
              <span className="text-brand text-xs font-black tracking-widest uppercase mb-4 block">Our Values</span>
              <h2 className="text-5xl italic font-black leading-tight mb-10">Why Choose Us For Your Journey?</h2>
              
              <div className="grid gap-4">
                {[
                  { title: "State-of-the-Art Equipment", desc: "Our machines are well-maintained and from top global brands." },
                  { title: "Expert Trainers", desc: "Shubham and our team provide guidance on form and variations." },
                  { title: "Wide Range of Classes", desc: "From HIIT to Yoga, we have something for every fitness goal." },
                  { title: "Welcoming Community", desc: "A positive, energetic vibe that keeps you motivated every day." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex justify-between items-center group cursor-pointer hover:border-brand transition-all">
                    <div>
                      <h4 className="font-bold text-lg tracking-normal group-hover:text-brand transition-colors">{item.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-700 group-hover:text-brand group-hover:translate-x-2 transition-all" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-zinc-950 pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center -rotate-6">
                  <Dumbbell className="w-6 h-6 text-black" />
                </div>
                <span className="font-display font-black text-3xl italic tracking-tighter">CORE STRENGTH 2.O</span>
              </div>
              <p className="text-zinc-500 mb-8 max-w-sm leading-relaxed">
                Empowering your fitness journey with premium facilities, supportive coaching, and a driven community in the heart of Kolkata.
              </p>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-black transition-all">
                  <Facebook className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-widest italic">Quick Links</h4>
              <ul className="space-y-4 text-zinc-500 text-sm font-medium">
                <li><a href="#" className="hover:text-brand transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Pricing Plans</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Member Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-widest italic">Location</h4>
              <ul className="space-y-6 text-zinc-500 text-sm font-medium">
                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 text-brand flex-shrink-0" />
                  <span>233, Bhattacharjee Para Rd, Paschim Barisha, Kolkata, 700063</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-5 h-5 text-brand flex-shrink-0" />
                  <span>+91 98300 12345</span>
                </li>
                <li className="flex gap-4">
                  <Mail className="w-5 h-5 text-brand flex-shrink-0" />
                  <span>info@corestrengthfitness.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-black tracking-widest text-zinc-700">
            <p>© 2024 CORE STRENGTH FITNESS 2.O. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <button className="fixed bottom-8 right-8 z-50 bg-brand text-black font-black uppercase italic px-8 py-4 rounded-2xl shadow-[0_10px_30px_rgba(255,78,0,0.5)] hover:scale-105 transition-transform flex items-center gap-3">
        Join Now <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </div>
  );
}
