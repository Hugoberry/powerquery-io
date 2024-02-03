---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Υποδεικνύει αν οποιαδήποτε από τις γραμμές του πίνακα ικανοποιεί τη δεδομένη συνθήκη.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Υποδεικνύει αν οποιαδήποτε από τις γραμμές του <code>table</code> ικανοποιούν τη δεδομένη <code>condition</code>. Επιστρέφει <code>true</code> εάν συμφωνεί οποιαδήποτε γραμμή, διαφορετικά <code>false</code>.


## Examples

### Example #1 
Προσδιορίστε αν οποιαδήποτε από τις τιμές γραμμής στη στήλη [a] είναι άρτια στον πίνακα &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Προσδιορίστε αν οποιαδήποτε από τις τιμές γραμμής είναι [a = 1, b = 2], στον πίνακα &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
