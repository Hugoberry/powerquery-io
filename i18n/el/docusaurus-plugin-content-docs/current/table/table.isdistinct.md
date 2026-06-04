---
title: Table.IsDistinct
---

# Table.IsDistinct


Υποδεικνύει αν ο πίνακας περιέχει μόνο διακριτές γραμμές (όχι διπλότυπα).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Υποδεικνύει αν ο πίνακας `table` περιέχει μόνο διακριτές γραμμές (όχι διπλότυπα). Επιστρέφει τιμή `true`, αν οι γραμμές είναι διακριτές, διαφορετικά επιστρέφει τιμή `false`. Μια προαιρετική παράμετρος, `comparisonCriteria`, καθορίζει ποιες στήλες του πίνακα θα ελεγχθούν για διπλότυπα. Αν δεν καθοριστεί η `comparisonCriteria`, ελέγχονται όλες οι στήλες.


## Examples

### Example #1
Προσδιορίζει αν ο πίνακας είναι διακριτός.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2
Προσδιορίζει αν ο πίνακας είναι διακριτός στη στήλη.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
