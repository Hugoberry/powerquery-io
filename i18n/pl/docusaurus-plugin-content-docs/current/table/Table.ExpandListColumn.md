---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Używając kolumny list w tabeli, tworzy kopię wiersza dla każdej wartości na liście.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Używając tabeli <code>table</code>, w której kolumna <code>column</code> to lista wartości, dzieli listę na wiersze odpowiadające każdej wartości. Wartości z innych kolumn są duplikowane w każdym nowo tworzonym wierszu.


## Examples

### Example #1 
Podziel kolumnę listy [Name] w tabeli.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
