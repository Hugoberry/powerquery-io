---
title: Table.FirstN
---

# Table.FirstN


Επιστρέφει το πρώτο πλήθος γραμμών που καθορίστηκε.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Επιστρέφει τις πρώτες γραμμές του πίνακα `table`, ανάλογα με την τιμή του `countOrCondition`:

-   Εάν το `countOrCondition` είναι αριθμός, θα επιστραφούν τόσες γραμμές (αρχίζοντας από επάνω).
-   Εάν το `countOrCondition` είναι συνθήκη, οι γραμμές που ικανοποιούν τη συνθήκη θα επιστρέφονται έως ότου κάποια γραμμή δεν ικανοποιεί τη συνθήκη.


## Examples

### Example #1
Βρίσκει τις πρώτες δύο γραμμές του πίνακα.
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
Βρίσκει τις πρώτες γραμμές όπου \[a\] > 0 στον πίνακα.
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
