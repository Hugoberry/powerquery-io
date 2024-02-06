---
title: Odbc.DataSource
---

# Odbc.DataSource


Returns a table of SQL tables and views from the ODBC data source. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returns a table of SQL tables and views from the ODBC data source specified by the connection string <code>connectionString</code>. <code>connectionString</code> can be text or a record of property value pairs. Property values can either be text or number. An optional record parameter, <code>options</code>, may be provided to specify additional properties. The record can contain the following fields:    <ul><li><code>CreateNavigationProperties</code> : A logical (true/false) that sets whether to generate navigation properties on the returned values (default is true).</li><li><code>HierarchicalNavigation</code> : A logical (true/false) that sets whether to view the tables grouped by their schema names (default is false).</li><li><code>ConnectionTimeout</code> : A duration that controls how long to wait before abandoning an attempt to make a connection to the server. The default value is 15 seconds.</li><li><code>CommandTimeout</code> : A duration that controls how long the server-side query is allowed to run before it is canceled. The default value is ten minutes.</li><li><code>SqlCompatibleWindowsAuth</code> : A logical (true/false) that determines whether to produce SQL Server-compatible connection string options for Windows authentication. The default value is true.</li></ul>


## Examples

### Example #1 
Return the SQL tables and views from the provided connection string.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
