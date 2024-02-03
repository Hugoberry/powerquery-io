---
title: Impala.Database
---

# Impala.Database


## Description

Import data from an Impala cluster


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Import data from an Impala cluster <code>server</code>. If a port wasn't specified, the default port 21050 will be used.


## Examples

### Example #1 
List the tables in an Impala cluster.
```powerquery
Impala.Database("localhost:21050")
```



