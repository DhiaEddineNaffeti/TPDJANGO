export class Tutorial {
    id?: number;  // Optional, as it could be undefined before creation
    title: string;
    description: string;
    published: boolean;
    
    constructor(title: string, description: string, published: boolean, id?: number) {
      this.title = title;
      this.description = description;
      this.published = published;
      this.id = id;
    }
  }
  