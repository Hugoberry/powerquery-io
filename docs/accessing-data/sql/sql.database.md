---
title: Sql.Database
---

# Sql.Database


Returns a table of SQL tables, views, and stored functions from the SQL Server database.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returns a table of SQL tables, views, and stored functions from the SQL Server database <code>database</code> on server <code>server</code>. The port may be optionally specified with the server, separated by a colon or a comma. An optional record parameter, <code>options</code>, may be specified to control the following options:    <ul><li><code>Query</code> : A native SQL query used to retrieve data. If the query produces multiple result sets, only the first will be returned.</li><li><code>CreateNavigationProperties</code> : A logical (true/false) that sets whether to generate navigation properties on the returned values (default is true).</li><li><code>NavigationPropertyNameGenerator</code> : A function that is used for the creation of names for navigation properties.</li><li><code>MaxDegreeOfParallelism</code> : A number that sets the value of the &quot;maxdop&quot; query clause in the generated SQL query.</li><li><code>CommandTimeout</code> : A duration that controls how long the server-side query is allowed to run before it is canceled. The default value is ten minutes.</li><li><code>ConnectionTimeout</code> : A duration that controls how long to wait before abandoning an attempt to make a connection to the server. The default value is driver-dependent.</li><li><code>HierarchicalNavigation</code> : A logical (true/false) that sets whether to view the tables grouped by their schema names (default is false).</li><li><code>MultiSubnetFailover</code> : A logical (true/false) that sets the value of the &quot;MultiSubnetFailover&quot; property in the connection string (default is false).</li><li><code>UnsafeTypeConversions</code> : A logical (true/false) that, if true, attempts to fold type conversions which could fail and cause the entire query to fail. Not recommended for general use.</li><li><code>ContextInfo</code> : A binary value that is used to set the CONTEXT_INFO before running each command.</li><li><code>OmitSRID</code> : A logical (true/false) that, if true, omits the SRID when producing Well-Known Text from geometry and geography types.</li><li><code>EnableCrossDatabaseFolding</code> : A logical (true/false) value that, if true, allows query folding across databases on the same server. The default value is false.</li></ul>    The record parameter is specified as [option1 = value1, option2 = value2...] or [Query = "select ..."] for example.    



## Category
Accessing data
