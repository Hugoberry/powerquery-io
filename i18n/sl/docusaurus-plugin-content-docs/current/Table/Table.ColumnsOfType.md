---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Vrne seznam z imeni stolpcev, ki se ujemajo z navedenimi vrstami.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Vrne seznam z imeni stolpcev iz tabele <code>table</code>, ki se ujemajo z vrstami, navedenimi v <code>listOfTypes</code>.


## Examples

### Example #1 
Vrne imena stolpcev vrste &#34;Number.Type&#34; iz tabele.
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
