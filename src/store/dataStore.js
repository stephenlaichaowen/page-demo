import { writable } from 'svelte/store'

const dataStore = writable({
  photographer: [
    {
      name: 'Elena Morell',
      title: 'Photographer',
      date: '02/08/2018',
      imageLeft: 'img/photo-left.jpg',
      imageRight: 'img/photo-right.jpg'
    },
    {
      name: 'John Savos',
      title: 'Pro Chef',
      date: '02/05/2015',
      imageLeft: 'img/chef-left.jpg',
      imageRight: 'img/chef-rightt.jpg'
    },
    {
      name: 'John Mayor',
      title: 'Pro Haristylist',
      date: '06/04/2020',
      imageLeft: 'img/hair-left.jpg',
      imageRight: 'img/hair-right.jpg'
    }
  ],
  indicator: [
    {
      number: '01',      
    },
    {
      number: '02',      
    },
    {
      number: '03',      
    }
  ]
})

export default dataStore