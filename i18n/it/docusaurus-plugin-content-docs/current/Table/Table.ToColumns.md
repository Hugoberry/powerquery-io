---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Crea un elenco di elenchi annidati di valori di colonna da una tabella.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Crea un elenco di elenchi annidati dalla tabella <code>table</code>.  Ogni voce di elenco è un elenco interno contenente i valori di colonna.


## Examples

### Example #1 
Creare un elenco dei valori di colonna dalla tabella.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
