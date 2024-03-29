package com.plopezm.proxy.zoo.control;

import java.io.IOException;
import java.util.concurrent.CountDownLatch;

import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.Watcher.Event.KeeperState;
import org.apache.zookeeper.ZooKeeper;

public class ZKConnection {
	private ZooKeeper zoo;
    CountDownLatch connectionLatch = new CountDownLatch(1);
 
    // ...
 
    public ZooKeeper connect(final String host) 
      throws IOException, 
      InterruptedException {
        zoo = new ZooKeeper(host, 2000, new Watcher() {
            public void process(WatchedEvent we) {
                if (we.getState() == KeeperState.SyncConnected) {
                    connectionLatch.countDown();
                }
            }
        });
 
        connectionLatch.await();
        return zoo;
    }
 
    public void close() throws InterruptedException {
        zoo.close();
    }
}
