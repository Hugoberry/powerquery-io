---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Retorna una llista amb els noms de les columnes que coincideixen amb els tipus especificats.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Retorna una llista amb els noms de les columnes de la taula `table` que coincideixen amb els tipus especificats a `listOfTypes`.


## Examples

### Example #1
Retorna els noms de les columnes del tipus Number.Type de la taula.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
