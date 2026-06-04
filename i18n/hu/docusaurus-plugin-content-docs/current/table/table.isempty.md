---
title: Table.IsEmpty
---

# Table.IsEmpty


Azt jelzi, hogy a tábla tartalmaz-e sorokat.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Azt jelzi, hogy a(z) `table` tábla tartalmaz-e sorokat. `true` értéket ad vissza, ha nincsenek sorok (pl. üres a tábla), egyébként `false` értéket ad.


## Examples

### Example #1
Megállapítja, hogy a tábla üres-e.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2
Annak megállapítása, hogy üres-e a(z) `({})` tábla.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
