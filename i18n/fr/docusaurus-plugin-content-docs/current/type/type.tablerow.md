---
title: Type.TableRow
---

# Type.TableRow


Renvoie le type de ligne du type de table.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Remarks

Retourne le type de ligne du type de table spécifié. Le résultat sera toujours un type d’enregistrement.


## Examples

### Example #1 
Retourne les informations de type de ligne pour une table simple.
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
