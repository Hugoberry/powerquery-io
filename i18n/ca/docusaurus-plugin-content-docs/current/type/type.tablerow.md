---
title: Type.TableRow
---

# Type.TableRow


Retorna el tipus de fila del tipus de taula.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Remarks

Retorna el tipus de fila del tipus de taula especificat. El resultat sempre serà un tipus de registre.


## Examples

### Example #1
Retorna la informació del tipus de fila per a una taula simple.
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
