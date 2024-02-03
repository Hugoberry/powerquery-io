---
title: Table.MinN
---

# Table.MinN


## Description

Επιστρέφει τις μικρότερες γραμμές χρησιμοποιώντας τα δεδομένα κριτήρια.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Επιστρέφει τις μικρότερες γραμμές του <code>table</code> χρησιμοποιώντας τη δεδομένη <code>comparisonCriteria</code>. Μετά την ταξινόμηση των γραμμών, πρέπει να καθοριστεί η παράμετρος <code>countOrCondition</code> για περαιτέρω φιλτράρισμα του αποτελέσματος. Έχετε υπόψη ότι ο αλγόριθμος ταξινόμησης δεν μπορεί να εγγυηθεί ένα σταθερό ταξινομημένο αποτέλεσμα. Η παράμετρος <code>countOrCondition</code> μπορεί να λάβει πολλές μορφές:    <ul>        <li> Εάν καθοριστεί αριθμός, επιστρέφεται μια λίστα με έως <code>countOrCondition</code> στοιχεία σε αύξουσα σειρά. </li>        <li> Εάν καθοριστεί συνθήκη, επιστρέφεται μια λίστα με τα στοιχεία που ικανοποιούν αρχικά τη συνθήκη. Από τη στιγμή που ένα στοιχείο δεν ικανοποιεί τη συνθήκη, δεν εξετάζονται περαιτέρω στοιχεία. </li> </ul>


## Examples

### Example #1 
Βρίσκει τη γραμμή με τη μικρότερη τιμή στη στήλη [a] με τη συνθήκη [a] &lt; 3, στον πίνακα. Οι γραμμές ταξινομούνται πριν από την εφαρμογή του φίλτρου.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Βρίσκει τη γραμμή με τη μικρότερη τιμή στη στήλη [a] με τη συνθήκη [b] &lt; 0, στον πίνακα. Οι γραμμές ταξινομούνται πριν από την εφαρμογή του φίλτρου.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
