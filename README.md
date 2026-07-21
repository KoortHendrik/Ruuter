# Ruuter
- Java 17, Gradle

## Guide
See guide [here](./samples/GUIDE.md)

## Configuration
See configuration [here](./samples/CONFIGURATION.md)

## Docker

To run the application using Docker, run:

```
docker-compose up -d
```

## Testing

To launch the application's tests, run:

```
gradlew test
```

Use the Gradle wrapper above so the test command runs with the repository's pinned version.


## Building for production

### Packaging as jar

To build the final jar run:

```
gradlew -Pprod clean bootJar
```

To ensure everything worked, run:

```
java -jar build/libs/*.jar
```

### Packaging as war

To package the application as a war in order to deploy it to an application server, run:

```
gradlew -Pprod -Pwar clean bootWar
```

## License

See licence [here](LICENSE).
