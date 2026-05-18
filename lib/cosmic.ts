import { createBucketClient } from '@cosmicjs/sdk'
import { hasStatus, Homepage, Service, Project, Skill, WorkExperience, BlogPost, ContactInfo } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getHomepage(): Promise<Homepage | null> {
  try {
    const response = await cosmic.objects.find({ type: 'homepage' }).depth(1);
    const objects = response.objects as Homepage[];
    return objects[0] || null;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch homepage');
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects.find({ type: 'services' }).depth(1);
    return (response.objects as Service[]).sort((a, b) => {
      const orderA = a.metadata?.display_order || 0;
      const orderB = b.metadata?.display_order || 0;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch services');
  }
}

export async function getService(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'services', slug }).depth(1);
    return response.object as Service;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch service');
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await cosmic.objects.find({ type: 'projects' }).depth(1);
    return (response.objects as Project[]).sort((a, b) => {
      const dateA = new Date(a.metadata?.completion_date || '').getTime();
      const dateB = new Date(b.metadata?.completion_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch projects');
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'projects', slug }).depth(1);
    return response.object as Project;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch project');
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const response = await cosmic.objects.find({ type: 'skills' }).depth(1);
    return response.objects as Skill[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch skills');
  }
}

export async function getWorkExperience(): Promise<WorkExperience[]> {
  try {
    const response = await cosmic.objects.find({ type: 'work-experience' }).depth(1);
    return (response.objects as WorkExperience[]).sort((a, b) => {
      const dateA = new Date(a.metadata?.start_date || '').getTime();
      const dateB = new Date(b.metadata?.start_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch work experience');
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects.find({ type: 'blog-posts' }).depth(1);
    return (response.objects as BlogPost[]).sort((a, b) => {
      const dateA = new Date(a.metadata?.published_date || '').getTime();
      const dateB = new Date(b.metadata?.published_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch blog posts');
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'blog-posts', slug }).depth(1);
    return response.object as BlogPost;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch blog post');
  }
}

export async function getContactInfo(): Promise<ContactInfo | null> {
  try {
    const response = await cosmic.objects.find({ type: 'contact-info' }).depth(1);
    const objects = response.objects as ContactInfo[];
    return objects[0] || null;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch contact info');
  }
}