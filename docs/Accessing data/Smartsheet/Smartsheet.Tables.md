---
title: Smartsheet.Tables
---

# Smartsheet.Tables


## Description

Returns a table of sheets, reports, folders, and workspaces from the Smartsheet API


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Details

Returns a nested table of available sheets, reports, folders, and workspaces from the Smartsheet API.


## Examples

### Example #1 
Returns sheets, folders, reports, and workspaces available at the top level of the Smartsheet hierarchy
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
A table of folders, reports, and workspaces from the top level of the Smartsheet hierarchy
```



