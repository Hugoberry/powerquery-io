---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Ustvari seznam ugnezdenih seznamov vrednosti stolpcev iz tabele.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Ustvari seznam ugnezdenih seznamov iz tabele, <code>table</code>.  Vsak element seznama je notranji seznam, ki vsebuje vrednosti stolpcev.


## Examples

### Example #1 
Ustvarite seznam z vrednostmi stolpcev iz tabele.
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
