---
title: MariaDB.Contents
---

# MariaDB.Contents



## Syntax

```powerquery
MariaDB.Contents(
    MariaDB Data Source as text,
    optional database as text,
    optional CreateNavigationProperties as logical
) as table
```


## Remarks

Returns a navigation table.

-   Without a `databasename`, returns a table of databases on the specified MariaDB server `servername`.
-   With a `databasename`, returns or a table of tables and views from the specified MariaDB database `databasename` on the server `servername`.

`databasename` can be provided in either of the input parameters:

-   In the **MariaDB Data Source** string after a semicolon. This approach allows using database-specific credentials. See details below.
-   As the optional **Database** parameter. This approach allows using same credentials for all databases on the specified server `servername`.

The **MariaDB Data Source** string uniquely identifies a data source in Power BI and allows using different credentials for each data source. Credentials for a data source are configured in Power BI *Data source settings* screen. MariaDB Power BI connector supports Basic authentication per server or per database. E.g. it is possible to connect with different credentials to databases residing on the same MariaDB server.

`CreateNavigationProperties` is a parameter for Odbc.DataSource.

A logical value that sets whether to generate navigation properties on the returned tables. Navigation properties are based on foreign key relationships reported by the driver. These properties show up as “virtual” columns that can be expanded in the query editor, creating the appropriate join.

If calculating foreign key dependencies is an expensive operation for your driver, you may want to set this value to false.

Default: TRUE


## Examples

### Example #1
Returns a table of MariaDB tables and views functions from the MariaDB database `databasename` on server `servername`.
```powerquery
MariaDB.Contents("servername", "databasename")
```

Result: 
```powerquery
#table({"Name", "Description", "Data", "Kind"}, {
       {"airlines", null, #table(...), "Table"},
       {"airports", null, #table(...), "Table"},
       {"flights", null, #table(...), "Table"}
       })
```


### Example #2
Returns a table of databases on the specified MariaDB server using the default port 3306 to connect. Equivalent to `MariaDB.Contents("servername:3306")`.
```powerquery
MariaDB.Contents("servername")
```

Result: 
```powerquery
#table({"Name", "Description", "Data", "Kind"}, {
       {"mysql", null, #table(...), "Database"},
       {"flights", null, #table(...), "Database"}
       })
```


### Example #3
Returns a table of databases on the specified MariaDB server `servername` using the provided port number `portnumber` to connect.
```powerquery
MariaDB.Contents("servername:portnumber")
```

Result: 
```powerquery
#table({"Name", "Description", "Data", "Kind"}, {
       {"mysql", null, #table(...), "Database"},
       {"flights", null, #table(...), "Database"}
       })
```


### Example #4
Returns a table of MariaDB tables and views from the MariaDB database `databasename` on server `servername`. The result is similar to `MariaDB.Contents("servername", "databasename")`, but the string `servername;databasename` identifies a unique data source and allows using dedicated credentials for the database `databasename`.
```powerquery
MariaDB.Contents("servername;databasename")
```

Result: 
```powerquery
#table({"Name", "Description", "Data", "Kind"}, {
       {"airlines", null, #table(...), "Table"},
       {"airports", null, #table(...), "Table"},
       {"flights", null, #table(...), "Table"}
       })
```



