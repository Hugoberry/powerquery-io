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

Gibt einen Datensatz zurück, der die Felder eines Datensatzes <code>type</code> beschreibt. Jedes Feld des zurückgegebenen Datensatztyps weist einen entsprechenden Namen und Wert in der Form des Datensatzes <code>[ Type = type, Optional = logical ]</code> auf.


## Examples

### Example #1 
Suchen Sie den Namen und Wert des Datensatzes &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
