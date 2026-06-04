---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Αναπτύσσει μια στήλη εγγραφών σε στήλες με κάθε μία από τις τιμές.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Με δεδομένη την `column` των εγγραφών στη `table` εισόδου, δημιουργεί έναν πίνακα με μια στήλη για κάθε πεδίο στην εγγραφή. Προαιρετικά, μπορεί να καθοριστεί η `newColumnNames` για να εξασφαλίσει μοναδικά ονόματα για τις στήλες στο νέο πίνακα.

-   `table`: Ο αρχικός πίνακας με τη στήλη εγγραφών για ανάπτυξη.
-   `column`: Η στήλη για ανάπτυξη.
-   `fieldNames`: Η λίστα με τα πεδία για ανάπτυξη σε στήλες στον πίνακα.
-   `newColumnNames`: Η λίστα με τα ονόματα των στηλών που θα δοθούν στις νέες στήλες. Τα νέα ονόματα στηλών δεν είναι δυνατό να είναι διπλότυπα οποιασδήποτε στήλης στο νέο πίνακα.


## Examples

### Example #1
Αναπτύξτε τη στήλη \[a\] του πίνακα `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` σε 3 στήλες "aa", "bb" και "cc".
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
