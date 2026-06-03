---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Returns a navigational table containing the tables found in the specified account from an Azure storage vault.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Returns a navigational table containing a row for each table found at the account URL, `account`, from an Azure storage vault. Each row contains a link to the azure table. An optional record parameter, `options`, may be provided to specify additional properties. The record can contain the following fields:

-   `Timeout` : A duration that controls how long to wait before abandoning the request to the server. The default value is source-specific.



## Category
Accessing data
