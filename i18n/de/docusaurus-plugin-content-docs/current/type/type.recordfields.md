---
title: Type.RecordFields
---

# Type.RecordFields


Gibt einen Datensatz zurück, der die Felder eines Datensatztyps beschreibt, wobei jedes Feld des zurückgegebenen Datensatztyps einen entsprechenden Namen und Wert aufweist.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Gibt einen Datensatz zurück, der die Felder eines Datensatzes `type` beschreibt. Jedes Feld des zurückgegebenen Datensatztyps weist einen entsprechenden Namen und Wert in der Form des Datensatzes `[ Type = type, Optional = logical ]` auf.


## Examples

### Example #1
Suchen Sie den Namen und Wert des Datensatzes `[ A = number, optional B = any]`.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
