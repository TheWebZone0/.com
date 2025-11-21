import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'frontend' | 'backend' | 'tools';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}