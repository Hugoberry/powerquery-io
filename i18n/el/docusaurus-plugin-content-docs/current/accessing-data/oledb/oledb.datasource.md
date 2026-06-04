---
title: OleDb.DataSource
---

# OleDb.DataSource


Επιστρέφει έναν πίνακα με προβολές και πίνακες SQL από την προέλευση δεδομένων OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returns a table of SQL tables and views from the OLE DB data source specified by the connection string `connectionString`. `connectionString` can be text or a record of property value pairs. Property values can either be text or number. An optional record parameter, `options`, may be provided to specify additional properties. The record can contain the following fields:

-   `CreateNavigationProperties` : Μια λογική τιμή (true/false) που ορίζει αν θα δημιουργούνται ιδιότητες περιήγησης στις τιμές που επιστρέφονται (η προεπιλογή είναι true).
-   `NavigationPropertyNameGenerator` : Μια συνάρτηση που χρησιμοποιείται για τη δημιουργία ονομάτων για ιδιότητες περιήγησης.
-   `Query` : Ένα εγγενές ερώτημα SQL που χρησιμοποιείται για την ανάκτηση δεδομένων. Αν το ερώτημα παραγάγει πολλά σύνολα αποτελεσμάτων, θα επιστραφεί μόνο το πρώτο.
-   `HierarchicalNavigation` : Μια λογική τιμή (true/false) που ορίζει αν οι πίνακες θα προβάλλονται ομαδοποιημένοι κατά τα ονόματα σχήματος (η προεπιλογή είναι true).
-   `ConnectionTimeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα θα γίνει αναμονή πριν από την εγκατάλειψη της προσπάθειας να γίνει σύνδεση με τον διακομιστή. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.
-   `CommandTimeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή προτού αυτό ακυρωθεί. Η προεπιλεγμένη τιμή είναι δέκα λεπτά.
-   `SqlCompatibleWindowsAuth` : Μια λογική τιμή (true/false) που καθορίζει αν θα παράγονται επιλογές συμβολοσειράς σύνδεσης συμβατές με SQL Server για τον έλεγχο ταυτότητας των Windows. Η προεπιλεγμένη τιμή είναι true.

The record parameter is specified as \[option1 = value1, option2 = value2...\] or \[Query = "select ..."\], for example.



## Category
Accessing data
