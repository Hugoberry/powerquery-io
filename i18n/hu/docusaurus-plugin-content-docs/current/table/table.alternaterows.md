---
title: Table.AlternateRows
---

# Table.AlternateRows


Megtartja a kezdeti eltolást, majd felváltva veszi és kihagyja a következő sorokat.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

Megtartja a kezdeti eltolást, majd felváltva veszi és kihagyja a következő sorokat.

-   `table`: A bemeneti tábla.
-   `offset`: A megtartandó sorok száma az iteráció megkezdése előtt.
-   `skip`: Az eltávolítandó sorok száma az egyes iterációs lépésekben.
-   `take`: A magtartandó sorok száma az egyes iterációs lépésekben.


## Examples

### Example #1
Visszaad egy olyan táblát a táblából, amely az első sornál kezdődik, majd kihagy 1 értéket, majd megtart 1 értéket.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
