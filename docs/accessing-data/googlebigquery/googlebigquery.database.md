---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Import data from a Google BigQuery database.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Returns a table listing the available projects in Google BigQuery. An optional record parameter, `options`, may be specified to control the following options:

-   `ConnectionTimeout`: A duration which controls how long to wait before abandoning an attempt to make a connection to the server. The default value is ODBC Connection Timeout value.
-   `CommandTimeout`: A duration which controls how long the server-side query is allowed to run before it is canceled.
-   `BillingProject`: Billing project id. The default value is the first available project.
-   `UseStorageApi`: Specifies whether to use the BigQuery Storage API for large result sets. The default value is true to use Storage API. Set to false to not use Storage API

The record parameter is specified as \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
List the available projects in Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



