---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Επιστρέφει τη συλλογή σχημάτων για μια προέλευση δεδομένων ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Επιστρέφει τη συλλογή σχημάτων για την προέλευση δεδομένων ADO.NET με όνομα υπηρεσίας παροχής `providerName` και συμβολοσειρά σύνδεσης `connectionString`. Το `connectionString` μπορεί να είναι κείμενο ή εγγραφή ζευγών τιμών ιδιοτήτων. Οι τιμές ιδιοτήτων μπορούν να είναι κείμενο ή αριθμός. Μπορεί να καταχωρηθεί μια προαιρετική παράμετρος εγγραφής `options` για τον καθορισμό πρόσθετων ιδιοτήτων. Η εγγραφή μπορεί να περιέχει τα ακόλουθα πεδία:

-   `CommandTimeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή προτού αυτό ακυρωθεί. Η προεπιλεγμένη τιμή είναι δέκα λεπτά.
-   `SqlCompatibleWindowsAuth` : Μια λογική τιμή (true/false) που καθορίζει αν θα παράγονται επιλογές συμβολοσειράς σύνδεσης συμβατές με SQL Server για τον έλεγχο ταυτότητας των Windows. Η προεπιλεγμένη τιμή είναι true.
-   `TypeMap`



## Category
Accessing data
