---
title: Table.Range
---

# Table.Range


## Description

Returnează rândurile care încep la decalajul specificat.


## Syntax

```powerquery
Table.Range(
    table as table,
    offset as number,
    optional count as number
) as table
```


## Details

Returnează rândurile din <code>table</code> care încep de la <code>offset</code> specificat. Un parametru opţional, <code>count</code>, specifică numărul de rânduri de returnat. În mod implicit, sunt returnate toate rândurile după decalaj.


## Examples

### Example #1 
Returnați toate rândurile care încep de la decalajul 1 din tabel.
```powerquery
Table.Range(
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
Returnați rândul care începe de la decalajul 1 din tabel.
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]})
```




## Category
Table.Row operations
