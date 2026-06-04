---
title: MySQL.Database
---

# MySQL.Database


Επιστρέφει έναν πίνακα με πίνακες, προβολές και αποθηκευμένες ανυσματικές συναρτήσεις SQL που είναι διαθέσιμα σε βάση δεδομένων MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returns a table of SQL tables, views, and stored scalar functions available in a MySQL database on server `server` in the database instance named `database`. The port may be optionally specified with the server, separated by a colon. An optional record parameter, `options`, may be specified to control the following options:

-   `Encoding` : Μια τιμή TextEncoding που καθορίζει το σύνολο χαρακτήρων που χρησιμοποιείται για την κωδικοποίηση όλων των ερωτημάτων που αποστέλλονται στον διακομιστή (η προεπιλογή είναι null).
-   `CreateNavigationProperties` : Μια λογική τιμή (true/false) που ορίζει αν θα δημιουργούνται ιδιότητες περιήγησης στις τιμές που επιστρέφονται (η προεπιλογή είναι true).
-   `NavigationPropertyNameGenerator` : Μια συνάρτηση που χρησιμοποιείται για τη δημιουργία ονομάτων για ιδιότητες περιήγησης.
-   `Query` : Ένα εγγενές ερώτημα SQL που χρησιμοποιείται για την ανάκτηση δεδομένων. Αν το ερώτημα παραγάγει πολλά σύνολα αποτελεσμάτων, θα επιστραφεί μόνο το πρώτο.
-   `CommandTimeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή προτού αυτό ακυρωθεί. Η προεπιλεγμένη τιμή είναι δέκα λεπτά.
-   `ConnectionTimeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα θα γίνει αναμονή πριν από την εγκατάλειψη της προσπάθειας να γίνει σύνδεση με τον διακομιστή. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.
-   `TreatTinyAsBoolean` : Μια λογική τιμή (true/false) που καθορίζει αν θα επιβάλλονται οι στήλες tinyint στο διακομιστή ως λογικές τιμές. Η προεπιλεγμένη τιμή είναι true.
-   `OldGuids` : Μια λογική τιμή (true/false) που ορίζει εάν οι στήλες char(36) (αν έχει τιμή false) ή οι στήλες binary(16) (αν έχει τιμή true) θα αντιμετωπίζονται ως GUID. Η προεπιλεγμένη τιμή είναι false.
-   `ReturnSingleDatabase` : Μια λογική τιμή (true/false) που ορίζει αν θα επιστρέφονται όλοι οι πίνακες όλων των βάσεων δεδομένων (αν έχει τιμή false) ή θα επιστρέφονται οι πίνακες και οι προβολές της καθορισμένης βάσης δεδομένων (αν έχει τιμή true). Η προεπιλεγμένη τιμή είναι false.
-   `HierarchicalNavigation` : Μια λογική τιμή (true/false) που ορίζει αν οι πίνακες θα προβάλλονται ομαδοποιημένοι κατά τα ονόματα σχήματος (η προεπιλογή είναι false).

The record parameter is specified as \[option1 = value1, option2 = value2...\] or \[Query = "select ..."\], for example.



## Category
Accessing data
