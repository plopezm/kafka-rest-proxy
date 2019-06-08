# Kafka Rest Proxy (WIP)

This project is focused on managing Kafka environment via REST.

# How it works

Once the service is up, it finds the brokers registered in zookeeper providing them via rest api

# Configuration

It is required to provide the following properties:

# App properties
app.address=http://localhost:8080 # It is used for navigating over rest API, the value is the public address for this service
# Zookeeper properties
zookeeper.servers=localhost:2181,localhost:2182,localhost:2183

# Currently implemented endpoints

* GET /navigation/nodes 	-> returns the existing nodes in zookeeper
* GET /kafka/addresses 		-> returns kafka addresses
* GET /kafka/cluster-info 	-> returns kafka cluster info
* GET /kafka/topics			-> returns registered topics
