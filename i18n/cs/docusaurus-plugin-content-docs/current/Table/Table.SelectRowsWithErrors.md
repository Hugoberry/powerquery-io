---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Vrátí tabulku pouze s řádky vstupní tabulky, které obsahují alespoň v jedné buňce chybu. Pokud je zadán seznam sloupců, jsou zjišťovány chyby pouze v buňkách v zadaných sloupcích.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Vrátí tabulku pouze s řádky vstupní tabulky, které obsahují alespoň v jedné buňce chybu. Pokud je zadán seznam sloupců, jsou zjišťovány chyby pouze v buňkách v zadaných sloupcích.


## Examples

### Example #1 
Vybere jména zákazníků, která v řádcích obsahují chyby.
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
