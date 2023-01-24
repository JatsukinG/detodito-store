export default {
  // TODO correct the name of data set
  name: 'prodcut',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [{
        name: 'caption',
        type: 'string',
        tittle: 'Caption',
        options : {
          isHighlighted: true
        }
      }]
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string'
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean'
    }
  ]
}