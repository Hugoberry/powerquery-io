---
title: DB2.Database
---

# DB2.Database


Επιστρέφει έναν πίνακα με πίνακες και προβολές SQL που είναι διαθέσιμα σε βάση δεδομένων Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returns a table of SQL tables and views available in a Db2 database on server `server` in the database instance named `database`. The port may be optionally specified with the server, separated by a colon. An optional record parameter, `options`, may be specified to control the following options:

-   `CreateNavigationProperties` : Μια λογική τιμή (true/false) που ορίζει αν θα δημιουργούνται ιδιότητες περιήγησης στις τιμές που επιστρέφονται (η προεπιλογή είναι true).
-   `NavigationPropertyNameGenerator` : Μια συνάρτηση που χρησιμοποιείται για τη δημιουργία ονομάτων για ιδιότητες περιήγησης.
-   `Query` : Ένα εγγενές ερώτημα SQL που χρησιμοποιείται για την ανάκτηση δεδομένων. Αν το ερώτημα παραγάγει πολλά σύνολα αποτελεσμάτων, θα επιστραφεί μόνο το πρώτο.
-   `CommandTimeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή προτού αυτό ακυρωθεί. Η προεπιλεγμένη τιμή είναι δέκα λεπτά.
-   `ConnectionTimeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα θα γίνει αναμονή πριν από την εγκατάλειψη της προσπάθειας να γίνει σύνδεση με τον διακομιστή. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.
-   `HierarchicalNavigation` : Μια λογική τιμή (true/false) που ορίζει αν οι πίνακες θα προβάλλονται ομαδοποιημένοι κατά τα ονόματα σχήματος (η προεπιλογή είναι false).
-   `Implementation` : Καθορίζει την εσωτερική υλοποίηση υπηρεσίας παροχής βάσης δεδομένων που θα χρησιμοποιηθεί. Οι έγκυρες τιμές είναι: "IBM" και "Microsoft".
-   `BinaryCodePage` : Ένας αριθμός για την αποκωδικοποίηση δυαδικών δεδομένων Db2 FOR BIT σε συμβολοσειρές χαρακτήρων από το CCSID (Αναγνωριστικό συνόλου κωδικοποιημένων χαρακτήρων). Ισχύει για Implementation = "Microsoft". Ορίστε την τιμή σε 0 για απενεργοποίηση της μετατροπής (προεπιλογή). Ορίστε την τιμή σε 1 για μετατροπή βάσει κωδικοποίησης βάσης δεδομένων. Ορίστε άλλον αριθμό CCSID για μετατροπή σε κωδικοποίηση εφαρμογής.
-   `PackageCollection` : Καθορίζει μια τιμή συμβολοσειράς για τη συλλογή πακέτων (η προεπιλογή είναι "NULLID") για την ενεργοποίηση της χρήσης κοινόχρηστων πακέτων που απαιτούνται για την επεξεργασία προτάσεων SQL. Ισχύει για Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Καθορίζει εάν η σύνδεση γίνεται μέσω μιας πύλης σύνδεσης Db2. Ισχύει για Implementation = "Microsoft".

The record parameter is specified as \[option1 = value1, option2 = value2...\] or \[Query = "select ..."\], for example.



## Category
Accessing data
