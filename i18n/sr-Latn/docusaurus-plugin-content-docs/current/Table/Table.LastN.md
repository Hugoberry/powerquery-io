---
title: Table.LastN
---

# Table.LastN


## Description

Vraća poslednji navedeni broj redova.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Vraća poslednje redove tabele <code>table</code>, u zavisnosti od vrednosti za <code>countOrCondition</code>:    <ul>    <li> Ako je <code>countOrCondition</code> broj, biće vraćeno toliko redova počev od položaja (kraj – <code>countOrCondition</code>). </li>    <li> Ako je <code>countOrCondition</code> uslov, po rastućem redosledu će biti vraćeni redovi koji zadovoljavaju uslov sve do reda koji ne zadovoljava uslov.</li></ul>


## Examples

### Example #1 
Pronalaženje poslednja dva reda iz tabele.
```powerquery
Table.LastN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Pronalaženje poslednjih redova pri čemu je [a] &gt; 0 u tabeli.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
