---
title: Access.Database
---

# Access.Database


## Description

Επιστρέφει μια δομική αναπαράσταση μιας βάσης δεδομένων της Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Επιστρέφει μια δομική αναπαράσταση μιας βάσης δεδομένων της Access, <code>database</code>. Μια προαιρετική παράμετρος εγγραφής, <code>options</code>, μπορεί να καθοριστεί για τον έλεγχο των παρακάτω επιλογών:    <ul><li><code>CreateNavigationProperties</code> : Μια λογική τιμή (true/false) που ορίζει αν θα δημιουργούνται ιδιότητες περιήγησης στις τιμές που επιστρέφονται (η προεπιλογή είναι false).</li><li><code>NavigationPropertyNameGenerator</code> : Μια συνάρτηση που χρησιμοποιείται για τη δημιουργία ονομάτων για ιδιότητες περιήγησης.</li></ul>    Για παράδειγμα, η παράμετρος εγγραφής καθορίζεται ως [option1 = value1, option2 = value2...].



## Category
Accessing data
