
export interface MessageTemplate {
  id: string;
  name: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy?: string;
  lastModifiedBy?: string;
}

export interface TemplateHistoryEntry {
  id: string;
  templateId: string;
  content: string;
  modifiedAt: Date;
  modifiedBy: string;
}

export type DynamicValueType = 
  | "snapId" 
  | "referenceNumber" 
  | "snapperFullName" 
  | "incidentTypeName";

export interface DynamicValue {
  type: DynamicValueType;
  label: string;
  description: string;
  placeholder: string;
}
