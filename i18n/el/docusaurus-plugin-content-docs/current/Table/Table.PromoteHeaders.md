---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Προβιβάζει την πρώτη γραμμή τιμών σε νέες κεφαλίδες στηλών (δηλαδή ονόματα στηλών).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Προβιβάζει την πρώτη γραμμή τιμών σε νέες κεφαλίδες στηλών (δηλαδή ονόματα στηλών). Από προεπιλογή, μόνο οι τιμές κειμένου ή αριθμών προβιβάζονται σε κεφαλίδες. Έγκυρες επιλογές:    <div>      <code>PromoteAllScalars</code> : Εάν έχει οριστεί σε <code>true</code>, τότε όλες οι ανυσματικές τιμές στην πρώτη γραμμή προβιβάζονται σε κεφαλίδες χρησιμοποιώντας τη συνάρτηση <code>Culture</code>, εάν καθορίζεται (ή τις τοπικές ρυθμίσεις του τρέχοντος εγγράφου).    Για τις τιμές που δεν μπορούν να μετατραπούν σε κείμενο, θα χρησιμοποιηθεί ένα προεπιλεγμένο όνομα στήλης.    </div>    <div>    <code>Culture</code> : Ένα όνομα κουλτούρας που καθορίζει την κουλτούρα για τα δεδομένα.    </div>  


## Examples

### Example #1 
Προβιβάζει την πρώτη γραμμή τιμών του πίνακα.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
Προβιβασμός όλων των ανυσματικών τιμών στην πρώτη γραμμή του πίνακα σε κεφαλίδες.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
