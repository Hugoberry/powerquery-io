---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Vrátí tabulku se sloupci v zadaném pořadí.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Vrátí tabulku ze vstupu `table` se sloupci v pořadí určeném hodnotou `columnOrder`. Pořadí sloupců, které nejsou v seznamu uvedeny, nebude změněno. Pokud sloupec neexistuje, je vyvolána chyba, jestliže volitelný parametr `missingField` neurčí alternativu (např. `MissingField.UseNull` nebo `MissingField.Ignore`).


## Examples

### Example #1
Zamění v tabulce pořadí sloupců \[Phone\] a \[Name\] .
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
Zamění v tabulce pořadí sloupců \[Phone\] a \[Address\] nebo použije vlastnost MissingField.Ignore. Tabulku nezmění, protože sloupec \[Address\] neexistuje.
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
