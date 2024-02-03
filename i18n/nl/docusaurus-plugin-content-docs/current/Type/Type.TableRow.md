---
title: Type.TableRow
---

# Type.TableRow


## Description

Retourneert het rijtype van het tabeltype.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Retourneert het rijtype van het opgegeven tabeltype. Het resultaat is altijd een recordtype.


## Examples

### Example #1 
De rijtypegegevens voor een eenvoudige tabel retourneren.
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
