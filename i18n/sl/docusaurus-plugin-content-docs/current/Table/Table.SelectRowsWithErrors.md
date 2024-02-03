---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Vrne tabelo z le tistimi vrsticami vhodne tabele, ki vsebujejo napako v vsaj eni celici. Če navedete seznam stolpcev, se preverijo morebitne napake le v celicah v navedenih stolpcih.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Vrne tabelo z le tistimi vrsticami vhodne tabele, ki vsebujejo napako v vsaj eni celici. Če navedete seznam stolpcev, se preverijo morebitne napake le v celicah v navedenih stolpcih.


## Examples

### Example #1 
Izberite imena strank z napakami v njihovih vrsticah.
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
