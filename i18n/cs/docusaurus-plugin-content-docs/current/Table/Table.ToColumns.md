---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Vytvoří z tabulky seznam vnořených seznamů hodnot sloupců.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Vytvoří z tabulky <code>table</code> seznam vnořených seznamů.  Jednotlivé položky seznamu představují vnitřní seznam obsahující hodnoty sloupců.


## Examples

### Example #1 
Vytvoří z tabulky seznam hodnot sloupců.
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
