#  TacoCalculator
> Now rewritten to Vue (because why run a server and database when everything is done on the client side?) - check it out [here](http://github.com/essoen/tacocalc)

http://taco.svorstol.com

For bruk internt i Abakus' linjeforeningsmagasin readme for å finne ut hvor mye vi skal ha av ulike ingredienser når vi arrangerer readme-taco.
Utviklet i [Meteor](www.meteor.com)

## Installation 
Clone the repository, and run `meteor` for a development environment. 

## Deployment 
We use Docker for simplicity. Clone the repo with `docker pull essoen/tacocalculator`, and simply run the image with 

    docker run -d \
        -e ROOT_URL=http://yourdomain.com \
        -e MONGO_URL=mongodb://url \
        -e MONGO_OPLOG_URL=mongodb://oplog_url \
        -p 8080:80 \
        essoen/tacocalc

To start both a Mongo-instance and the app, we use Compose. Run `docker-compose up`.
