---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Enter the URL of the Azure Enterprise REST API endpoint associated with your enrollment


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Returns a list of reports and months available from the Azure Enterprise API


## Examples

### Example #1 
Using the AzureEnterprise.Tables function and navigate to a particular value to obtain the results.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Table
```



