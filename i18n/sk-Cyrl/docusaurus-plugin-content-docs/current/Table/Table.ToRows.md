---
title: Table.ToRows
---

# Table.ToRows


## Description

Vytvorí zoznam vnorených zoznamov hodnôt riadkov z tabuľky.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Vytvorí zoznam vnorených zoznamov z tabuľky <code>table</code>.  Každá položka zoznamu je vnútorným zoznamom, ktorý obsahuje hodnoty riadkov.


## Examples

### Example #1 
Vytvorte zoznam hodnôt riadkov z tabuľky.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
