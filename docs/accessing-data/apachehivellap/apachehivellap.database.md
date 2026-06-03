---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Import data from a Hive LLAP


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Returns a list of tables from Hive LLAP specified by the `database` on the Hive LLAP `server` using the selected `protocol`. A port number may be optionally specified with the server, separated by a colon. The Thrift Transport Protocol is an enumerated type with values "Standard", "HTTP". An optional `options` parameter may be specified to control the following options:

-   `ConnectionTimeout`: A duration which controls how long to wait before abandoning an attempt to make a connection to the server. The default value is driver-dependent.
-   `CommandTimeout`: A duration which controls how long the server-side query is allowed to run before it is canceled. The default value is driver-dependent.

The `options` parameter is specified as \[option1 = value1, option2 = value2...\].


