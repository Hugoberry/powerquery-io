---
title: SmartsheetGlobal.Contents
---

# SmartsheetGlobal.Contents


Returns a table of sheets, reports, folders, and workspaces from the Smartsheet API


## Syntax

```powerquery
SmartsheetGlobal.Contents(
    region as text,
    optional options as record
) as table
```


## Remarks

Returns a nested table of available sheets, reports, folders, and workspaces from the Smartsheet API.


## Examples

### Example #1
Returns sheets, folders, reports, and workspaces available at the top level of the Smartsheet hierarchy
```powerquery
SmartsheetGlobal.Contents("US")
```

Result: 
```powerquery
A table of folders, reports, and workspaces from the top level of the Smartsheet hierarchy
```



