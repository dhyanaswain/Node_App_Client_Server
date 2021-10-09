# This Node Client App
This Node Client App Running in 3001 Port
following components:

Web framework
- [express 4](https://expressjs.com/)
- [typeorm](https://typeorm.io/)

Logging:
- [winston](https://github.com/winstonjs/winston)

Utilities:
- [async](https://caolan.github.io/async/v3/)
- [dotenv](https://github.com/motdotla/dotenv)
- [lodash](https://lodash.com/docs/4.17.15)

Testing:
- [jest](https://jestjs.io/)
- [supertest](https://github.com/visionmedia/supertest)
- [sinon](https://sinonjs.org/)

Linting:
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)

## Installation
1. Install dependencies

```bash
$ npm -i
```

2. Build sources

```bash
$ npm run build
```

3. To run tests

```bash
$ npm run test
```

4. To start

```bash
$ npm start
```

## Postman
1. http://localhost:3001/server 
    body: {
        "massage": "How many clients we want to create from this 1 Node client"
    }

    res: {
        "message": {
            "node": 6
        }
    }
