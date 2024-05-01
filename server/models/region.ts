import mongoose, { Schema, Document } from 'mongoose';

export interface RegionData extends Document {
    COD_REGIONE: string;
    DESC_REGIONE: string;
}

const regionSchema = new Schema<RegionData>({
    COD_REGIONE: { type: String, required: true },
    DESC_REGIONE: { type: String, required: true }
}, { timestamps: true });

const RegionModel = mongoose.model<RegionData>('Region', regionSchema);

export default RegionModel;
