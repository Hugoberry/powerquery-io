---
title: Type.TableRow
---

# Type.TableRow


## Description

Devolve o tipo de fila do tipo de táboa.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Devolve o tipo de fila do tipo de táboa especificado. O resultado sempre vai ser un tipo de rexistro.


## Examples

### Example #1 
Devolve a información do tipo de fila dunha táboa simple.
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
