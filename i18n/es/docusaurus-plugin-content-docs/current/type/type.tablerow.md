---
title: Type.TableRow
---

# Type.TableRow


Devuelve el tipo de fila del tipo de tabla.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Remarks

Devuelve el tipo de fila del tipo de tabla especificado. El resultado siempre será un tipo de registro.


## Examples

### Example #1 
Devuelve la información de tipo de fila de una tabla simple.
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
