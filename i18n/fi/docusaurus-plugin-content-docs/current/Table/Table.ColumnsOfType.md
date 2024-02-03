---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Palauttaa luettelon niiden sarakkeiden nimiä, jotka vastaavat määritettyjä tyyppejä.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Palauttaa luettelon, joka sisältää taulukon <code>table</code> kohteessa <code>listOfTypes</code> määritettyjä tyyppejä vastaavien sarakkeiden nimiä.


## Examples

### Example #1 
Palauttaa tyyppiä Number.Type olevien sarakkeiden nimet taulukosta.
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
