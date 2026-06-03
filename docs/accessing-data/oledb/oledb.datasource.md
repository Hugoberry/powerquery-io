---
title: OleDb.DataSource
---

# OleDb.DataSource


Returns a table of SQL tables and views from the OLE DB data source.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returns a table of SQL tables and views from the OLE DB data source specified by the connection string `connectionString`. `connectionString` can be text or a record of property value pairs. Property values can either be text or number. An optional record parameter, `options`, may be provided to specify additional properties. The record can contain the following fields:

-   `CreateNavigationProperties` : A logical (true/false) that sets whether to generate navigation properties on the returned values (default is true).
-   `NavigationPropertyNameGenerator` : A function that is used for the creation of names for navigation properties.
-   `Query` : A native SQL query used to retrieve data. If the query produces multiple result sets, only the first will be returned.
-   `HierarchicalNavigation` : A logical (true/false) that sets whether to view the tables grouped by their schema names (default is true).
-   `ConnectionTimeout` : A duration that controls how long to wait before abandoning an attempt to make a connection to the server. The default value is driver-dependent.
-   `CommandTimeout` : A duration that controls how long the server-side query is allowed to run before it is canceled. The default value is ten minutes.
-   `SqlCompatibleWindowsAuth` : A logical (true/false) that determines whether to produce SQL Server-compatible connection string options for Windows authentication. The default value is true.

The record parameter is specified as \[option1 = value1, option2 = value2...\] or \[Query = "select ..."\], for example.



## Category
Accessing data
