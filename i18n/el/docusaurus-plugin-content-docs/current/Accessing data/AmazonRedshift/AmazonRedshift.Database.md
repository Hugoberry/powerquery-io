---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Εισαγάγετε δεδομένα από μια βάση δεδομένων Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα που παραθέτει τους πίνακες στο σύμπλεγμα Amazon Redshift <code>server</code> στη βάση δεδομένων <code>database</code>.  Μια προαιρετική παράμετρος εγγραφής, <code>options</code>, μπορεί να καθοριστεί για τον έλεγχο των ακόλουθων επιλογών:<ul><li><code>Όνομα Πάροχου</code>: Μια τιμή κειμένου που θα χρησιμοποιηθεί ως όνομα υπηρεσίας παροχής για τη σύνδεση. Αυτό χρησιμοποιείται κατά τη χρήση του Microsoft Authentication.</li><li><code>Μέγεθος Δέσμης</code>: Ο αριθμός των γραμμών που λήφθηκαν με μία μόνο κλήση στον διακομιστή.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



