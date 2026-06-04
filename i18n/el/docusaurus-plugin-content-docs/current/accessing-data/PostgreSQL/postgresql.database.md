---
title: PostgreSQL.Database
---

# PostgreSQL.Database


Επιστρέφει έναν πίνακα πινάκων και προβολών SQL που είναι διαθέσιμα σε βάση δεδομένων PostgreSQL.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returns a table of SQL tables and views available in a PostgreSQL database on server `server` in the database instance named `database`. The port may be optionally specified with the server, separated by a colon. An optional record parameter, `options`, may be specified to control the following options:

-   `CreateNavigationProperties` : Μια λογική τιμή (true/false) που ορίζει αν θα δημιουργούνται ιδιότητες περιήγησης στις τιμές που επιστρέφονται (η προεπιλογή είναι true).
-   `NavigationPropertyNameGenerator` : Μια συνάρτηση που χρησιμοποιείται για τη δημιουργία ονομάτων για ιδιότητες περιήγησης.
-   `Query` : Ένα εγγενές ερώτημα SQL που χρησιμοποιείται για την ανάκτηση δεδομένων. Αν το ερώτημα παραγάγει πολλά σύνολα αποτελεσμάτων, θα επιστραφεί μόνο το πρώτο.
-   `CommandTimeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή προτού αυτό ακυρωθεί. Η προεπιλεγμένη τιμή είναι δέκα λεπτά.
-   `ConnectionTimeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα θα γίνει αναμονή πριν από την εγκατάλειψη της προσπάθειας να γίνει σύνδεση με τον διακομιστή. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.
-   `HierarchicalNavigation` : Μια λογική τιμή (true/false) που ορίζει αν οι πίνακες θα προβάλλονται ομαδοποιημένοι κατά τα ονόματα σχήματος (η προεπιλογή είναι false).

The record parameter is specified as \[option1 = value1, option2 = value2...\] or \[Query = "select ..."\], for example.



## Category
Accessing data
