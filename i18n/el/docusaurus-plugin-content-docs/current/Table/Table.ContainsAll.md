---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Υποδεικνύει αν όλες οι καθορισμένες εγγραφές εμφανίζονται ως γραμμές στον πίνακα.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Υποδεικνύει αν όλες οι καθορισμένες εγγραφές στη λίστα εγγραφών <code>rows</code> εμφανίζονται ως γραμμές στον <code>table</code>.    Μπορεί να καθοριστεί μια προαιρετική παράμετρος <code>equationCriteria</code> για τον έλεγχο της σύγκρισης μεταξύ των γραμμών του πίνακα.


## Examples

### Example #1 
Προσδιορίζει αν ο πίνακας περιέχει όλες τις γραμμές, συγκρίνοντας μόνο τη στήλη [CustomerID].
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Προσδιορίζει αν ο πίνακας περιέχει όλες τις γραμμές.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
