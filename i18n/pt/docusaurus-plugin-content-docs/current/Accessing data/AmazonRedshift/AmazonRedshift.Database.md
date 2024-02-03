---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Import data from an Amazon Redshift database.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returns a table listing the tables on the Amazon Redshift cluster <code>server</code> in the database <code>database</code>.  An optional record parameter, <code>options</code>, may be specified to control the following options:<ul><li><code>Provider Name</code>: A text value to use as the Provider Name for the connection. This is used when using Microsoft Authentication.</li><li><code>Batch Size</code>: The number of rows that are fetched in a single call to the server.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



