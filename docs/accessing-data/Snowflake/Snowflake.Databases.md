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

Returns a table listing the tables in the Snowflake Computing <code>warehouse</code> located at <code>server</code>. An optional record parameter, <code>options</code>, may be specified to control the following options:<ul><li><code>Role</code>: A text value to use as the Role name for the connection.</li><li><code>CreateNavigationProperties</code>: A logical (true/false) value that sets whether to generate navigation properties on the returned values (default is true).</li><li><code>ConnectionTimeout</code>: The number of seconds to wait for network responses from Snowflake.</li><li><code>CommandTimeout</code>: The number of seconds to wait for a query to execute.</li></ul>    


## Examples

### Example #1 
List the tables in a Snowflake warehouse.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



