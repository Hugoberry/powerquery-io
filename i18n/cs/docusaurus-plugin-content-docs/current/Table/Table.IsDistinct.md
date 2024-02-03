---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Určuje, jestli tabulka obsahuje pouze jedinečné sloupce (žádné duplikáty).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Určuje, jestli tabulka <code>table</code> obsahuje pouze jedinečné sloupce (žádné duplikáty). Vrátí hodnotu <code>true</code>, pokud jsou řádky jedinečné, jinak vrátí hodnotu <code>false</code>.    Volitelný parametr <code>comparisonCriteria</code>, který určuje, u kterých sloupců tabulky je testována duplicita. Pokud parametr <code>comparisonCriteria</code> není zadán, jsou testovány všechny sloupce.


## Examples

### Example #1 
Určí, jestli je tabulka jedinečná.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
Určí, jestli je tabulka jedinečná ve sloupci.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
