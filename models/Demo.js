const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  service: {
    type: String,
    required: [true, 'Please select a service'],
    enum: [
      'website-development',
      'app-development',
      'game-development',
      'logo-design',
      'seo-backlinks',
      'ui-ux-design',
      'video-production',
      'chatbot-development',
      'crm-erp-integration',
      'custom-api-development',
      'content-writing'
    ]
  },
  preferredDate: {
    type: Date,
    required: [true, 'Please provide preferred date']
  },
  preferredTime: {
    type: String,
    required: [true, 'Please provide preferred time'],
    enum: ['morning', 'afternoon', 'evening']
  },
  projectDescription: {
    type: String,
    required: [true, 'Please describe your project'],
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  budget: {
    type: String,
    enum: ['under-5k', '5k-10k', '10k-25k', '25k-50k', '50k+', 'not-sure']
  },
  timeline: {
    type: String,
    enum: ['asap', '1-month', '2-3-months', '3-6-months', '6-months+']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Demo', demoSchema); 