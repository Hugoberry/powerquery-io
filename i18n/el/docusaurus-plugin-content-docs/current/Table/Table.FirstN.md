---
title: Table.FirstN
---

# Table.FirstN


## Description

Επιστρέφει το πρώτο πλήθος γραμμών που καθορίστηκε.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Επιστρέφει τις πρώτες γραμμές του πίνακα <code>table</code>, ανάλογα με την τιμή του <code>countOrCondition</code>:    <ul>    <li> Εάν το <code>countOrCondition</code> είναι αριθμός, θα επιστραφούν τόσες γραμμές (αρχίζοντας από επάνω). </li>    <li> Εάν το <code>countOrCondition</code> είναι συνθήκη, οι γραμμές που ικανοποιούν τη συνθήκη θα επιστρέφονται έως ότου κάποια γραμμή δεν ικανοποιεί τη συνθήκη.</li></ul>


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
Βρίσκει τις πρώτες γραμμές όπου [a] &gt; 0 στον πίνακα.
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
