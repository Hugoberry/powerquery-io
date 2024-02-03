---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Returnează un tabel cu primele rânduri de numere ignorate.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Returnează un tabel care nu conține primul număr de rânduri specificat <code>countOrCondition</code>, din tabelul <code>table</code>.    Numărul de rânduri eliminat depinde de parametrul opțional <code>countOrCondition</code>.    <ul>    <li> Dacă <code>countOrCondition</code> este omis, numai primul rând este eliminat. </li>    <li> Dacă <code>countOrCondition</code> este un număr, vor fi eliminate numărul respectiv de rânduri (începând de sus). </li>    <li> Dacă <code>countOrCondition</code> este o condiție, rândurile care îndeplinesc condiția vor fi eliminate până când un rând nu îndeplinește condiția.</li>    </ul>


## Examples

### Example #1 
Eliminați primul rând din tabel.
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
Eliminați primele două rânduri din tabel.
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
Eliminați primele rânduri din tabel în care [IDClient] &lt;=2.
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
