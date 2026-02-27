import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Topografia: React.FC = () => {
  const { t } = useLanguage();
  const tp = t.topografia;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Topografia e Levantamentos Topográficos',
    provider: {
      '@type': 'ProfessionalService',
      name: 'SELTA Projects',
      url: 'https://seltaprojects.com',
      telephone: '+351925217639',
      email: 'info@seltaprojects.com',
    },
    serviceType: 'Topographic Survey',
    description: 'Levantamentos topográficos planimétricos e altimétricos, implantação de projeto e peças para licenciamento em Lisboa, Cascais, Sintra, Setúbal e Arrábida.',
    areaServed: [
      { '@type': 'City', name: 'Lisboa' },
      { '@type': 'City', name: 'Cascais' },
      { '@type': 'City', name: 'Sintra' },
      { '@type': 'City', name: 'Setúbal' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tp.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{tp.meta.title}</title>
        <meta name="description" content={tp.meta.description} />
        <link rel="canonical" href="https://seltaprojects.com/topografia" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      {/* ── Hero ── */}
      <section className="relative bg-foreground text-background overflow-hidden pt-40 pb-24 lg:pb-36">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 text-background/60 mb-6"
          >
            <MapPin size={14} />
            <span className="text-xs font-light tracking-widest uppercase">{tp.hero.label}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-background max-w-4xl leading-[1.1] mb-6"
          >
            {tp.hero.heading}
            <br />
            <span className="text-background/80">{tp.hero.subheading}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-background/70 text-lg max-w-xl mb-10 font-light"
          >
            {tp.hero.body}
          </motion.p>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            animate="show"
            href="/#contact"
            className="inline-block border border-background px-8 py-4 text-xs font-light tracking-widest uppercase text-background hover:bg-background hover:text-foreground transition-all duration-300"
          >
            {tp.hero.cta}
          </motion.a>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section id="servicos" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-4">
              {tp.services.label}
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl">{tp.services.heading}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {tp.services.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-background p-10 lg:p-12"
              >
                <span className="text-xs font-light tracking-widest text-muted-foreground mb-6 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── In-house expertise ── */}
      <section className="py-20 lg:py-32 bg-gallery">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-4">
                {tp.expertise.label}
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-8">{tp.expertise.heading}</h2>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                {tp.expertise.body}
              </p>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-5 pt-2"
            >
              {tp.expertise.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle size={18} className="text-foreground mt-0.5 shrink-0" />
                  <span className="font-light">{point}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-4">
              {tp.usecases.label}
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl">{tp.usecases.heading}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tp.usecases.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="border-t border-border pt-8"
              >
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-32 bg-gallery">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-4">
              {tp.faq.label}
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl">{tp.faq.heading}</h2>
          </motion.div>

          <div className="max-w-3xl space-y-0 divide-y divide-border">
            {tp.faq.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="py-8"
              >
                <h3 className="font-serif text-xl mb-4">{item.q}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">{tp.cta.heading}</h2>
            <p className="text-background/70 font-light text-lg mb-10 max-w-md mx-auto">{tp.cta.body}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+351925217639"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Phone size={16} />
                <span className="font-light">+351 925 217 639</span>
              </a>
              <a
                href="mailto:info@seltaprojects.com"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Mail size={16} />
                <span className="font-light">info@seltaprojects.com</span>
              </a>
              <a
                href="/#contact"
                className="border border-background px-8 py-4 text-xs font-light tracking-widest uppercase text-background hover:bg-background hover:text-foreground transition-all duration-300"
              >
                {tp.cta.button}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Topografia;
