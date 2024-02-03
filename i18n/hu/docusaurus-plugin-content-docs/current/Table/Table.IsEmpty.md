---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Azt jelzi, hogy a tábla tartalmaz-e sorokat.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Azt jelzi, hogy a(z) <code>table</code> tábla tartalmaz-e sorokat. <code>true</code> értéket ad vissza, ha nincsenek sorok (pl. üres a tábla), egyébként <code>false</code> értéket ad.


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
Annak megállapítása, hogy üres-e a(z) &lt;code&gt;(\{})&lt;/code&gt; tábla.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
