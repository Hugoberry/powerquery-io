---
title: Table.LastN
---

# Table.LastN


## Description

Returnează ultimul număr de rânduri specificat.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Returnează ultimele rânduri din tabelul, <code>table</code>, în funcţie de valoarea <code>countOrCondition</code>:    <ul>    <li> Dacă <code>countOrCondition</code> este un număr, va fi returnat numărul respectiv de rânduri, începând de la poziţia (sfârşit - <code>countOrCondition</code>). </li>    <li> Dacă <code>countOrCondition</code> este o condiţie, rândurile care îndeplinesc condiţia vor fi returnate în poziţie crescătoare până când un rând nu îndeplineşte condiţia.</li></ul>


## Examples

### Example #1 
Găsiți ultimele două rânduri din tabel.
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
Găsiți ultimele rânduri în care [a] &gt; 0 în tabel.
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
