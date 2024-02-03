---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Επιστρέφει τη συλλογή σχημάτων για μια προέλευση δεδομένων ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Επιστρέφει τη συλλογή σχημάτων για την προέλευση δεδομένων ADO.NET με όνομα υπηρεσίας παροχής <code>providerName</code> και συμβολοσειρά σύνδεσης <code>connectionString</code>. Το <code>connectionString</code> μπορεί να είναι κείμενο ή εγγραφή ζευγών τιμών ιδιοτήτων. Οι τιμές ιδιοτήτων μπορούν να είναι κείμενο ή αριθμός. Μπορεί να καταχωρηθεί μια προαιρετική παράμετρος εγγραφής <code>options</code> για τον καθορισμό πρόσθετων ιδιοτήτων. Η εγγραφή μπορεί να περιέχει τα ακόλουθα πεδία:    <ul><li><code>CommandTimeout</code> : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή προτού αυτό ακυρωθεί. Η προεπιλεγμένη τιμή είναι δέκα λεπτά.</li><li><code>SqlCompatibleWindowsAuth</code> : Μια λογική τιμή (true/false) που καθορίζει αν θα παράγονται επιλογές συμβολοσειράς σύνδεσης συμβατές με SQL Server για τον έλεγχο ταυτότητας των Windows. Η προεπιλεγμένη τιμή είναι true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
