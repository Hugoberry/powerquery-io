---
title: Table.Group
---

# Table.Group


Ομαδοποιεί τις γραμμές του πίνακα που έχουν το ίδιο κλειδί.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Ομαδοποιεί τις γραμμές του `table` με βάση τις στήλες κλειδιού που ορίζονται από το `key`. Το `key` μπορεί να είναι ένα μεμονωμένο όνομα στήλης ή μια λίστα με ονόματα στηλών. Για κάθε ομάδα, δημιουργείται ένα αρχείο καταγραφής που περιέχει τις στήλες κλειδιού (και τις τιμές τους), καθώς και τυχόν συγκεντρωτικές στήλες που καθορίζονται από το `aggregatedColumns`. Προαιρετικά, τα `groupKind` και `comparer` μπορούν επίσης να προσδιοριστούν.  
  
Εάν τα δεδομένα έχουν ήδη ταξινομηθεί με βάση τις στήλες κλειδιού, τότε μπορεί να παρασχεθεί ένα `groupKind` του GroupKind.Local. Αυτό μπορεί να βελτιώσει τις επιδόσεις της ομαδοποίησης σε ορισμένες περιπτώσεις, αφού όλες οι γραμμές με δεδομένο σύνολο βασικών τιμών θεωρούνται συνεχόμενες.  
  
Όταν περνά ένα `comparer`, λάβετε υπόψη ότι εάν θεωρήσει τα διαφορετικά κλειδιά ως ίσα, μπορεί να τοποθετηθεί μια γραμμή σε μια ομάδα της οποίας τα κλειδιά διαφέρουν από τα δικά της.  
  
Αυτή η συνάρτηση δεν εγγυάται την ταξινόμηση των γραμμών που επιστρέφει.


## Examples

### Example #1
Ομαδοποιεί τον πίνακα προσθέτοντας μια συγκεντρωτική στήλη \[total\] η οποία περιέχει το άθροισμα των τιμών ("κάθε List.Sum(\[price\])").
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
