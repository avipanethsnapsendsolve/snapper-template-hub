
import { MessageTemplate, DynamicValue, DynamicValueType } from "@/types/template";
import { v4 as uuidv4 } from "uuid";

// Dynamic values available for insertion
export const dynamicValues: DynamicValue[] = [
  {
    type: "snapId",
    label: "Snap ID",
    description: "The unique identifier for this snap",
    placeholder: "[Snap ID]"
  },
  {
    type: "referenceNumber",
    label: "Reference no.",
    description: "The reference number for this request",
    placeholder: "[Reference Number]"
  },
  {
    type: "snapperFullName",
    label: "Snapper full name",
    description: "The full name of the snapper",
    placeholder: "[Snapper Name]"
  },
  {
    type: "incidentTypeName",
    label: "Incident type name",
    description: "The type of incident reported",
    placeholder: "[Incident Type]"
  }
];

// Sample template data
export const sampleTemplates: MessageTemplate[] = [
  {
    id: uuidv4(),
    name: "Confirm Request",
    content: "Hello,\n\nThank you for submitting your request. We have received it and will process it shortly. Your reference number is [Reference Number].\n\nRegards,\nCustomer Services",
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-01-15"),
    createdBy: "Admin",
    lastModifiedBy: "Admin"
  },
  {
    id: uuidv4(),
    name: "Job/CRM raised",
    content: "Hello [Snapper Name],\n\nWe've created a job ticket based on your Snap request. Our team will be addressing your [Incident Type] issue soon.\n\nThank you for using our service.\n\nRegards,\nCustomer Services",
    createdAt: new Date("2023-02-20"),
    updatedAt: new Date("2023-03-15"),
    createdBy: "Admin",
    lastModifiedBy: "Team Leader"
  },
  {
    id: uuidv4(),
    name: "Reassigned by email/phone",
    content: "Hello,\n\nYour request (Snap ID: [Snap ID]) has been reassigned to the appropriate department. You will be contacted shortly by email or phone.\n\nRegards,\nCustomer Services",
    createdAt: new Date("2023-04-10"),
    updatedAt: new Date("2023-04-10"),
    createdBy: "Admin",
    lastModifiedBy: "Admin"
  },
  {
    id: uuidv4(),
    name: "Reassigned in portal",
    content: "Hello,\n\nYour request has been reassigned within our portal. You can track its progress using your reference number [Reference Number].\n\nRegards,\nCustomer Services",
    createdAt: new Date("2023-05-05"),
    updatedAt: new Date("2023-05-05"),
    createdBy: "Admin",
    lastModifiedBy: "Admin"
  },
  {
    id: uuidv4(),
    name: "Customer needs to redirect",
    content: "Hello,\n\nThank you for using Snap Send Solve. We have reviewed your Snap request and as much as we would love to assist you, this particular issue does not fall under the responsibility of the City of Gosnells. We are not authorised to undergo works on issues that are not on council roads, assets, or properties so we have marked your Snap as Solved and you will need to redirect your request to the relevant authority/company.\n\nThank you.\n\nCity of Gosnells' Customer Services",
    createdAt: new Date("2023-06-15"),
    updatedAt: new Date("2023-07-20"),
    createdBy: "Admin",
    lastModifiedBy: "Team Leader"
  }
];

// Insert dynamic value at cursor position or replace selection
export function insertDynamicValue(
  content: string, 
  cursorPosition: number, 
  selectionEnd: number,
  valueType: DynamicValueType
): { newContent: string; newCursorPosition: number } {
  const value = dynamicValues.find(v => v.type === valueType);
  if (!value) return { newContent: content, newCursorPosition: cursorPosition };
  
  const placeholder = value.placeholder;
  
  const before = content.substring(0, cursorPosition);
  const after = content.substring(selectionEnd);
  
  const newContent = before + placeholder + after;
  const newCursorPosition = cursorPosition + placeholder.length;
  
  return { newContent, newCursorPosition };
}

// Create a new template
export function createTemplate(name: string, content: string, createdBy?: string): MessageTemplate {
  return {
    id: uuidv4(),
    name,
    content,
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy,
    lastModifiedBy: createdBy
  };
}

// Update an existing template
export function updateTemplate(
  template: MessageTemplate,
  updates: Partial<MessageTemplate>,
  modifiedBy?: string
): MessageTemplate {
  return {
    ...template,
    ...updates,
    updatedAt: new Date(),
    lastModifiedBy: modifiedBy || template.lastModifiedBy
  };
}
