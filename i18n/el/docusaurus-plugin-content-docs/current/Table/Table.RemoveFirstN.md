---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Επιστρέφει έναν πίνακα από όπου έχουν παραλειφθεί οι γραμμές πρώτης μέτρησης.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Επιστρέφει έναν πίνακα που δεν περιέχει τον πρώτο καθορισμένο αριθμό γραμμών, <code>countOrCondition</code>, του πίνακα <code>table</code>.    Ο αριθμός των γραμμών που καταργούνται εξαρτάται από την προαιρετική παράμετρο <code>countOrCondition</code>.    <ul>    <li> Εάν παραλειφθεί η <code>countOrCondition</code>, καταργείται μόνο η πρώτη γραμμή. </li>    <li> Εάν η <code>countOrCondition</code> είναι αριθμός, θα καταργηθούν τόσες γραμμές (αρχίζοντας από επάνω). </li>    <li> Εάν η <code>countOrCondition</code> είναι συνθήκη, οι γραμμές που ικανοποιούν τη συνθήκη θα καταργηθούν έως ότου κάποια γραμμή δεν ικανοποιεί τη συνθήκη.</li>    </ul>


## Examples

### Example #1 
Καταργεί την πρώτη γραμμή του πίνακα.
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
Καταργεί τις πρώτες δύο γραμμές του πίνακα.
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
Καταργεί τις πρώτες γραμμές όπου [CustomerID] &lt;=2 του πίνακα.
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
