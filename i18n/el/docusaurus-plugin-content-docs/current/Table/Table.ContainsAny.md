---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Υποδεικνύει αν κάποιες από τις καθορισμένες εγγραφές εμφανίζονται ως γραμμές στον πίνακα.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Υποδεικνύει αν κάποιες από τις καθορισμένες εγγραφές στη λίστα εγγραφών <code>rows</code> εμφανίζονται ως γραμμές στον <code>table</code>.    Μπορεί να καθοριστεί μια προαιρετική παράμετρος <code>equationCriteria</code> για τον έλεγχο της σύγκρισης μεταξύ των γραμμών του πίνακα.


## Examples

### Example #1 
Προσδιορίστε αν ο πίνακας &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; περιέχει τις γραμμές &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; ή &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Προσδιορίστε αν ο πίνακας &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; περιέχει τις γραμμές &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ή &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Προσδιορίστε αν ο πίνακας &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; περιέχει τις γραμμές &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ή &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; συγκρίνοντας μόνο τη στήλη [a].
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
