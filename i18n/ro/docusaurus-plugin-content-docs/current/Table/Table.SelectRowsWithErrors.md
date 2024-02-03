---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Returnează un tabel numai cu acele rânduri din tabelul de intrare care conţin o eroare în cel puţin una dintre celule. Dacă se specifică o listă de coloane, atunci numai celulele din coloanele specificate sunt verificate pentru erori.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Returnează un tabel numai cu acele rânduri din tabelul de intrare care conţin o eroare în cel puţin una dintre celule. Dacă se specifică o listă de coloane, atunci numai celulele din coloanele specificate sunt verificate pentru erori.


## Examples

### Example #1 
Selectați numele de clienți ce conțin erori în rândurile lor.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
