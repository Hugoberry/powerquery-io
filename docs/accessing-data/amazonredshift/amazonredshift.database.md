---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Import data from an Amazon Redshift database.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returns a table listing the tables on the Amazon Redshift cluster `server` in the database `database`. An optional record parameter, `options`, may be specified to control the following options:

-   `Provider Name`: A text value to use as the Provider Name for the connection. This is used when using Microsoft Authentication.
-   `Batch Size`: The number of rows that are fetched in a single call to the server.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



