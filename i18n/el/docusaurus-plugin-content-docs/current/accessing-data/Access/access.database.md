---
title: Access.Database
---

# Access.Database


Επιστρέφει μια δομική αναπαράσταση μιας βάσης δεδομένων της Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Returns a structural representation of an Access database, `database`. An optional record parameter, `options`, may be specified to control the following options:

-   `CreateNavigationProperties` : Μια λογική τιμή (true/false) που ορίζει αν θα δημιουργούνται ιδιότητες περιήγησης στις τιμές που επιστρέφονται (η προεπιλογή είναι false).
-   `NavigationPropertyNameGenerator` : Μια συνάρτηση που χρησιμοποιείται για τη δημιουργία ονομάτων για ιδιότητες περιήγησης.

The record parameter is specified as \[option1 = value1, option2 = value2...\], for example.



## Category
Accessing data
