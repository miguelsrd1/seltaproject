import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { Button } from './ui/button';
import MagneticButton from './MagneticButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.union([
    z.string().regex(/^[+\d\s\-()\\.]{7,}$/, { message: 'Invalid phone number' }),
    z.literal(''),
  ]),
  message: z.string().optional(),
});

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const steps = t.contact.steps;
  const totalSteps = steps.length;

  // Map answer values to labels for the email
  const getAnswerLabel = (stepIndex: number, value: string) => {
    const step = steps[stepIndex];
    if ('options' in step && step.options) {
      const option = step.options.find(opt => opt.value === value);
      return option ? option.label : value;
    }
    return value;
  };

  const handleOptionSelect = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value });
    if (currentStep < totalSteps - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = formSchema.safeParse(formData);
    if (!validation.success) {
      const firstError = validation.error.issues[0];
      toast({
        title: language === 'pt' ? 'Dados inválidos' : 'Invalid input',
        description: firstError.message,
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        message: formData.message.trim() || undefined,
        location: getAnswerLabel(0, answers[0]),
        land: getAnswerLabel(1, answers[1]),
        budget: getAnswerLabel(2, answers[2]),
      };

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: payload,
      });

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: language === 'pt' ? 'Erro ao enviar' : 'Submission Error',
        description: language === 'pt' 
          ? 'Ocorreu um erro ao enviar o seu pedido. Por favor tente novamente.' 
          : 'An error occurred while submitting your request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentStep + 1) / totalSteps) * 100;
  const currentStepData = steps[currentStep];
  const isFormStep = currentStep === totalSteps - 1;
  const hasOptions = 'options' in currentStepData && currentStepData.options;

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
              {t.contact.sectionLabel}
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl mb-6">
              {t.contact.sectionTitle}
            </h2>
            <p className="text-muted-foreground text-lg font-light max-w-xl mx-auto">
              {t.contact.sectionSubtitle}
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
                      Step {currentStep + 1} {t.contact.stepOf} {totalSteps}
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
                      {currentStepData.question}
                    </h3>

                    {isFormStep ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="block text-xs font-light tracking-widest uppercase text-muted-foreground mb-2">
                            {t.contact.form.name}
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                            placeholder={t.contact.form.namePlaceholder}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-light tracking-widest uppercase text-muted-foreground mb-2">
                            {t.contact.form.email}
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                            placeholder={t.contact.form.emailPlaceholder}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-light tracking-widest uppercase text-muted-foreground mb-2">
                            {t.contact.form.phone}
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                            placeholder={t.contact.form.phonePlaceholder}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-light tracking-widest uppercase text-muted-foreground mb-2">
                            {t.contact.form.message}
                          </label>
                          <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
                            placeholder={t.contact.form.messagePlaceholder}
                          />
                        </div>
                        <MagneticButton className="w-full">
                          <Button 
                            type="submit" 
                            variant="premium" 
                            size="lg" 
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 size={16} className="animate-spin" />
                                {language === 'pt' ? 'A enviar...' : 'Sending...'}
                              </>
                            ) : (
                              <>
                                {t.contact.form.submit}
                                <ArrowRight size={16} />
                              </>
                            )}
                          </Button>
                        </MagneticButton>
                      </form>
                    ) : hasOptions ? (
                      <div className="space-y-4">
                        {currentStepData.options.map((option) => (
                          <motion.button
                            key={option.value}
                            onClick={() => handleOptionSelect(option.value)}
                            className={`w-full text-left p-6 border transition-all duration-300 ${
                              answers[currentStep] === option.value
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
                                  answers[currentStep] === option.value
                                    ? 'text-background/70'
                                    : 'text-muted-foreground'
                                }`}>
                                  {option.description}
                                </p>
                              </div>
                              {answers[currentStep] === option.value && (
                                <Check size={20} />
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    ) : null}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    aria-label="Go to previous step"
                    className="mt-8 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft size={16} />
                    <span className="text-sm">{t.contact.form.back}</span>
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
                <h3 className="font-serif text-3xl mb-4">{t.contact.success.title}</h3>
                <p className="text-muted-foreground font-light">
                  {t.contact.success.message}
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
