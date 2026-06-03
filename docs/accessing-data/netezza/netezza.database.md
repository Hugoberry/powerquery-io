---
title: Netezza.Database
---

# Netezza.Database


Import data from an IBM Netezza database.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returns a table of Netezza tables, views, and stored functions from the Netezza Server database `database` on server `server`. The port may be optionally specified with the server, separated by a colon. An optional record parameter, `options`, may be specified to control the following options:

-   `CreateNavigationProperties`: A logical (true/false) that sets whether to generate navigation properties on the returned values (default is true)
-   `HierarchicalNavigation`: A logical (true/false) that sets whether to view the tables grouped by their schema names (default is false)
-   `ConnectionTimeout`: A duration which controls how long to wait before abandoning an attempt to make a connection to the server. The default value is driver-dependent.
-   `CommandTimeout`: A duration which controls how long the server-side query is allowed to run before it is canceled. The default value is driver-dependent.
-   `NormalizeDatabaseName`: A logical (true/false) that sets whether to normalize database name to upper case or interpret it literally (default is true).

The record parameter is specified as \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
List the tables in an IBM Netezza project.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



