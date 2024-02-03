---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Azt jelzi, hogy az összes megadott rekord sorként szerepel-e a táblában.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Azt jelzi, hogy a(z) <code>rows</code> rekordlistában az összes megadott rekord sorként szerepel-e a(z) <code>table</code> táblában.    A választható <code>equationCriteria</code> paraméterrel határozható meg a tábla sorainak összehasonlítása.


## Examples

### Example #1 
Kizárólag a [CustomerID] oszlop összehasonlításával megállapítja, hogy a tábla tartalmazza-e az összes sort.
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
Megállapítja, hogy a tábla tartalmazza-e az összes sort.
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
