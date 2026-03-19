import mongoose from "mongoose";
import { BUSINESSLIST } from "../../collectionName.js";

import businessSchema from "../../schema/businessList/businessListSchema.js";

const businessListModel = mongoose.model(BUSINESSLIST, businessSchema);

export default businessListModel; 
