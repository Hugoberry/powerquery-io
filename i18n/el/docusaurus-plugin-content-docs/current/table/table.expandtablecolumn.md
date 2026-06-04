---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Αναπτύσσει μια στήλη εγγραφών ή μια στήλη πινάκων σε πολλαπλές στήλες στον πίνακα που τις περιέχει.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Αναπτύσσει πίνακες του `table`\[`column`\] σε πολλαπλές γραμμές και στήλες. Η `columnNames` χρησιμοποιείται για την επιλογή των στηλών για ανάπτυξη από τον εσωτερικό πίνακα. Καθορίστε την `newColumnNames` για να αποφύγετε διενέξεις μεταξύ υπαρχουσών στηλών και νέων στηλών.


## Examples

### Example #1
Αναπτύξτε στήλες πίνακα στη στήλη `[a]` του πίνακα `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` σε 3 στήλες `[t.a]`, `[t.b]` και `[t.c]`.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
