import { ResumeData } from './resume';


export interface User {
    name: string
    email: string
    resume?: ResumeData
    preferences?: {
      remote: boolean
      industry: string
      salaryRange: string
    }
  }