---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Vytvorí zoznam vnorených zoznamov hodnôt stĺpcov z tabuľky.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Vytvorí zoznam vnorených zoznamov z tabuľky <code>table</code>.  Každá položka zoznamu je vnútorným zoznamom, ktorý obsahuje hodnoty stĺpcov.


## Examples

### Example #1 
Vytvorte zoznam hodnôt stĺpcov z tabuľky.
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
