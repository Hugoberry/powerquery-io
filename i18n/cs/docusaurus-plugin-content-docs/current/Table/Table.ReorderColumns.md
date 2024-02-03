---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Vrátí tabulku se sloupci v zadaném pořadí.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Vrátí tabulku ze vstupu <code>table</code> se sloupci v pořadí určeném hodnotou <code>columnOrder</code>. Pořadí sloupců, které nejsou v seznamu uvedeny, nebude změněno.     Pokud sloupec neexistuje, je vržena výjimka, jestliže volitelný parametr <code>missingField</code> neurčí alternativu (např. <code>MissingField.UseNull</code> nebo <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Zamění v tabulce pořadí sloupců [Phone] a [Name] .
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Zamění v tabulce pořadí sloupců [Phone] a [Address] nebo použije vlastnost MissingField.Ignore. Tabulku nezmění, protože sloupec [Address] neexistuje.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
