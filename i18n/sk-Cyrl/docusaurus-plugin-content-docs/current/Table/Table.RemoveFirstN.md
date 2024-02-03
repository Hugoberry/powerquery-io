---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Vráti tabuľku s vynechaným počtom prvých riadkov.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Vráti tabuľku, ktorá neobsahuje zadaný počet prvých riadkov <code>countOrCondition</code> tabuľky <code>table</code>.    Počet odstránených riadkov závisí od voliteľného parametra <code>countOrCondition</code>.    <ul>    <li> Ak sa parameter <code>countOrCondition</code> vynechá, odstráni sa iba prvý riadok. </li>    <li> Ak <code>countOrCondition</code> je číslo, odstráni sa taký počet riadkov (počnúc navrchu). </li>    <li> Ak <code>countOrCondition</code> je podmienka, odstránia sa riadky spĺňajúce túto podmienku, až kým niektorý riadok podmienku nesplní.</li>    </ul>


## Examples

### Example #1 
Odstráňte prvý riadok tabuľky.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Odstráňte prvé dva riadky tabuľky.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
Odstráňte prvé riadky tabuľky, kde [CustomerID] &lt;=2.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
