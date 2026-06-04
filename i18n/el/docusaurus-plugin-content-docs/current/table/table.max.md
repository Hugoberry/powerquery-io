---
title: Table.Max
---

# Table.Max


Επιστρέφει τη μεγαλύτερη γραμμή ή την προεπιλεγμένη τιμή χρησιμοποιώντας τα δεδομένα κριτήρια.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Επιστρέφει τη μεγαλύτερη γραμμή στο `table` χρησιμοποιώντας τη δεδομένη `comparisonCriteria`. Εάν ο πίνακας είναι κενός, επιστρέφεται η προαιρετική τιμή `default`.


## Examples

### Example #1
Βρείτε τη γραμμή με τη μεγαλύτερη τιμή στη στήλη \[a\] στον πίνακα `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
Βρείτε τη γραμμή με τη μεγαλύτερη τιμή στη στήλη \[a\] στον πίνακα `({})`. Εάν είναι κενή, επιστρέφεται η τιμή -1.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
