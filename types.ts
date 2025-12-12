import React from 'react';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Workshop' | 'Seminar' | 'Hackathon' | 'Networking';
  description: string;
  image: string;
  status: 'Upcoming' | 'Past' | 'Live';
  organizer: string;
  price?: string;
  maxParticipants?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
  category: 'Faculty' | 'Core' | 'Executive';
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  event: string;
  year: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
}

export interface Participant {
  id: string;
  name: string;
  email: string;
  college: string;
  status: 'Confirmed' | 'Pending';
}