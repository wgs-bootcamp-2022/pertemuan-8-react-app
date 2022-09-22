import { faker } from '@faker-js/faker';

const data = [
    {
      avatar : faker.image.avatar(),
      name : faker.name.firstName(),
      date : new Date().toLocaleTimeString(),
      comment : faker.lorem.lines()
    },
    {
      avatar : faker.image.avatar(),
      name : faker.name.firstName(),
      date : new Date().toLocaleTimeString(),
      comment : faker.lorem.lines()
    },
    {
      avatar : faker.image.avatar(),
      name : faker.name.firstName(),
      date : new Date().toLocaleTimeString(),
      comment : faker.lorem.lines()
    }
  ]

  export default data