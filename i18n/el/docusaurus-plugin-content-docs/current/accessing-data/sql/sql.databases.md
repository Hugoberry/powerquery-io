---
title: Sql.Databases
---

# Sql.Databases


Επιστρέφει έναν πίνακα με τις βάσεις δεδομένων σε έναν SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Returns a table of databases on the specified SQL server, `server`. An optional record parameter, `options`, may be specified to control the following options:

-   `CreateNavigationProperties` : Μια λογική τιμή (true/false) που ορίζει αν θα δημιουργούνται ιδιότητες περιήγησης στις τιμές που επιστρέφονται (η προεπιλογή είναι true).
-   `NavigationPropertyNameGenerator` : Μια συνάρτηση που χρησιμοποιείται για τη δημιουργία ονομάτων για ιδιότητες περιήγησης.
-   `MaxDegreeOfParallelism` : Ένας αριθμός που ορίζει την τιμή του όρου ερωτήματος "maxdop" στο ερώτημα SQL που δημιουργείται.
-   `CommandTimeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή προτού αυτό ακυρωθεί. Η προεπιλεγμένη τιμή είναι δέκα λεπτά.
-   `ConnectionTimeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα θα γίνει αναμονή πριν από την εγκατάλειψη της προσπάθειας να γίνει σύνδεση με τον διακομιστή. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.
-   `HierarchicalNavigation` : Μια λογική τιμή (true/false) που ορίζει αν οι πίνακες θα προβάλλονται ομαδοποιημένοι κατά τα ονόματα σχήματος (η προεπιλογή είναι false).
-   `MultiSubnetFailover` : Μια λογική τιμή (true/false) που ορίζει την τιμή της ιδιότητας "MultiSubnetFailover" στη συμβολοσειρά σύνδεσης (η προεπιλογή είναι false).
-   `UnsafeTypeConversions` : Μια λογική τιμή (true/false) η οποία, αν είναι true, επιχειρεί αναδίπλωση των μετατροπών τύπου, οι οποίες θα μπορούσαν να αποτύχουν και να προκαλέσουν αποτυχία ολόκληρου του ερωτήματος. Δεν συνιστάται για γενική χρήση.
-   `ContextInfo` : Μια δυαδική τιμή που χρησιμοποιείται για τον ορισμό του CONTEXT\_INFO πριν από την εκτέλεση κάθε εντολής.
-   `OmitSRID` : Μια λογική τιμή (true/false) η οποία, αν είναι true, παραλείπει το SRID κατά την παραγωγή Well-Known Text από τύπους γεωμετρίας και γεωγραφίας.
-   `EnableCrossDatabaseFolding` : Μια λογική τιμή (true/false) που, εάν είναι true, επιτρέπει την αναδίπλωση ερωτημάτων σε βάσεις δεδομένων στον ίδιο διακομιστή. Η προεπιλεγμένη τιμή είναι false.

The record parameter is specified as \[option1 = value1, option2 = value2...\], for example.  
  
Does not support setting a SQL query to run on the server. `Sql.Database` should be used instead to run a SQL query.



## Category
Accessing data
