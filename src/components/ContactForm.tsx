import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Button } from './ui/button';
import MagneticButton from './MagneticButton';

const steps = [
  {
    id: 'location',
    question: 'Where would you like to build in Portugal?',
    options: [
      { value: 'coast', label: 'Coastal Region', description: 'Algarve, Comporta, Cascais area' },
      { value: 'interior', label: 'Interior Portugal', description: 'Mountains and countryside' },
      { value: 'lisbon-area', label: 'Greater Lisbon', description: 'Capital region and surroundings' },
      { value: 'other', label: 'Other / Flexible', description: 'Open to suggestions' }
    ]
  },
  {
    id: 'land',
    question: 'Do you already have a plot of land?',
    options: [
      { value: 'yes', label: 'Yes, I have land', description: 'Ready to start the design phase' },
      { value: 'no', label: 'No, I need help finding land', description: 'Use our Land Concierge service' },
      { value: 'searching', label: 'Currently searching', description: 'Would like guidance' }
    ]
  },
  {
    id: 'budget',
    question: 'What is your target budget range?',
    options: [
      { value: '250-500k', label: '€250k – €500k', description: 'Quality starter builds' },
      { value: '500k-1m', label: '€500k – €1M', description: 'Premium family homes' },
      { value: '1m-2m', label: '€1M – €2M', description: 'Luxury residences' },
      { value: '2m+', label: '€2M+', description: 'Bespoke estates' }
    ]
  },
  {
    id: 'contact',
    question: 'How can we reach you?',
    type: 'form'
  }
];

const ContactForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (value: string) => {
    setAnswers({ ...answers, [steps[currentStep].id]: value });
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data
    setIsSubmitted(true);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <section id="contact" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-4">
              Start Your Project
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl mb-6">
              Project Discovery
            </h2>
            <p className="text-muted-foreground text-lg font-light max-w-xl mx-auto">
              Tell us about your vision for your new build in Portugal. 
              We'll schedule a consultation to explore how we can bring it to life.
            </p>
          </motion.div>

          {/* Consultation Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gallery p-8 lg:p-12"
          >
            {!isSubmitted ? (
              <>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-light tracking-widest uppercase text-muted-foreground">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="h-px bg-border relative">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-foreground"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-serif text-2xl lg:text-3xl mb-8">
                      {steps[currentStep].question}
                    </h3>

                    {steps[currentStep].type === 'form' ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="block text-xs font-light tracking-widest uppercase text-muted-foreground mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-light tracking-widest uppercase text-muted-foreground mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-light tracking-widest uppercase text-muted-foreground mb-2">
                            Phone (optional)
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                            placeholder="+351..."
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-light tracking-widest uppercase text-muted-foreground mb-2">
                            Tell us more about your vision
                          </label>
                          <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
                            placeholder="Describe your dream project..."
                          />
                        </div>
                        <MagneticButton className="w-full">
                          <Button type="submit" variant="premium" size="lg" className="w-full">
                            Submit Inquiry
                            <ArrowRight size={16} />
                          </Button>
                        </MagneticButton>
                      </form>
                    ) : (
                      <div className="space-y-4">
                        {steps[currentStep].options?.map((option) => (
                          <motion.button
                            key={option.value}
                            onClick={() => handleOptionSelect(option.value)}
                            className={`w-full text-left p-6 border transition-all duration-300 ${
                              answers[steps[currentStep].id] === option.value
                                ? 'border-foreground bg-foreground text-background'
                                : 'border-border hover:border-foreground'
                            }`}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-serif text-lg mb-1">{option.label}</h4>
                                <p className={`text-sm font-light ${
                                  answers[steps[currentStep].id] === option.value
                                    ? 'text-background/70'
                                    : 'text-muted-foreground'
                                }`}>
                                  {option.description}
                                </p>
                              </div>
                              {answers[steps[currentStep].id] === option.value && (
                                <Check size={20} />
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="mt-8 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft size={16} />
                    <span className="text-sm">Back</span>
                  </button>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 border-2 border-foreground flex items-center justify-center mx-auto mb-8">
                  <Check size={32} />
                </div>
                <h3 className="font-serif text-3xl mb-4">Thank You</h3>
                <p className="text-muted-foreground font-light">
                  We've received your inquiry and will be in touch within 24 hours 
                  to discuss your project.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
