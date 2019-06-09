FROM maven:3.6.1-jdk-11-slim AS build

WORKDIR /opt/kafka-rest-proxy
COPY src src
COPY pom.xml .

RUN mvn clean package -DskipTests

FROM openjdk:11.0.3-slim
WORKDIR /opt/kafka-rest-proxy
COPY --from=build /opt/kafka-rest-proxy/target/kafka-rest-proxy.jar .

EXPOSE 9000

ENTRYPOINT java -jar kafka-rest-proxy.jar
