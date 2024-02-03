---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Εφαρμόζει μετασχηματισμούς τύπου της μορφής \{ column, type } χρησιμοποιώντας μια συγκεκριμένη κουλτούρα.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Επιστρέφει έναν πίνακα από την είσοδο <code>table</code> εφαρμόζοντας τη λειτουργία μετασχηματισμού στις στήλες που καθορίζονται στην παράμετρο <code>typeTransformations</code> (όπου η μορφή είναι \{ column name, type name}), χρησιμοποιώντας την καθορισμένη κουλτούρα της παραμέτρου <code>culture</code> (για παράδειγμα, "en-US").    Αν η στήλη δεν υπάρχει, παρουσιάζεται εξαίρεση.


## Examples

### Example #1 
Μετασχηματίστε τις αριθμητικές τιμές της στήλης [a] σε τιμές κειμένου από τον πίνακα &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
