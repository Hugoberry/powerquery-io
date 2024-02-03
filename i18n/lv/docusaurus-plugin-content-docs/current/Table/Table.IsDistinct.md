---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Norāda, vai tabulā ir ietvertas tikai atšķirīgas rindas (nevis dublikāti).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Norāda, vai <code>table</code> ietver tikai atšķirīgas rindas (nevis dublikātus). Tiek atgriezta vērtība <code>true</code>, ja rindas ir atšķirīgas; pretējā gadījumā tiek atgriezta vērtība <code>false</code>.    Izmantojot papildu parametru <code>comparisonCriteria</code>, tiek norādīts, kuras tabulas kolonnas tiek pārbaudītas, lai noteiktu dublikātus. Ja parametrs <code>comparisonCriteria</code> nav norādīts, tiek pārbaudītas visas kolonnas.


## Examples

### Example #1 
Nosakiet, vai tabula ir atšķirīga.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
Nosakiet, vai tabula ir atšķirīga kolonnā.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
