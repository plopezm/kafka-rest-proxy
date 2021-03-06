# Kafka Rest Proxy

This project is focused on managing Kafka environment via REST.

# How it works

Once the service is up, it finds the brokers registered in zookeeper providing them via rest api

# Configuration

It is required to provide the following properties:

* app.address=http://localhost:9000 # It is used to navigate over rest API, the value is the public address of this service
* zookeeper.servers=localhost:2181,localhost:2182,localhost:2183

If you are executing this application with docker, then the following environment variables are required:

* APP_PUBLIC_ADDRESS -> The public address and port. It is used for navigating over zookeeper with a next value in the response. For example "localhost:9000"
* ZOO_SERVERS -> Zookeeper addresses. For example "zoo1:2181,zoo2:2182,zoo3:2183"

# Implemented endpoints

* WebApp: http://localhost:9000
* Swagger documentation: http://localhost:9000/swagger-ui.html


```
* GET  /navigation/nodes 	 			-> returns the existing nodes in zookeeper
* GET  /admin/addresses 				-> returns kafka addresses
* GET  /admin/cluster-info 	 			-> returns kafka cluster info
* GET  /kafka/topics					-> returns registered topics
* POST /kafka/topics					-> creates a new topic
* GET  /kafka/topics/{topicId}			-> returns all messages from selected topic from all partitions
* POST /kafka/topics/{topicId}/{key}	-> creates new message
```

# Next steps

* Better topic management (balancing,...)
* Security management

# Examples

* GET http://localhost:9000/navigation/nodes

```json
{
    "nodePath": "/",
    "childs": [
        "cluster",
        "controller_epoch",
        "controller",
        "brokers",
        "zookeeper",
        "admin",
        "isr_change_notification",
        "consumers",
        "log_dir_event_notification",
        "latest_producer_id_block",
        "config"
    ],
    "data": "",
    "next": [
        "http://localhost:9000/navigation/nodes?q=/cluster",
        "http://localhost:9000/navigation/nodes?q=/controller_epoch",
        "http://localhost:9000/navigation/nodes?q=/controller",
        "http://localhost:9000/navigation/nodes?q=/brokers",
        "http://localhost:9000/navigation/nodes?q=/zookeeper",
        "http://localhost:9000/navigation/nodes?q=/admin",
        "http://localhost:9000/navigation/nodes?q=/isr_change_notification",
        "http://localhost:9000/navigation/nodes?q=/consumers",
        "http://localhost:9000/navigation/nodes?q=/log_dir_event_notification",
        "http://localhost:9000/navigation/nodes?q=/latest_producer_id_block",
        "http://localhost:9000/navigation/nodes?q=/config"
    ]
}
```

* GET http://localhost:9000/navigation/nodes?q=/brokers
```json
{
    "nodePath": "/brokers",
    "childs": [
        "ids",
        "topics",
        "seqid"
    ],
    "data": null,
    "next": [
        "http://localhost:9000/navigation/nodes?q=/brokers/ids",
        "http://localhost:9000/navigation/nodes?q=/brokers/topics",
        "http://localhost:9000/navigation/nodes?q=/brokers/seqid"
    ]
}
```

* GET http://localhost:9000/navigation/nodes?q=/brokers/ids
```json
{
    "nodePath": "/brokers/ids",
    "childs": [
        "1",
        "2",
        "3"
    ],
    "data": null,
    "next": [
        "http://localhost:9000/navigation/nodes?q=/brokers/ids/1",
        "http://localhost:9000/navigation/nodes?q=/brokers/ids/2",
        "http://localhost:9000/navigation/nodes?q=/brokers/ids/3"
    ]
}
```

* GET http://localhost:9000/navigation/nodes?q=/brokers/ids/1
```json
{
    "nodePath": "/brokers/ids/1",
    "childs": [],
    "data": {
        "listener_security_protocol_map": {
            "LISTENER_DOCKER_INTERNAL": "PLAINTEXT",
            "LISTENER_DOCKER_EXTERNAL": "PLAINTEXT"
        },
        "endpoints": [
            "LISTENER_DOCKER_INTERNAL://kafka1:19092",
            "LISTENER_DOCKER_EXTERNAL://127.0.0.1:9092"
        ],
        "jmx_port": -1,
        "port": 19092,
        "host": "kafka1",
        "version": 4,
        "timestamp": "1559981980959"
    },
    "next": null
}
```

* GET http://localhost:9000/kafka/topics
```json
{
    "__confluent.support.metrics": [
        {
            "topic": "__confluent.support.metrics",
            "partition": 0,
            "leader": {
                "id": 2,
                "idString": "2",
                "host": "127.0.0.1",
                "port": 9093,
                "rack": null,
                "hash": null,
                "empty": false
            },
            "replicas": [
                {
                    "id": 2,
                    "idString": "2",
                    "host": "127.0.0.1",
                    "port": 9093,
                    "rack": null,
                    "hash": null,
                    "empty": false
                },
                {
                    "id": 3,
                    "idString": "3",
                    "host": "127.0.0.1",
                    "port": 9094,
                    "rack": null,
                    "hash": null,
                    "empty": false
                },
                {
                    "id": 1,
                    "idString": "1",
                    "host": "127.0.0.1",
                    "port": 9092,
                    "rack": null,
                    "hash": null,
                    "empty": false
                }
            ],
            "inSyncReplicas": [
                {
                    "id": 2,
                    "idString": "2",
                    "host": "127.0.0.1",
                    "port": 9093,
                    "rack": null,
                    "hash": null,
                    "empty": false
                },
                {
                    "id": 1,
                    "idString": "1",
                    "host": "127.0.0.1",
                    "port": 9092,
                    "rack": null,
                    "hash": null,
                    "empty": false
                },
                {
                    "id": 3,
                    "idString": "3",
                    "host": "127.0.0.1",
                    "port": 9094,
                    "rack": null,
                    "hash": null,
                    "empty": false
                }
            ],
            "offlineReplicas": []
        }
    ]
}
```

