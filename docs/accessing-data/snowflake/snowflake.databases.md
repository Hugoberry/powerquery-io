---
title: Snowflake.Databases
---

# Snowflake.Databases


Import data from a Snowflake Computing warehouse.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Returns a table listing the tables in the Snowflake Computing `warehouse` located at `server`. An optional record parameter, `options`, may be specified to control the following options:

-   `Role`: A text value to use as the Role name for the connection.
-   `CreateNavigationProperties`: A logical (true/false) value that sets whether to generate navigation properties on the returned values (default is true).
-   `ConnectionTimeout`: The number of seconds to wait for network responses from Snowflake.
-   `CommandTimeout`: The number of seconds to wait for a query to execute.


## Examples

### Example #1
List the tables in a Snowflake warehouse.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



