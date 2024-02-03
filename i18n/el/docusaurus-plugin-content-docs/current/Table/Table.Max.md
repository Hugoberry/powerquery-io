---
title: Table.Max
---

# Table.Max


## Description

Επιστρέφει τη μεγαλύτερη γραμμή ή την προεπιλεγμένη τιμή χρησιμοποιώντας τα δεδομένα κριτήρια.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Επιστρέφει τη μεγαλύτερη γραμμή στο <code>table</code> χρησιμοποιώντας τη δεδομένη <code>comparisonCriteria</code>. Εάν ο πίνακας είναι κενός, επιστρέφεται η προαιρετική τιμή <code>default</code>. 


## Examples

### Example #1 
Βρείτε τη γραμμή με τη μεγαλύτερη τιμή στη στήλη [a] στον πίνακα &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Βρείτε τη γραμμή με τη μεγαλύτερη τιμή στη στήλη [a] στον πίνακα &lt;code&gt;(\{})&lt;/code&gt;. Εάν είναι κενή, επιστρέφεται η τιμή -1.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
