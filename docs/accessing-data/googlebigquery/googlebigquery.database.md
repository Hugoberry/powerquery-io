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

      Returns a table listing the available projects in Google BigQuery. An optional record parameter, <code>options</code>, may be specified to control the following options:      <ul>        <li><code>ConnectionTimeout</code>: A duration which controls how long to wait before abandoning an attempt to make a connection to the server. The default value is ODBC Connection Timeout value.</li>        <li><code>CommandTimeout</code>: A duration which controls how long the server-side query is allowed to run before it is canceled.</li>        <li><code>BillingProject</code>: Billing project id. The default value is the first available project.</li>        <li><code>UseStorageApi</code>: Specifies whether to use the BigQuery Storage API for large result sets. The default value is true to use Storage API. Set to false to not use Storage API</li>      </ul>    The record parameter is specified as [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
List the available projects in Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



