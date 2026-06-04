---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Εισαγάγετε δεδομένα από μια βάση δεδομένων Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Επιστρέφει έναν πίνακα που παραθέτει τους πίνακες στο σύμπλεγμα `διακομιστή` Amazon Redshift στη βάση δεδομένων `βάση δεδομένων`. Μια προαιρετική παράμετρος εγγραφής, `επιλογές`, μπορεί να καθοριστεί για τον έλεγχο των ακόλουθων επιλογών:

-   `Όνομα υπηρεσίας παροχής`: Μια τιμή κειμένου που θα χρησιμοποιηθεί ως όνομα υπηρεσίας παροχής για τη σύνδεση. Αυτό χρησιμοποιείται κατά τη χρήση του Ελέγχου ταυτότητας της Microsoft.
-   `Μέγεθος δέσμης`: Ο αριθμός των γραμμών που λήφθηκαν σε μία μόνο κλήση στον διακομιστή.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



