---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Με βάση μια στήλη λιστών σε έναν πίνακα, δημιουργήστε ένα αντίγραφο μιας γραμμής για κάθε τιμή της λίστας.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Με δεδομένο ένα `table` όπου `column` περιέχει μια λίστα τιμών, διαιρεί τη λίστα σε μια γραμμή για κάθε τιμή. Οι τιμές στις άλλες στήλες είναι διπλότυπες σε κάθε νέα γραμμή που δημιουργείται. Αυτή η συνάρτηση μπορεί επίσης να επεκτείνει τους ένθετες πίνακες, αντιμετωπίζοντας τους ως λίστες εγγραφών.


## Examples

### Example #1
Διαιρέστε τη στήλη λίστας \[Name\].
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```


### Example #2
Διαιρέστε τη στήλη ένθετων πινάκων \[Components\].
```powerquery
Table.ExpandListColumn(
    #table(
        {"Part", "Components"},
        {
            {"Tool", #table({"Name", "Quantity"}, {{"Thingamajig", 2}, {"Widget", 3}})}
        }
    ),
    "Components"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Part = "Tool", Components = [Name = "Thingamajig", Quantity = 2]],
    [Part = "Tool", Components = [Name = "Widget", Quantity = 3]]
})
```




## Category
Table.Transformation
