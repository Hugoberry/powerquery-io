---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Táblát ad vissza, amely csak a bemeneti tábla azon sorait tartalmazza, amelyekben hiba fordult elő legalább egy cellában. Ha oszloplista van megadva, csak a megadott oszlopok celláiban keres hibát.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Táblát ad vissza, amely csak a bemeneti tábla azon sorait tartalmazza, amelyekben hiba fordult elő legalább egy cellában. Ha oszloplista van megadva, csak a megadott oszlopok celláiban keres hibát.


## Examples

### Example #1 
Válassza ki azon ügyfelek nevét, akiknek a soraiban hiba található.
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
