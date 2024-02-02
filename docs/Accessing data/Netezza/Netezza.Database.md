---
title: Netezza.Database
---

# Netezza.Database


## Description

Import data from an IBM Netezza database.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returns a table of Netezza tables, views, and stored functions from the Netezza Server database <code>database</code> on server <code>server</code>. The port may be optionally specified with the server, separated by a colon. An optional record parameter, <code>options</code>, may be specified to control the following options:<ul>        <li><code>CreateNavigationProperties</code>: A logical (true/false) that sets whether to generate navigation properties on the returned values (default is true)</li>        <li><code>HierarchicalNavigation</code>: A logical (true/false) that sets whether to view the tables grouped by their schema names (default is false)</li>        <li><code>ConnectionTimeout</code>: A duration which controls how long to wait before abandoning an attempt to make a connection to the server. The default value is driver-dependent.</li>        <li><code>CommandTimeout</code>: A duration which controls how long the server-side query is allowed to run before it is canceled. The default value is driver-dependent.</li><li><code>NormalizeDatabaseName</code>: A logical (true/false) that sets whether to normalize database name to upper case or interpret it literally (default is true).</li></ul>The record parameter is specified as [option1 = value1, option2 = value2...].


## Examples

### Example #1 
List the tables in an IBM Netezza project.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



