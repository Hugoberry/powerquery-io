---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Returnează un tabel cu ultimele N rânduri eliminate.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Returnează un tabel care nu conține ultimele <code>countOrCondition</code> rânduri din tabelul <code>table</code>.        Numărul de rânduri eliminate depinde de parametrul opțional <code>countOrCondition</code>.    <ul>    <li> Dacă <code>countOrCondition</code> este omis, numai ultimul rând este eliminat. </li>    <li> Dacă <code>countOrCondition</code> este un număr, se va elimina numărul respectiv de rânduri (începând de la final). </li>    <li> Dacă <code>countOrCondition</code> este o condiție, rândurile care îndeplinesc condiția vor fi eliminate până când un rând nu îndeplinește condiția.</li>    </ul>


## Examples

### Example #1 
Eliminați ultimul rând al tabelului.
```powerquery
Table.RemoveLastN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Eliminați ultimele rânduri din tabel în care [IDClient] &gt; 2.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
