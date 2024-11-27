import { Schema, model, connect } from 'mongoose';
export type Gauardian = {
  fatherName: string;
  montherName: string;
  fotheroccopation: string;
  fatherCon: string;
  motherocc: string;
  motherP: string;
};

export type userName = {
  fristName: string;
  midelName: string;
  lastName: string;
};
export type localguardian = {
  name: string;
  occopation: string;
  contract: string;
  addredd: string;
};
export type Student = {
  id: string;
  name: userName;
  gender: 'male' | 'female';
  detOfBath?: string;
  contractNumber: string;
  emergencyCon: string;
  bloodGroup?: 'O+' | '-O' | 'A+' | 'AB';
  presentAddres: string;
  parmanentAddress: string;

  gauardian: Gauardian;
  email: string;
  avatar?: string;
  localGurdian: localguardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
