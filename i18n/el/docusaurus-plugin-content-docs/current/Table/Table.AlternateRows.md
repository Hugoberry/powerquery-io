---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Διατηρεί την αρχική απόκλιση και στη συνέχεια κάνει εναλλαγή μεταξύ λήψης και παράλειψης των παρακάτω γραμμών.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

Διατηρεί την αρχική απόκλιση και στη συνέχεια κάνει εναλλαγή μεταξύ λήψης και παράλειψης των παρακάτω γραμμών.    <ul>       <li><code>table</code>: Ο πίνακας εισόδου.</li>       <li><code>offset</code>: Ο αριθμός των γραμμών που θα διατηρηθούν πριν από την έναρξη των επαναλήψεων.</li>       <li><code>skip</code>: Ο αριθμός των γραμμών που θα καταργούνται σε κάθε επανάληψη.</li>       <li><code>take</code>: Ο αριθμός των γραμμών που διατηρούνται σε κάθε επανάληψη.</li>    </ul>    


## Examples

### Example #1 
Δημιουργεί έναν πίνακα από τον πίνακα ο οποίος, ξεκινώντας από την πρώτη γραμμή, παραλείπει 1 τιμή και έπειτα διατηρεί 1 τιμή.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
