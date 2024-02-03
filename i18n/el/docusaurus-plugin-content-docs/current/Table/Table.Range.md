---
title: Table.Range
---

# Table.Range


## Description

Επιστρέφει τις γραμμές που ξεκινούν από την καθορισμένη απόκλιση.


## Syntax

```powerquery
Table.Range(
    table as table,
    offset as number,
    optional count as number
) as table
```


## Details

Επιστρέφει τις γραμμές από τον <code>table</code> που ξεκινούν από την καθορισμένη απόκλιση <code>offset</code>. Μια προαιρετική παράμετρος, <code>count</code>, καθορίζει πόσες γραμμές θα επιστραφούν. Από προεπιλογή, επιστρέφονται όλες οι γραμμές μετά την απόκλιση.


## Examples

### Example #1 
Επιστρέφει όλες τις γραμμές που ξεκινούν από την απόκλιση 1 στον πίνακα.
```powerquery
Table.Range(
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
Επιστρέφει τη μία γραμμή που ξεκινά από την απόκλιση 1 στον πίνακα.
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]})
```




## Category
Table.Row operations
