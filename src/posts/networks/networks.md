---
title: "Computer Networks"
date: "2020-02-24"
---

## Computer Networks

- Latency - Time it takes for a packet to be transferred across a network.
- Throughput - The quantity of data being send and received within a unit of time.
- Bandwidth - The maximum amount of data that can travel through a channel.

LAN (e.g. Ethernet)

- MAC Address (Media Access Control Address), which exists for both Ethernet and WiFi

  - Uses CSMA
  - Collision
  - Waiting & exponential backoff to prevent congestion
  - Collision Domain - Shrinking the number of devices connected to a network to prevent collisions. Uses switches

- Routing
  - Circuit Switching - expensive...
  - Message Switching - Using stops. Can use different routes
  - Hop Count and Hop Limit (prevents messages from getting too big)
  - Uses packets and routers. Each packet contains a destination on the network so routes know where to forward them. This is defined by the IP
  - Packet switch was developed during the cold war
  - Every computer connected to the internet gets an IP address
  - TCP/IP knows how to rearrange the packets back together
