---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Vrne seznam z imeni stolpcev, ki se ujemajo z navedenimi vrstami.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Vrne seznam z imeni stolpcev iz tabele `table`, ki se ujemajo z vrstami, navedenimi v `listOfTypes`.


## Examples

### Example #1
Vrne imena stolpcev vrste"Number.Type"iz tabele.
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
