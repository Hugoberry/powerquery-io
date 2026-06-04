---
title: SmartsheetGlobal.Query
---

# SmartsheetGlobal.Query


Returns a JSON result from the Smartsheet API


## Syntax

```powerquery
SmartsheetGlobal.Query(
    region as text,
    endpoint as text,
    args as text,
    headers as record,
    optional options as record
) as any
```


## Remarks

Makes a call to the Smartsheet 2.0 REST API at the specified endpoint and returns results as a JSON record.


## Examples

### Example #1
Pulls data from the sheets Smartsheet API endpoint with additional arguments specified
```powerquery
Smartsheet.Query("US", "sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
A table with sheets information as returned by the Smartsheet API
```



