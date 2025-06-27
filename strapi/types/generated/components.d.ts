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
    item: Schema.Attribute.Component<'ui.navigation-item', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface UiHero extends Struct.ComponentSchema {
  collectionName: 'components_ui_heroes';
  info: {
    displayName: 'hero';
    icon: 'rocket';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_navigation_items';
  info: {
    displayName: 'navigation-item';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.header': UiHeader;
      'ui.hero': UiHero;
      'ui.navigation-item': UiNavigationItem;
    }
  }
}
