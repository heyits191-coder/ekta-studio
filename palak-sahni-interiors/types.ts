import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum ConciergeState {
  IDLE,
  THINKING,
  RESPONDING,
  ERROR
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}