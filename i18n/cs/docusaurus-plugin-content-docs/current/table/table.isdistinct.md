---
title: Table.IsDistinct
---

# Table.IsDistinct


Určuje, jestli tabulka obsahuje pouze jedinečné sloupce (žádné duplikáty).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Určuje, jestli tabulka `table` obsahuje pouze jedinečné sloupce (žádné duplikáty). Vrátí hodnotu `true`, pokud jsou řádky jedinečné, jinak vrátí hodnotu `false`. Volitelný parametr `comparisonCriteria`, který určuje, u kterých sloupců tabulky je testována duplicita. Pokud parametr `comparisonCriteria` není zadán, jsou testovány všechny sloupce.


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
