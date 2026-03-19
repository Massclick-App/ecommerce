import mongoose from "mongoose"
const { Schema } = mongoose;

const businessSchema = new mongoose.Schema({

  // 🔹 BASIC INFO
  businessName: { type: String, required: true, index: true },
  slug: { type: String, unique: true },
  description: String,

  ownerId: { type: Schema.Types.ObjectId, ref: "User", required: true },

  businessType: {
    type: String,
    enum: ["SELLER", "SERVICE_PROVIDER", "BRAND"],
    default: "SELLER",
  },

  email: String,
  contact: String,
  whatsappNumber: String,
  website: String,

  address: {
    plotNumber: String,
    street: String,
    city: String,
    state: String,
    country: { type: String, default: "India" },
    pincode: String,
  },

  geoLocation: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], index: "2dsphere" },
  },

  gstin: String,
  panNumber: String,
  cinNumber: String,

  logo: String,
  bannerImage: String,
  businessImages: [String],

  category: { type: String, index: true },
  subCategory: String,
  keywords: [String],

  seo: {
    title: String,
    description: String,
  },

  social: {
    facebook: String,
    instagram: String,
    youtube: String,
    twitter: String,
    linkedin: String,
  },

  subscription: {
    plan: {
      type: String,
      enum: ["FREE", "PREMIUM", "PRO", "ENTERPRISE"],
      default: "FREE",
    },
    isActive: Boolean,
    startDate: Date,
    endDate: Date,
    autoRenew: Boolean,
  },

  verification: {
    status: {
      type: String,
      enum: ["PENDING", "VERIFIED", "REJECTED"],
      default: "PENDING",
    },
    verifiedBy: { type: Schema.Types.ObjectId, ref: "User" },
    verifiedAt: Date,
  },

  ratings: {
    average: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
  },

  badges: {
    isFeatured: Boolean,
    isTrending: Boolean,
    isTopSeller: Boolean,
    priorityScore: { type: Number, default: 0 },
  },

  logistics: {
    warehouseAddresses: [{
      address: String,
      city: String,
      country: String,
      pincode: String,
    }],
    shippingType: {
      type: String,
      enum: ["SELF", "PLATFORM"],
      default: "PLATFORM",
    },
    returnPolicy: String,
  },

  payoutDetails: {
    bankName: String,
    accountNumber: String,
    ifscCode: String,
    accountHolderName: String,
    upiId: String,
  },

  analytics: {
    totalOrders: { type: Number, default: 0 },
    totalRevenue: { type: Number, default: 0 },
    totalProducts: { type: Number, default: 0 },
    conversionRate: { type: Number, default: 0 },
  },

  isActive: { type: Boolean, default: true },
  isLive: { type: Boolean, default: false },

  kycDocuments: [String],

  createdBy: { type: Schema.Types.ObjectId, ref: "User" },

}, { timestamps: true });

export default businessSchema;