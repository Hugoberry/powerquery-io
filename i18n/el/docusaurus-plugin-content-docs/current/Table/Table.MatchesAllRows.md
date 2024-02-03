---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

Υποδεικνύει αν όλες οι γραμμές του πίνακα ικανοποιούν τη δεδομένη συνθήκη.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

Υποδεικνύει αν όλες οι γραμμές του <code>table</code> ικανοποιούν τη δεδομένη <code>condition</code>. Επιστρέφει <code>true</code> εάν οι γραμμές συμφωνούν, διαφορετικά <code>false</code>.


## Examples

### Example #1 
Προσδιορίζει αν όλες οι τιμές γραμμής στη στήλη [a] είναι άρτιες στον πίνακα.
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
Βρείτε εάν όλες οι τιμές γραμμής είναι [a = 1, b = 2], στον πίνακα &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
