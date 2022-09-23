import { faker } from '@faker-js/faker';

const data = [
  
    {
      avatar : faker.image.avatar(),
      name : faker.name.firstName(),
      date : new Date().toLocaleTimeString(),
      comment : faker.lorem.lines(),
      like: 0
    },
    {
      avatar : faker.image.avatar(),
      name : faker.name.firstName(),
      date : new Date().toLocaleTimeString(),
      comment : faker.lorem.lines(),
      like: 0
    },
    {
      avatar : faker.image.avatar(),
      name : faker.name.firstName(),
      date : new Date().toLocaleTimeString(),
      comment : faker.lorem.lines(),
      like: 0
    }
  ]
  

  export default data