export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Homepage extends CosmicObject {
  type: 'homepage';
  metadata: {
    hero_title?: string;
    hero_subtitle?: string;
    hero_image?: { url: string; imgix_url: string };
    profile_photo?: { url: string; imgix_url: string };
    about_me?: string;
    cta_button_text?: string;
    cta_button_link?: string;
  };
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    service_category?: string;
    short_description?: string;
    full_description?: string;
    service_image?: { url: string; imgix_url: string };
    key_features?: string;
    starting_price?: string;
    display_order?: number;
  };
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_title?: string;
    client_name?: string;
    short_description?: string;
    full_description?: string;
    main_image?: { url: string; imgix_url: string };
    screenshots?: Array<{ url: string; imgix_url: string }>;
    tech_stack?: string;
    live_url?: string;
    github_url?: string;
    related_service?: Service;
    featured?: boolean;
    completion_date?: string;
  };
}

export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    skill_name?: string;
    category?: string;
    proficiency_level?: number;
    icon?: { url: string; imgix_url: string };
  };
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    job_title?: string;
    company_name?: string;
    company_logo?: { url: string; imgix_url: string };
    location?: string;
    start_date?: string;
    end_date?: string;
    currently_working?: boolean;
    description?: string;
  };
}

export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    title?: string;
    excerpt?: string;
    content?: string;
    featured_image?: { url: string; imgix_url: string };
    tags?: string;
    published_date?: string;
    author_name?: string;
  };
}

export interface ContactInfo extends CosmicObject {
  type: 'contact-info';
  metadata: {
    email?: string;
    phone?: string;
    location?: string;
    contact_form_intro?: string;
    social_links?: Record<string, string>;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}