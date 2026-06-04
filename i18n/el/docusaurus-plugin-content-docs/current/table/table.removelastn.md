---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Επιστρέφει έναν πίνακα με καταργημένες τις τελευταίες Ν γραμμές.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Επιστρέφει έναν πίνακα που δεν περιέχει τις τελευταίες `countOrCondition` γραμμές του πίνακα `table`. Ο αριθμός των γραμμών που καταργούνται εξαρτάται από την προαιρετική παράμετρο `countOrCondition`.

-   Εάν παραλειφθεί η `countOrCondition`, καταργείται μόνο η τελευταία γραμμή.
-   Εάν η `countOrCondition` είναι αριθμός, θα καταργηθούν τόσες γραμμές (αρχίζοντας από κάτω).
-   Εάν η `countOrCondition` είναι συνθήκη, οι γραμμές που ικανοποιούν τη συνθήκη θα καταργηθούν έως ότου κάποια γραμμή δεν ικανοποιεί τη συνθήκη.


## Examples

### Example #1
Καταργεί την τελευταία γραμμή του πίνακα.
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
Καταργεί τις τελευταίες γραμμές όπου \[CustomerID\] > 2 του πίνακα.
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
