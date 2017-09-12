# micro-random-number-service

Microservice which returns a random number using [micro](https://github.com/zeit/micro) and [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values).

An example is running at: https://micro-random-number-service-pmgghnftey.now.sh

## Dependencies

1. [Node.js 8.1.2+](https://nodejs.org/)

## Installation

1. Clone this repo

```shell
git clone https://github.com/andrewlively/micro-random-number-service && cd micro-random-number-service
```

2. Install dependencies

```shell
npm install
```

3. Start!

```shell
# This will start the microservice running on port 3000

npm start
```

## Parameters

You can include optional parameters with your request through the querystring:

- min (Default: 1)
- max (Default: 5)

## Examples

### Default

```shell
curl https://micro-random-number-service-pmgghnftey.now.sh
```

```json
{
  "number": 5
}
```

### With Parameters

```shell
# Number between 10 and 100

curl -L "https://micro-random-number-service-pmgghnftey.now.sh?min=10&max=100"
```

```json
{
  "number": 49
}
```
