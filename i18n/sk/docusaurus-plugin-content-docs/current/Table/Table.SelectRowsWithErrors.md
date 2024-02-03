---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Vráti tabuľku iba s tými riadkami vstupnej tabuľky, ktoré obsahujú chybu aspoň v jednej z buniek. Ak je zadaný zoznam stĺpcov, výskyt chýb sa skontroluje iba v bunkách v zadaných stĺpcoch.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Vráti tabuľku iba s tými riadkami vstupnej tabuľky, ktoré obsahujú chybu aspoň v jednej z buniek. Ak je zadaný zoznam stĺpcov, výskyt chýb sa skontroluje iba v bunkách v zadaných stĺpcoch.


## Examples

### Example #1 
Vyberte mená zákazníkov s chybami v ich riadkoch.
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
