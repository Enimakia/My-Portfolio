import   SanityClient  from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
    name: 'default',
    title: 'My-Portfolio',
    useCdn:true,
    projectId: 'o7t9m3ua',
    dataset: 'production',
  
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
