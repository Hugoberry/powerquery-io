---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Μετασχηματίζει τις τιμές μίας ή περισσότερων στηλών.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Details

Μετασχηματίζει <code>table</code> εφαρμόζοντας κάθε λειτουργία στήλης που αναφέρεται στο <code>transformOperations</code> (όπου η μορφή είναι \{ column name, transformation } ή \{ column name, transformation, new column type }). Εάν καθοριστεί μια <code>defaultTransformation</code>, θα εφαρμοστεί σε όλες τις στήλες που δεν αναφέρονται στο <code>transformOperations</code>. Εάν μια στήλη που αναφέρεται στο <code>transformOperations</code> δεν υπάρχει, δημιουργείται μια εξαίρεση, εκτός εάν η προαιρετική παράμετρος <code>missingField</code> καθορίζει μια εναλλακτική (για παράδειγμα, <code>MissingField.UseNull</code> ή <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Μετατρέψτε τις τιμές κειμένου στη στήλη [A] σε τιμές αριθμού και τις τιμές αριθμού στη στήλη [B] σε τιμές κειμένου.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
Μετατρέψτε τις αριθμητικές τιμές στη στήλη [X] που λείπει σε τιμές κειμένου, αγνοώντας τις στήλες που δεν υπάρχουν.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
Μετατρέψτε τις αριθμητικές τιμές στη στήλη [X] που λείπει σε τιμές κειμένου, με προεπιλογή null σε στήλες που δεν υπάρχουν.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
Αυξήστε τις αριθμητικές τιμές στη στήλη [B] και μετατρέψτε τις σε τιμές κειμένου και μετατρέψτε όλες τις άλλες στήλες σε αριθμούς.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
