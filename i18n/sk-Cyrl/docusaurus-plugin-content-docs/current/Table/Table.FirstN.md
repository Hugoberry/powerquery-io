---
title: Table.FirstN
---

# Table.FirstN


## Description

Vráti prvý počet zadaných riadkov.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Vráti prvé riadky tabuľky <code>table</code> v závislosti od hodnoty <code>countOrCondition</code>:    <ul>    <li> Ak <code>countOrCondition</code> je číslo, vráti sa taký počet riadkov (počnúc navrchu). </li>    <li> Ak <code>countOrCondition</code> je podmienka, vrátia sa riadky spĺňajúce túto podmienku, až kým niektorý riadok podmienku nesplní.</li></ul>


## Examples

### Example #1 
Nájdite prvé dva riadky tabuľky.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Nájdite v tabuľke prvé riadky, kde [a] &gt; 0.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
