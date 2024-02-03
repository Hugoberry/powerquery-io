---
title: Type.TableRow
---

# Type.TableRow


## Description

Returns the row type of the table type.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Returns the row type of the specified table type. The result will always be a record type.


## Examples

### Example #1 
Return the row type information for a simple table.
```powerquery
let
    tableRowType = Type.TableRow(Value.Type(#table({"Column1"}, {})))
in
    Type.RecordFields(tableRowType)
```

Result: 
```powerquery
[Column1 = [Type = type any, Optional = false]]
```




## Category
Type
