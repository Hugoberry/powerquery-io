---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

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


## Details

Returns a list of tables from Hive LLAP specified by the <code>database</code> on the Hive LLAP <code>server</code> using the selected <code>protocol</code>. A port number may be optionally specified with the server, separated by a colon. The Thrift Transport Protocol is an enumerated type with values "Standard", "HTTP". An optional <code>options</code> parameter may be specified to control the following options:<ul>        <li><code>ConnectionTimeout</code>: A duration which controls how long to wait before abandoning an attempt to make a connection to the server. The default value is driver-dependent.</li>        <li><code>CommandTimeout</code>: A duration which controls how long the server-side query is allowed to run before it is canceled. The default value is driver-dependent.</li></ul>The <code>options</code> parameter is specified as [option1 = value1, option2 = value2...].


