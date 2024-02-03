---
title: Table.Group
---

# Table.Group


## Description

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


## Details

Ομαδοποιεί τις γραμμές του <code>table</code> με βάση τις στήλες κλειδιού που ορίζονται από το <code>key</code>. Το <code>key</code> μπορεί να είναι ένα μεμονωμένο όνομα στήλης ή μια λίστα με ονόματα στηλών. Για κάθε ομάδα, δημιουργείται ένα αρχείο καταγραφής που περιέχει τις στήλες κλειδιού (και τις τιμές τους), καθώς και τυχόν συγκεντρωτικές στήλες που καθορίζονται από το <code>aggregatedColumns</code>. Προαιρετικά, τα <code>groupKind</code> και <code>comparer</code> μπορούν επίσης να προσδιοριστούν.<br />    <br />    Εάν τα δεδομένα έχουν ήδη ταξινομηθεί με βάση τις στήλες κλειδιού, τότε μπορεί να παρασχεθεί ένα <code>groupKind</code> του GroupKind.Local. Αυτό μπορεί να βελτιώσει τις επιδόσεις της ομαδοποίησης σε ορισμένες περιπτώσεις, αφού όλες οι γραμμές με δεδομένο σύνολο βασικών τιμών θεωρούνται συνεχόμενες.<br />    <br />    Όταν περνά ένα <code>comparer</code>, λάβετε υπόψη ότι εάν θεωρήσει τα διαφορετικά κλειδιά ως ίσα, μπορεί να τοποθετηθεί μια γραμμή σε μια ομάδα της οποίας τα κλειδιά διαφέρουν από τα δικά της.<br />    <br />    Αυτή η συνάρτηση δεν εγγυάται την ταξινόμηση των γραμμών που επιστρέφει.  


## Examples

### Example #1 
Ομαδοποιεί τον πίνακα προσθέτοντας μια συγκεντρωτική στήλη [total] η οποία περιέχει το άθροισμα των τιμών (&#34;κάθε List.Sum([price])&#34;).
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
