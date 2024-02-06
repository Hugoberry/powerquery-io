---
title: Smartsheet.Content
---

# Smartsheet.Content


Returns a table of data from an Smartsheet index endpoint.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Remarks

Makes a call to the Smartsheet 2.0 REST API at the specified endpoint and transforms the data element returned into a table.


## Examples

### Example #1 
Pulls a table of users information from the Smartsheet API
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
A table with users information as returned by the Smartsheet API
```



