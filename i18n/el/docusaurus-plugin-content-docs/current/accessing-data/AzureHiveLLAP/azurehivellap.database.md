---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Εισαγωγή δεδομένων από HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Επιστρέφει μια λίστα πινάκων από το HDInsight Interactive Query που καθορίζεται από τη βάση δεδομένων `database` στον διακομιστή `server` του HDInsight Interactive Query. Ένας αριθμός θύρας μπορεί να καθοριστεί προαιρετικά με τον διακομιστή, διαχωρισμένος με άνω και κάτω τελεία. Μπορεί να καθοριστεί μια προαιρετική παράμετρος `options` για τον έλεγχο των ακόλουθων επιλογών:

-   `ConnectionTimeout`: Μια διάρκεια που ελέγχει τον χρόνο αναμονής πριν από την εγκατάλειψη της προσπάθειας δημιουργίας σύνδεσης με τον διακομιστή. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.
-   `CommandTimeout`: Μια διάρκεια που ελέγχει το χρονικό διάστημα κατά το οποίο επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή πριν από την ακύρωσή του. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.

Η παράμετρος `options` καθορίζεται ως \[option1 = value1, option2 = value2...\].


