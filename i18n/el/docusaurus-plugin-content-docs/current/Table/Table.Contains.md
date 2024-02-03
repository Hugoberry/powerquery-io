---
title: Table.Contains
---

# Table.Contains


## Description

Υποδεικνύει αν η καθορισμένη εγγραφή εμφανίζεται ως γραμμή στον πίνακα.


## Syntax

```powerquery
Table.Contains(
    table as table,
    row as record,
    optional equationCriteria as any
) as logical
```


## Details

Υποδεικνύει αν η καθορισμένη εγγραφή, <code>row</code>, εμφανίζεται ως γραμμή στον <code>table</code>.    Μπορεί να καθοριστεί μια προαιρετική παράμετρος <code>equationCriteria</code> για τον έλεγχο της σύγκρισης μεταξύ των γραμμών του πίνακα.


## Examples

### Example #1 
Προσδιορίζει αν ο πίνακας περιέχει τη γραμμή.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Bob"]
)
```

Result: 
```powerquery
true
```


### Example #2 
Προσδιορίζει αν ο πίνακας περιέχει τη γραμμή.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Ted"]
)
```

Result: 
```powerquery
false
```


### Example #3 
Προσδιορίζει αν ο πίνακας περιέχει τη γραμμή συγκρίνοντας μόνο τη στήλη [Name].
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [CustomerID = 4, Name = "Bob"],
    "Name"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
