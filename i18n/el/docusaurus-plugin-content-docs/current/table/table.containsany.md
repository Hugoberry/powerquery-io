---
title: Table.ContainsAny
---

# Table.ContainsAny


Υποδεικνύει αν κάποιες από τις καθορισμένες εγγραφές εμφανίζονται ως γραμμές στον πίνακα.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Υποδεικνύει αν κάποιες από τις καθορισμένες εγγραφές στη λίστα εγγραφών `rows` εμφανίζονται ως γραμμές στον `table`. Μπορεί να καθοριστεί μια προαιρετική παράμετρος `equationCriteria` για τον έλεγχο της σύγκρισης μεταξύ των γραμμών του πίνακα.


## Examples

### Example #1
Προσδιορίστε αν ο πίνακας `({[a = 1, b = 2], [a = 3, b = 4]})` περιέχει τις γραμμές `[a = 1, b = 2]` ή `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
Προσδιορίστε αν ο πίνακας `({[a = 1, b = 2], [a = 3, b = 4]})` περιέχει τις γραμμές `[a = 1, b = 3]` ή `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Προσδιορίστε αν ο πίνακας `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` περιέχει τις γραμμές `[a = 1, b = 3]` ή `[a = 3, b = 5]` συγκρίνοντας μόνο τη στήλη \[a\].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
