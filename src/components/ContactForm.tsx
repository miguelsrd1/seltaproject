import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import MagneticButton from './MagneticButton';

const steps = [
  {
    id: 'project-type',
    question: 'What type of project are you considering?',
    options: [
      { value: 'new-build', label: 'New Build', description: 'Build from scratch on land' },
      { value: 'renovation', label: 'Renovation', description: 'Transform an existing property' },
      { value: 'unsure', label: "Not Sure Yet", description: "I'd like to discuss options" }
    ]
  },
  {
    id: 'land',
    question: 'Do you already have land in Portugal?',
    options: [
      { value: 'yes', label: 'Yes, I have land', description: 'Ready to build' },
      { value: 'no', label: 'No, I need help finding land', description: 'Use our Land Concierge service' },
      { value: 'property', label: 'I have a property to renovate', description: 'Existing structure' }
    ]
  },
  {
    id: 'location',
    question: 'Where would you like to build?',
    options: [
      { value: 'lisbon', label: 'Lisbon Area', description: 'Capital region' },
      { value: 'cascais', label: 'Cascais / Sintra', description: 'Coastal luxury' },
      { value: 'fundao', label: 'Fundão / Interior', description: 'Mountain tranquility' },
      { value: 'other', label: 'Other Location', description: 'Nationwide coverage' }
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-4">
              Start Your Project
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl mb-8">
              Project Discovery
            </h2>
            <p className="text-muted-foreground text-lg font-light mb-12 max-w-md">
              Tell us about your vision. We'll schedule a consultation to discuss 
              your goals and explore how we can bring them to life.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-serif text-xl mb-3">Direct Contact</h4>
                <a 
                  href="mailto:info@seltaprojects.com"
                  className="story-link text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@seltaprojects.com
                </a>
              </div>

              <div>
                <h4 className="font-serif text-xl mb-3">Locations</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>Fundão, Portugal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>Lisbon, Portugal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>Cascais, Portugal</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
