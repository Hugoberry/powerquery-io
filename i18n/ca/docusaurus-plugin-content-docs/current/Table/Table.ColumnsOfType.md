---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Retorna una llista amb els noms de les columnes que coincideixen amb els tipus especificats.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Retorna una llista amb els noms de les columnes de la taula <code>table</code> que coincideixen amb els tipus especificats a <code>listOfTypes</code>.


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
