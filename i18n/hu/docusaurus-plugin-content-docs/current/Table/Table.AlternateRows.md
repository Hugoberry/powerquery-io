---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

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


## Details

Megtartja a kezdeti eltolást, majd felváltva veszi és kihagyja a következő sorokat.    <ul>       <li><code>table</code>: A bemeneti tábla.</li>       <li><code>offset</code>: A megtartandó sorok száma az iteráció megkezdése előtt.</li>       <li><code>skip</code>: Az eltávolítandó sorok száma az egyes iterációs lépésekben.</li>       <li><code>take</code>: A magtartandó sorok száma az egyes iterációs lépésekben.</li>    </ul>    


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
