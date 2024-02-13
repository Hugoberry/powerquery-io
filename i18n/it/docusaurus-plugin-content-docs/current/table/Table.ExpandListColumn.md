---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Data una colonna di elenchi in una tabella, creare una copia di una riga per ogni valore nell&#39;elenco.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Dato <code>table</code>, dove <code>column</code> è un elenco di valori, divide l'elenco in una riga per ogni valore. I valori delle altre colonne vengono duplicati in ogni nuova riga creata.


## Examples

### Example #1 
Dividere la colonna elenco [Name] nella tabella.
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
