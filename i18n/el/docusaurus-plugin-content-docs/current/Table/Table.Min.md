---
title: Table.Min
---

# Table.Min


## Description

Επιστρέφει τη μικρότερη γραμμή ή μια προεπιλεγμένη τιμή χρησιμοποιώντας τα δεδομένα κριτήρια.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Επιστρέφει τη μικρότερη γραμμή του <code>table</code> χρησιμοποιώντας τη δεδομένη <code>comparisonCriteria</code>. Εάν ο πίνακας είναι κενός, επιστρέφεται η προαιρετική τιμή <code>default</code>.


## Examples

### Example #1 
Βρίσκει τη γραμμή με τη μικρότερη τιμή στη στήλη [a] στον πίνακα.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
Βρίσκει τη γραμμή με τη μικρότερη τιμή στη στήλη [a] στον πίνακα. Αν είναι κενή, επιστρέφεται η τιμή -1.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
