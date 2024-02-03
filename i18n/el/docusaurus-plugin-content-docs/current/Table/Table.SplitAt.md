---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Επιστρέφει μια λίστα που περιέχει τις καθορισμένες πρώτες γραμμές καθώς και τις υπολειπόμενες.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Επιστρέφει μια λίστα που περιέχει δύο πίνακες: έναν πίνακα με τις πρώτες N σειρές <code>table</code> (όπως καθορίζεται από το <code>count</code>) και έναν πίνακα που περιέχει τις υπολειπόμενες σειρές <code>table</code>.Εάν οι πίνακες της λίστας που προκύπτει απαριθμούνται ακριβώς μία φορά και κατά σειρά, η συνάρτηση θα απαριθμεί το <code>table</code> μόνο μία φορά.


## Examples

### Example #1 
Επιστροφή των πρώτων δύο γραμμών του πίνακα και των υπολειπόμενων γραμμών του πίνακα.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
