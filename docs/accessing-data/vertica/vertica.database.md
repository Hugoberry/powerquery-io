---
title: Vertica.Database
---

# Vertica.Database


Import data from Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returns a table of schemas available on the server named by the `server` parameter in the database named by the `database` parameter. An optional record parameter, `options`, may be provided to specify additional properties. The record can contain the following fields:

-   `ConnectionTimeout`: A duration which controls how long to wait before abandoning an attempt to make a connection to the server. The default value is driver-dependent.
-   `CommandTimeout` : A duration which controls how long the server-side query is allowed to run before it is canceled. The default value is driver dependent.


## Examples

### Example #1
List the tables in Vertica
```powerquery

```



