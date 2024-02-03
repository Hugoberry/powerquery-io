---
title: Table.FirstN
---

# Table.FirstN


## Description

Returnează primele rânduri de numere specificate.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Returnează primele rânduri ale tabelului <code>table</code>, în funcţie de valoarea <code>countOrCondition</code>:    <ul>    <li> Dacă <code>countOrCondition</code> este un număr, va fi returnat numărul respectiv de rânduri (începând de sus). </li>    <li> Dacă <code>countOrCondition</code> este o condiţie, rândurile care îndeplinesc condiţia vor fi returnate până când un rând nu îndeplineşte condiţia.</li></ul>


## Examples

### Example #1 
Găsiți primele două rânduri din tabel.
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
Găsiți primele rânduri în care [a] &gt; 0 în tabel.
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
