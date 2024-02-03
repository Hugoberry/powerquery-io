---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Vraća tabelu koja se sastoji samo od redova ulazne tabele koji sadrže grešku u najmanje jednoj ćeliji. Ako je navedena lista kolona, proverava se ispravnost samo ćelija u navedenim kolonama.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Vraća tabelu koja se sastoji samo od redova ulazne tabele koji sadrže grešku u najmanje jednoj ćeliji. Ako je navedena lista kolona, proverava se ispravnost samo ćelija u navedenim kolonama.


## Examples

### Example #1 
Izaberite imena klijenata koji imaju greške u svojim redovima.
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
