---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Υποδεικνύει αν όλες οι γραμμές του πίνακα ικανοποιούν τη δεδομένη συνθήκη.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Υποδεικνύει αν όλες οι γραμμές του `table` ικανοποιούν τη δεδομένη `condition`. Επιστρέφει `true` εάν οι γραμμές συμφωνούν, διαφορετικά `false`.


## Examples

### Example #1
Προσδιορίζει αν όλες οι τιμές γραμμής στη στήλη \[a\] είναι άρτιες στον πίνακα.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2
Βρείτε εάν όλες οι τιμές γραμμής είναι \[a = 1, b = 2\], στον πίνακα `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
