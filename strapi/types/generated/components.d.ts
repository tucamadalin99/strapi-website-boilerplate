import type { Schema, Struct } from '@strapi/strapi';

export interface UiHeader extends Struct.ComponentSchema {
  collectionName: 'components_ui_headers';
  info: {
    displayName: 'Header';
    icon: 'cursor';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    navItems: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.header': UiHeader;
    }
  }
}
