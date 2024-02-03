---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Επιστρέφει τη θέση ή τις θέσεις της οποιασδήποτε από τις καθορισμένες γραμμές μέσα στον πίνακα.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

Επιστρέφει τις θέσεις των γραμμών από τη <code>table</code> της πρώτης εμφάνισης της λίστας των <code>rows</code>. Επιστρέφει -1 εάν δεν βρεθεί καμία εμφάνιση.    <ul>    <li><code>table</code>: Ο πίνακας εισόδου.</li>       <li><code>rows</code>:  Η λίστα με τις γραμμές του πίνακα των οποίων θα βρεθούν οι θέσεις.</li>       <li><code>occurrence</code>: <i>[Προαιρετική]</i> Καθορίζει ποιες εμφανίσεις της γραμμής θα επιστραφούν.</li>       <li><code>equationCriteria</code>: <i>[Προαιρετική]</i> Ελέγχει τη σύγκριση μεταξύ των γραμμών του πίνακα.</li>    </ul>    


## Examples

### Example #1 
Βρείτε τη θέση της πρώτης εμφάνισης της [a = 2, b = 4] ή της [a = 6, b = 8] στον πίνακα &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2 
Βρείτε τη θέση όλων των εμφανίσεων της [a = 2, b = 4] ή της [a = 6, b = 8] στον πίνακα &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
