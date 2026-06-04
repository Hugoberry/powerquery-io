---
title: Table.LastN
---

# Table.LastN


Επιστρέφει τον τελευταίο καθορισμένο αριθμό γραμμών.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Επιστρέφει τις τελευταίες γραμμές από τον πίνακα `table`, ανάλογα με την τιμή του `countOrCondition`:

-   Εάν το `countOrCondition` είναι αριθμός, θα επιστραφούν τόσες γραμμές αρχίζοντας από τη θέση (τέλος - `countOrCondition`).
-   Εάν το `countOrCondition` είναι συνθήκη, οι γραμμές που ικανοποιούν τη συνθήκη θα επιστρέφονται σε αύξουσα θέση έως ότου κάποια γραμμή δεν ικανοποιεί τη συνθήκη.


## Examples

### Example #1
Βρίσκει τις τελευταίες δύο γραμμές του πίνακα.
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
Βρίσκει τις τελευταίες γραμμές, όπου \[a\] > 0 στον πίνακα.
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
