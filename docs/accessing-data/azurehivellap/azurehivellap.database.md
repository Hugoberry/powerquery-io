---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Import data from HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returns a list of tables from HDInsight Interactive Query specified by the `database` on the HDInsight Interactive Query `server`. A port number may be optionally specified with the server, separated by a colon. An optional `options` parameter may be specified to control the following options:

-   `ConnectionTimeout`: A duration which controls how long to wait before abandoning an attempt to make a connection to the server. The default value is driver-dependent.
-   `CommandTimeout`: A duration which controls how long the server-side query is allowed to run before it is canceled. The default value is driver-dependent.

The `options` parameter is specified as \[option1 = value1, option2 = value2...\].


