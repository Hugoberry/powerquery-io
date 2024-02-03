---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Υποβιβάζει τις κεφαλίδες στηλών στην πρώτη γραμμή τιμών.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Υποβιβάζει τις κεφαλίδες στηλών (δηλαδή τα ονόματα των στηλών) στην πρώτη γραμμή τιμών. Τα προεπιλεγμένα ονόματα στηλών είναι "Στήλη1", "Στήλη2" και ούτω καθεξής.


## Examples

### Example #1 
Υποβιβάζει την πρώτη γραμμή τιμών του πίνακα.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
