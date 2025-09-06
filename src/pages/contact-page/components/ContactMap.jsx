import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ContactMap = () => {
  const [mapError, setMapError] = useState(false);

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.019845629386!2d-74.0059728!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e555555%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sen!2sus!4v1234567890123";

  const handleMapError = () => {
    setMapError(true);
  };

  const handleDirections = () => {
    const address = encodeURIComponent("123 Corporate Plaza, Business District, New York, NY 10001");
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  return (
    <div className="bg-surface rounded-xl overflow-hidden corporate-shadow">
      <div className="p-6 border-b border-border">
        <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center">
          <Icon name="Navigation" size={24} className="mr-3 text-primary" />
          Find Us
        </h3>
        <p className="text-muted-foreground">
          Located in the heart of the business district with easy access to public transportation.
        </p>
      </div>
      
      <div className="relative">
        {!mapError ? (
          <div className="aspect-[16/10] w-full">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RJ Dev Group Office Location"
              onError={handleMapError}
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="aspect-[16/10] w-full bg-gray-100 flex items-center justify-center">
            <div className="text-center space-y-4">
              <Icon name="MapPin" size={48} className="text-gray-400 mx-auto" />
              <div>
                <p className="text-gray-600 font-medium">Map temporarily unavailable</p>
                <p className="text-gray-500 text-sm">123 Corporate Plaza, Business District</p>
                <p className="text-gray-500 text-sm">New York, NY 10001</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Map Overlay Controls */}
        <div className="absolute top-4 right-4 space-y-2">
          <button
            onClick={handleDirections}
            className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-lg corporate-shadow-md transition-all duration-200 hover:scale-105 group"
            title="Get Directions"
          >
            <Icon name="Navigation" size={18} className="group-hover:rotate-12 transition-transform duration-200" />
          </button>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-foreground">Getting Here</p>
            <p className="text-sm text-muted-foreground">Multiple transportation options available</p>
          </div>
          <button
            onClick={handleDirections}
            className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors duration-200"
          >
            <Icon name="Navigation" size={16} />
            <span className="font-medium">Directions</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Parking available</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Train" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Subway nearby</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Bus" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Bus routes</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Plane" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Airport accessible</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;