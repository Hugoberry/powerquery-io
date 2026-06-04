---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Υποδεικνύει αν οποιαδήποτε από τις γραμμές του πίνακα ικανοποιεί τη δεδομένη συνθήκη.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Υποδεικνύει αν οποιαδήποτε από τις γραμμές του `table` ικανοποιούν τη δεδομένη `condition`. Επιστρέφει `true` εάν συμφωνεί οποιαδήποτε γραμμή, διαφορετικά `false`.


## Examples

### Example #1
Προσδιορίστε αν οποιαδήποτε από τις τιμές γραμμής στη στήλη \[a\] είναι άρτια στον πίνακα `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2
Προσδιορίστε αν οποιαδήποτε από τις τιμές γραμμής είναι \[a = 1, b = 2\], στον πίνακα `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
