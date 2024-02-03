---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Εισαγωγή δεδομένων από HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Επιστρέφει μια λίστα πινάκων από το HDInsight Interactive Query που καθορίζεται από τη βάση δεδομένων <code>database</code> στον διακομιστή <code>server</code> του HDInsight Interactive Query. Ένας αριθμός θύρας μπορεί να καθοριστεί προαιρετικά με τον διακομιστή, διαχωρισμένος με άνω και κάτω τελεία. Μπορεί να καθοριστεί μια προαιρετική παράμετρος <code>options</code> για τον έλεγχο των ακόλουθων επιλογών:<ul>        <li><code>ConnectionTimeout</code>: Μια διάρκεια που ελέγχει τον χρόνο αναμονής πριν από την εγκατάλειψη της προσπάθειας δημιουργίας σύνδεσης με τον διακομιστή. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.</li>        <li><code>CommandTimeout</code>: Μια διάρκεια που ελέγχει το χρονικό διάστημα κατά το οποίο επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή πριν από την ακύρωσή του. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.</li></ul>Η παράμετρος <code>options</code> καθορίζεται ως [option1 = value1, option2 = value2...].


