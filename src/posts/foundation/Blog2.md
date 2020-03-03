---
title: "Blog 2"
date: "02-28-2020"
---

## Foundation

### Encapsulation/Decapsulation and Mux-Demux

- Protocol at a particular level will need to add info that will help the peer protocol handle messages to the right higher layer entity.
- Encapsulation is what happens at the sender in this context while Decapsulation is what happens at the receiver
- encap/decap realizes the peer interface of a protocol while mux/demux realizes the service interface.

### Example

- Suppose a client, C, wants to access a server, S, running www.cnn.com
- Let's say our network looks like this: C--SW1--R1--SW2--R2--SW3--R3--SW4--S

1. User enters 'www.cnn.com' into browser
   - Invoke the HTTP application layer
   - Sends a GET request to the server
   - Message has GET in the header and some other info
2. The message is handed to the TCP layer as HTTP only runs on TCP
3. IP encapsulates the segment received from TCP by adding a header that includes the IP address of the sending host.
4. We will use link layer, physical layer, and MAC layer interchangeably.
5. Link layer looks up the link layer address of the router R1 at the other end of the local switched network.
