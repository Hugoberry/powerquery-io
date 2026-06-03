---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Import data from a Google BigQuery database using Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Returns a table listing the available projects in Google BigQuery using Microsoft Entra ID for `Billing Project ID` . An optional record parameter, `options`, may be specified to control the following options:

-   `ConnectionTimeout`: A duration which controls how long to wait before abandoning an attempt to make a connection to the server. The default value is ODBC Connection Timeout value.
-   `CommandTimeout`: A duration which controls how long the server-side query is allowed to run before it is canceled.
-   `UseStorageApi`: Specifies whether to use the BigQuery Storage API for large result sets. The default value is true to use Storage API. Set to false to not use Storage API
-   `AudienceUri`: This is the audience URI which the ODBC driver can use for its token exchange requests. This field must be a fully qualified URI (i.e. //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) where pool\_id is a globally-unique name to identify the workforce pool.

The record parameter is specified as \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
List the available projects in Google BigQuery using Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



