import { USERS, PROJECTS, TASKS, CHAT_MESSAGES, Project, Task, User, ChatMessage } from './mockData';

export const getProjects = async (): Promise<Project[]> => {
  return PROJECTS;
};

export const createProject = async (project: Omit<Project, 'id'>): Promise<Project> => {
  const newProject = { ...project, id: `p${PROJECTS.length + 1}` } as Project;
  PROJECTS.push(newProject);
  return newProject;
};

export const getTasks = async (): Promise<Task[]> => {
  return TASKS;
};

export const getTaskById = async (id: string): Promise<Task | undefined> => {
  return TASKS.find(t => t.id === id);
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  const newTask = { ...task, id: `TASK-${Math.floor(Math.random() * 1000)}` } as Task;
  TASKS.push(newTask);
  return newTask;
};

export const getUsers = async (): Promise<User[]> => {
  return USERS;
};

export const getChatMessages = async (): Promise<ChatMessage[]> => {
  return CHAT_MESSAGES;
};

export const sendMessage = async (message: Omit<ChatMessage, 'id'>): Promise<ChatMessage> => {
  const newMessage = { ...message, id: `m${CHAT_MESSAGES.length + 1}` } as ChatMessage;
  CHAT_MESSAGES.push(newMessage);
  return newMessage;
};
