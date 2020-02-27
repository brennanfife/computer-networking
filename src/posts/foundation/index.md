---
title: "Blog 1"
date: "2020-02-24"
---

## Foundation

## Applications

- Apps use networks to send a receive messages
  - Most popular is the WWW.
  - Here, we use a web server where we can then request a URL to locate objects on the web
  - During this time, many messages are exchanged, such as retrieving an address for the host,
    setting up a connection to the host, requesting and receiving and object
- Networks have existed before computer networks, but were built for one application

## Design Requirements

### Scalable - As more and more devices are connected, how do we connect them all

1. Start with directly/shared connectivity

   - Sometimes it good (for privacy and security purposes) to have a private network

2. A switch network can be either circuit switched (e.g. the telephone system) or packet-switched. Each switch contains a table, with one entry per host. Entries will show host 'physical address' (e.g. MAC Addresses) and the link (or next hop) to use them

   - Usually utilizes a _store-and-forward_ approach
   - Cloud diagrams (which is where the term cloud computing (using a network of remote servers hosted on the internet to store, manage, and process data, rather than a local server or a personal computer) came from)

3. Also have Inter-network, which is stitching together of different networks. This introduces hierarchy to scale networks to larger sizes (e.g. ISP). Here, we use a network router, which will hook together one or more switches. A router is similar to a switch, in that it too maintains a table similar to a switch, but stores different information (e.g. IP Addresses). Inter-networks are usually run by a single entity, such as a campus

   - Routing - How a message is forwarded

4. The entire internet, which is a recursively group interconnected of inter-networks. The inter-connections are made via routers

   - Here we define a network recursively as consisting of two or more nodes connected by a physical link, or as two or more networks connected by a node

- Addressing - Provide a way for hosts to identify and reach other.
- IP Address - identifies end-point and encodes network location (e.g. the IP address 128.2.3.6 labels a node in a network numbered 128.2)
- We also have the MAC Address, which identifies the node. This is given by vendors.
- Network routes will use IP addresses for forward messaging. That is, they have a table mapping MAC addresses to next switch.
- _Routing_ is the process of determining how to forward messages along a sequence of switches.
- The outcome of routing is a set of forwarding tables in each switch or router that collectively determine the path of a message through a network
- When an endpoint's location changes, IP could change but the MAC address will stay the same

### Cost Effective - How to ensure sharing of network resources

- Packet Switching

  - No setup time, more efficient. Circuit networks are good when higher bandwidth is required
  - Packets carry information (addresses) about who is sending them, and where they need to go
  - Switches receive each packet then decide where to send based on addresses.

- Statistical Multiplexing

  - Multiplexing is a method in telecommunications and computer networks where multiple analog or digital signals are combined into one signal over a shared medium
  - Addresses how to schedule applications that want to use a network.
  - Different approaches other than Statistical Multiplexing include TDM (give time slots to each application and plays round robin) and FDM (give capacity (1/N of total capacity) to each application)
  - Problem with TDA and FDA is bandwidth is wasted when apps don't use it and we also need to know N ahead of time (which is hard)
  - Statistical Multiplexing is similar to TDM in that data is sent by one application at a time, but rather data is transmitted _on demand_. Apps will get entire capacity of network.
  - Statistical Multiplexing works through MTU and FIFO.
    - Two things that make SM work include MTU (Max Transmission Unit), which limits how much an application hogs the bandwidth by dividing a message into packages of size = MTU. Additionally, switches will use a buffer that implements FIFO. There may be congestion, when the FIFO queue overflows.
  - Putting it all together in a packet-switched network, we get...

    - Apps running on a network
    - They send messages into the network and the messages are switched hop-by-hop (packet switched)
    - Messages are broken into packets
    - Packets are scheduled using statistical multiplexing
    - Packets arriving at a switch are buffered and sent out, typically in FIFO order
    - When hosts send too fast, buffer at a switch can overflow -- this is called congestion, in which packets are dropped.

  - ![Computerphile](https://www.youtube.com/watch?v=TSJw_oQklz8)

### Support for common services - Many apps may need the same set of mechanisms to enable their communication. This requirements is about extracting out the common requirements and making them available for many apps to use

- Layers and Protocols
  - Common app requirements include a need for reliable, in-order delay or timely delivery
  - This leads to UDP and TCP
  - No matter the app's requirements, they need basic connectivity between endpoints, which comes from the IP Layer
    - SCTP - Message oriented. Records boundaries, is reliable but not in-order
  - Below IP, we have the hardware layers
  - IP ties then together, enables inter-operation and provides a unified interface to transport protocols.
  - Protocols offer 2 interfaces, which includes Service interface (defines the operations that local objects can perform on protocol, include HTTP's GET and POST. Tells what the higher layer can expect) and Peer interface (Defines how the other end interprets a message, including the format of GET)
