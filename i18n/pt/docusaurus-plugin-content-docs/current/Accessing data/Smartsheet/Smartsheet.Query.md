---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Returns a JSON result from the Smartsheet API


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Makes a call to the Smartsheet 2.0 REST API at the specified endpoint and returns results as a JSON record.


## Examples

### Example #1 
Pulls data from the sheets Smartsheet API endpoint with additional arguments specified
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
A table with sheets information as returned by the Smartsheet API
```



