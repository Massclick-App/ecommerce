import mongoose from "mongoose";
const { Schema } = mongoose;

const businessSchema = new mongoose.Schema(
{
  clientId: { type: String, default: '', index: true },

  businessName: { 
    type: String, 
    required: true, 
    trim: true,
    index: true 
  },

  email: { type: String, lowercase: true, trim: true, index: true },

  contact: { type: String, index: true },

  contactList: { type: String },

  gstin: { type: String, index: true },

  whatsappNumber: { type: String, required: true, index: true },

  experience: { type: String, required: true },

  businessesLive: { type: Boolean, default: false, index: true },

  location: { type: String, required: true, index: true },

  category: { 
    type: String, 
    required: true, 
    index: true 
  },

  categorySlug: {
    type: String,
    index: true
  },

  categories: [{
    type: String,
    index: true
  }],

  keywords: [{ 
    type: String,
    index: true 
  }],

  keywordsNormalized: [{
    type: String,
    index: true
  }],

  slug: { 
    type: String, 
    unique: true, 
    index: true 
  },

  seoTitle: { type: String },
  seoDescription: { type: String },

  title: { type: String },
  description: { type: String },

  bannerImageKey: { type: String },

  businessImagesKey: [{ type: String }],

  qrCode: {
    qrText: String,
    qrImageKey: String,
    createdAt: Date
  },

  website: String,
  facebook: String,
  instagram: String,
  youtube: String,
  pinterest: String,
  twitter: String,
  linkedin: String,

  businessDetails: String,

  verification: {
    isVerified: { type: Boolean, default: false, index: true },
    verifiedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    verifiedAt: Date,
    verificationType: {
      type: String,
      enum: ["ADMIN", "DOCUMENT", "AUTO"],
      default: "ADMIN",
    },
  },

  badges: {
    isFeatured: { type: Boolean, default: false, index: true },
    isSponsored: { type: Boolean, default: false, index: true },
    isTrending: { type: Boolean, default: false, index: true },
    priorityScore: { type: Number, default: 0, index: true },
  },

  analytics: {
    views: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    leads: { type: Number, default: 0 },
    lastViewedAt: { type: Date, default: null },
  },
  kycDocumentsKey: [{ type: String }],
  averageRating: { type: Number, default: 0, index: true },
  activeBusinesses: { type: Boolean, default: true, index: true },

  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true
  },

  isActive: { type: Boolean, default: true, index: true },

},
{
  timestamps: true
}
);

businessSchema.index({
  businessName: "text",
  category: "text",
  keywords: "text",
  description: "text",
  title: "text",
  seoTitle: "text",
  seoDescription: "text"
});

export default businessSchema;