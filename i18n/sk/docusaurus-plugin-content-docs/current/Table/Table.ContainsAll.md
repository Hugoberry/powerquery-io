---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Udáva, či sa všetky zadané záznamy zobrazujú ako riadky v tabuľke.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Udáva, či sa všetky zadané záznamy v zozname záznamov <code>rows</code> zobrazujú ako riadky v tabuľke <code>table</code>.    Možno stanoviť voliteľný parameter <code>equationCriteria</code> a kontrolovať tak porovnanie medzi riadkami tabuľky.


## Examples

### Example #1 
Porovnaním so stĺpcom [CustomerID] určite, či tabuľka obsahuje všetky riadky.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Určte, či tabuľka obsahuje všetky riadky.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
