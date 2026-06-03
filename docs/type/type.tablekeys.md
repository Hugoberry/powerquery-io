---
title: Type.TableKeys
---

# Type.TableKeys


Returns the possibly empty list of keys for the given table type.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Returns the possibly empty list of keys for the given table type.  
  
Each key is defined using a record in the following form:

-   `Columns`: a list of the column names that define the key
-   `Primary`: `true` if the key is the table's primary key; otherwise, `false`


## Examples

### Example #1
Return the key information for a table type.
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
