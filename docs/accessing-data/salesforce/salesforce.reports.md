---
title: Salesforce.Reports
---

# Salesforce.Reports


Returns the reports from the Salesforce account.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Returns the reports on the Salesforce account provided in the credentials. The account will be connected through the provided environment `loginUrl`. If no environment is provided then the account will connect to production (https://login.salesforce.com). An optional record parameter, `options`, may be provided to specify additional properties. The record can contain the following fields:

-   `ApiVersion` : The Salesforce API version to use for this query. When not specified, API version 29.0 is used.
-   `Timeout` : A duration that controls how long to wait before abandoning the request to the server. The default value is source-specific.



## Category
Accessing data
