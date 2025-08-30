import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'real-estate', label: 'Real Estate Development' },
    { value: 'ai-ml', label: 'AI & Machine Learning' },
    { value: 'advisory', label: 'Management & Advisory' },
    { value: 'consultation', label: 'General Consultation' }
  ];

  const contactInfo = {
    email: "contact@rjdevgroup.com",
    phone: "+1 (555) 123-4567",
    address: "123 Corporate Plaza, Business District, NY 10001",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM EST"
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful submission
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Icon name="Mail" size={24} color="var(--color-primary)" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-mono">
              Get In Touch
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Contact our expert team to discuss your project requirements and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 corporate-shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-mono">
              Send us a message
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-success mr-3" />
                  <p className="text-success font-medium">
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
                <div className="flex items-center">
                  <Icon name="AlertCircle" size={20} className="text-error mr-3" />
                  <p className="text-error font-medium">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Input
                label="Company Name"
                type="text"
                name="company"
                placeholder="Enter your company name"
                value={formData?.company}
                onChange={handleInputChange}
              />

              <Select
                label="Service Interest"
                placeholder="Select a service"
                options={serviceOptions}
                value={formData?.service}
                onChange={handleServiceChange}
                required
              />

              <Input
                label="Message"
                type="text"
                name="message"
                placeholder="Tell us about your project requirements..."
                value={formData?.message}
                onChange={handleInputChange}
                required
                className="min-h-[120px] resize-none"
              />

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                iconSize={18}
                className="bg-primary hover:bg-secondary text-primary-foreground font-mono font-semibold"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-background rounded-2xl p-8 corporate-shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-6 font-mono">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Mail" size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 font-mono">Email</h4>
                    <a 
                      href={`mailto:${contactInfo?.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {contactInfo?.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Phone" size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 font-mono">Phone</h4>
                    <a 
                      href={`tel:${contactInfo?.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {contactInfo?.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="MapPin" size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 font-mono">Address</h4>
                    <p className="text-muted-foreground">
                      {contactInfo?.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Clock" size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 font-mono">Business Hours</h4>
                    <p className="text-muted-foreground">
                      {contactInfo?.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-background rounded-2xl p-8 corporate-shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-6 font-mono">
                Our Location
              </h3>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="RJ Dev Group Office Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=40.7589,-73.9851&z=14&output=embed"
                  className="border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;