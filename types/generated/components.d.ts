import type { Schema, Struct } from '@strapi/strapi';

export interface LocalEndereco extends Struct.ComponentSchema {
  collectionName: 'components_local_enderecos';
  info: {
    displayName: 'endereco';
  };
  attributes: {
    cep: Schema.Attribute.String & Schema.Attribute.Required;
    cidade: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    complemento: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    estado: Schema.Attribute.String & Schema.Attribute.Required;
    numero: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    rua: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'local.endereco': LocalEndereco;
    }
  }
}
