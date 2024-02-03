---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Επιστρέφει τη θέση ή τις θέσεις της γραμμής μέσα στον πίνακα.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Details

Επιστρέφει τη θέση γραμμής της πρώτης εμφάνισης της <code>row</code> στην καθορισμένη <code>table</code>. Επιστρέφει -1 εάν δεν βρεθεί καμία εμφάνιση.    <ul>       <li><code>table</code>: Ο πίνακας εισόδου.</li>       <li><code>row</code>: Η γραμμή του πίνακα της οποίας θα βρεθεί η θέση.</li>       <li><code>occurrence</code>: <i>[Προαιρετική]</i> Καθορίζει ποιες εμφανίσεις της γραμμής θα επιστραφούν.</li>       <li><code>equationCriteria</code>: <i>[Προαιρετική]</i> Ελέγχει τη σύγκριση μεταξύ των γραμμών του πίνακα.</li>    </ul>    


## Examples

### Example #1 
Βρείτε τη θέση της πρώτης εμφάνισης της [a = 2, b = 4] στον πίνακα &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2 
Βρείτε τη θέση της δεύτερης εμφάνισης της [a = 2, b = 4] στον πίνακα &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3 
Βρείτε τη θέση όλων των εμφανίσεων της [a = 2, b = 4] στον πίνακα &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
