import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [messageLength, setMessageLength] = useState(0);
  const maxMessageLength = 1000;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const watchMessage = watch('message', '');
  
  React.useEffect(() => {
    setMessageLength(watchMessage?.length || 0);
  }, [watchMessage]);

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'real-estate', label: 'Real Estate Development' },
    { value: 'ai-ml', label: 'AI & Machine Learning' },
    { value: 'advisory', label: 'Management & Advisory' },
    { value: 'multiple', label: 'Multiple Services' },
    { value: 'consultation', label: 'Initial Consultation' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush Project)' },
    { value: '1-month', label: 'Within 1 Month' },
    { value: '3-months', label: '1-3 Months' },
    { value: '6-months', label: '3-6 Months' },
    { value: '6-plus', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetOptions = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-plus', label: '$100,000+' },
    { value: 'discussion', label: 'Let\'s Discuss' }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send data to your backend
      console.log('Form submitted:', data);
      
      setSubmitStatus('success');
      reset();
      setMessageLength(0);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface rounded-2xl p-8 corporate-shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Let's Start Your Project
        </h2>
        <p className="text-muted-foreground text-lg">
          Fill out the form below and our team will get back to you within 24 hours with a personalized consultation.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
          <Icon name="CheckCircle" size={20} className="text-green-600 mr-3" />
          <div>
            <p className="text-green-800 font-medium">Message sent successfully!</p>
            <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <Icon name="AlertCircle" size={20} className="text-red-600 mr-3" />
          <div>
            <p className="text-red-800 font-medium">Something went wrong</p>
            <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input
              label="Full Name *"
              placeholder="Your full name"
              error={errors?.name?.message}
              {...register('name', {
                required: 'Full name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                }
              })}
            />
          </div>
          <div>
            <Input
              label="Email Address *"
              type="email"
              placeholder="your@email.com"
              error={errors?.email?.message}
              {...register('email', {
                required: 'Email address is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
            error={errors?.phone?.message}
            {...register('phone', {
              pattern: {
                value: /^[\+]?[(]?[\d\s\-\(\)]{10,}$/,
                message: 'Please enter a valid phone number'
              }
            })}
          />
        </div>

        {/* Service Interest */}
        <div>
          <Select
            label="Service Interest *"
            placeholder="Select a service..."
            options={serviceOptions}
            error={errors?.service?.message}
            {...register('service', {
              required: 'Please select a service of interest'
            })}
          />
        </div>

        {/* Timeline and Budget Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Select
              label="Project Timeline"
              placeholder="Select timeline..."
              options={timelineOptions}
              {...register('timeline')}
            />
          </div>
          <div>
            <Select
              label="Budget Range"
              placeholder="Select budget range..."
              options={budgetOptions}
              {...register('budget')}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Project Details *
          </label>
          <textarea
            rows={6}
            maxLength={maxMessageLength}
            placeholder="Tell us about your project, goals, requirements, and any specific questions you have..."
            className={`w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 ${
              errors?.message 
                ? 'border-red-300 bg-red-50' :'border-border bg-background hover:border-primary/50'
            }`}
            {...register('message', {
              required: 'Please provide project details',
              minLength: {
                value: 20,
                message: 'Please provide at least 20 characters'
              }
            })}
          />
          <div className="flex justify-between items-center mt-2">
            {errors?.message && (
              <p className="text-red-600 text-sm">{errors?.message?.message}</p>
            )}
            <p className={`text-sm ml-auto ${
              messageLength > maxMessageLength * 0.9 
                ? 'text-red-600' :'text-muted-foreground'
            }`}>
              {messageLength}/{maxMessageLength}
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            fullWidth
            iconName={isSubmitting ? "Loader2" : "Send"}
            iconPosition="right"
            iconSize={18}
            className={isSubmitting ? 'cursor-not-allowed opacity-75' : ''}
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;