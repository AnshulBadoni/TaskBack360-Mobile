export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  privacy: 'public' | 'private';
  members: string[];
}

export interface Task {
  id: string;
  name: string;
  description: string;
  projectId: string;
  assigneeId: string;
  dueDate: string;
  priority: string;
  labels: string[];
  status: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  linkedTaskId?: string;
}

export const USERS: User[] = [
  {
    id: '1',
    name: 'Sarah M.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqe4yca9Z3r8kiGnPh6Lb9UzWdZ87kngd0TvWDSXV7Tch74piBGRzqlEAeRbZbEzmF3kneCv1i-WecI4Z5HkYyT2PdU2b_pBidSRAZmerRxD9cPio8cckJwV_OldYqhbjeOIfwM00m7X7Dchurubg3q5EBneDs_z7yy9WRG8j5yIvHJ5zf-u03vjEOplkxRvRd9Cyf0bME5ddnjVxuTIOw2Mh5DewIWKz2bweYoNRm0aujVl0ujmWZRTg9d2hgVaAZZcfDLb-Bh1xz',
    role: 'Designer',
  },
  {
    id: '2',
    name: 'Alex Rivera',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApBZs0J_rMedctrjn3hMoneMePJ1nbjK4L7qgRG8Bfm36TeQfVMmZ84CqvX42NvE1U8UEKZClgXxaTiH5MPkPFd5zeGD1FD-AX2DAsGNIuQXhY9CFsEYrjWgdTPSmgQkk5ijYlbEh7MRRhXe5xNYoL6IMdC5R6QsDc632how_stqCifRoyUSnUi0CBEnP4IhCbLBfH8LFOGNV2R3bFM6RJ4kesGf_n42Sagbz5STt4m_Vu7_6eOFOmldrHnmZTM0jWrWVFk3Qa9k9J',
    role: 'Developer',
  },
  {
    id: '3',
    name: 'Jordan Lee',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTjGYM19FHNibv3cdlBq58quezZ4e6yKTdA3mhax9iEnbmPatbD7H0Y9-iJd7D6g6N0ZL0pGoc6Ijb8qPQ_CEkAVEWkHgmevPZe5RetlmQAQcheWmEOhxZHTwG-GMPFsobjxSXigoPWfn4EeMqlEh7cu1ZSWA1drj_vPCTyaV5e-d-gcfutUpOFF6aTv9nluwo2ZwhQzitbNbHMqpT7Yb5PEdQhUMX1eMF4COWaE3sfoY1BOv0h0NwLkZaoBAR3NiV4K0p_LOLtVf_',
    role: 'Product Manager',
  },
  {
    id: '4',
    name: 'Maya Patel',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmATelqyVJ2jGEabTs6m7sLQ0qHMagWNuntcAE42grG5A2q2XWH416Uje6XsSpRRitVz_iguCG7Zkd338IYzZ_8SJTJ8ZmakkWnVQeZwmyNAaAhYmPHBXpLAMUi8lQ49wpe_l3IZAbe-8cp4dOVGYkVN7zwuTbFVyotI8VeLULAiqyVnjk23iNtvrd8Egqa6FdW6c-s82e6Ns3Sr5ejhiBYjfYERsKgk64eO-706coA7v8Cut-DQbKigQXhF1RXMvmnrKlsbK2pI8a',
    role: 'Lead Frontend',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Mobile Redesign',
    description: 'Revamping the mobile application for better user experience.',
    privacy: 'public',
    members: ['1', '2'],
  },
];

export const TASKS: Task[] = [
  {
    id: 'TASK-102',
    name: 'Refactor authentication module with OAuth2 compliance',
    description: 'We need to transition our current JWT implementation to a full OAuth2 flow. This includes updating the middleware to support refresh tokens and implementing scope-based authorization.',
    projectId: 'p1',
    assigneeId: '2',
    dueDate: 'Oct 24, 2023',
    priority: 'High',
    labels: ['BACKEND', 'SECURITY'],
    status: 'In Progress',
  },
  {
    id: 'TASK-402',
    name: 'Refactor Auth Middleware',
    description: 'Update the middleware to handle the new OAuth flow.',
    projectId: 'p1',
    assigneeId: '2',
    dueDate: 'Oct 25, 2023',
    priority: 'High',
    labels: ['BACKEND'],
    status: 'In Progress',
  },
];

export const CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    senderId: '2',
    text: 'Hey, have you had a chance to look at the new API documentation for #402?',
    timestamp: 'Today',
    linkedTaskId: 'TASK-402',
  },
  {
    id: 'm2',
    senderId: 'me',
    text: "Just finished it. It looks good to go! I've updated the status on Jira as well.",
    timestamp: 'Just now',
  },
  {
     id: 'm3',
     senderId: 'me',
     text: "Check out the #402 card above for the latest updates.",
     timestamp: 'Just now',
  }
];
