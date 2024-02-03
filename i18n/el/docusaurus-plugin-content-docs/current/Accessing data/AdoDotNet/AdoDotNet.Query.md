---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

Επιστρέφει το αποτέλεσμα εκτέλεσης ενός τοπικού ερωτήματος σε μια προέλευση δεδομένων ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Επιστρέφει το αποτέλεσμα εκτέλεσης του <code>query</code> με τη συμβολοσειρά σύνδεσης <code>connectionString</code> χρησιμοποιώντας την υπηρεσία παροχής ADO.NET <code>providerName</code>. Το <code>connectionString</code> μπορεί να είναι κείμενο ή εγγραφή ζευγών τιμών ιδιοτήτων. Οι τιμές ιδιοτήτων μπορούν να είναι είτε κείμενο είτε αριθμός. Μπορεί να καταχωρηθεί μια προαιρετική παράμετρος εγγραφής <code>options</code> για τον καθορισμό πρόσθετων ιδιοτήτων. Η εγγραφή μπορεί να περιέχει τα ακόλουθα πεδία:    <ul><li><code>CommandTimeout</code> : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή προτού αυτό ακυρωθεί. Η προεπιλεγμένη τιμή είναι δέκα λεπτά.</li><li><code>SqlCompatibleWindowsAuth</code> : Μια λογική τιμή (true/false) που καθορίζει αν θα παράγονται επιλογές συμβολοσειράς σύνδεσης συμβατές με SQL Server για τον έλεγχο ταυτότητας των Windows. Η προεπιλεγμένη τιμή είναι true.</li></ul>



## Category
Accessing data
