---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Επιστρέφει μια λίστα με τα ονόματα των στηλών που συμφωνούν με τους καθορισμένους τύπους.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Επιστρέφει μια λίστα με τα ονόματα των στηλών από τον πίνακα <code>table</code> που συμφωνούν με τους τύπους που καθορίζονται στο <code>listOfTypes</code>.


## Examples

### Example #1 
Επιστρέφει τα ονόματα των στηλών τύπου Number.Type από τον πίνακα.
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
