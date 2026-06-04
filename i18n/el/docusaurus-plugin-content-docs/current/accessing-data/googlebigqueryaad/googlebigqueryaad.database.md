---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Εισαγωγή δεδομένων από μια βάση δεδομένων Google BigQuery με χρήση του Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Επιστρέφει έναν πίνακα που παραθέτει τα διαθέσιμα έργα στο Google BigQuery χρησιμοποιώντας το Microsoft Entra ID για `Αναγνωριστικό έργου χρέωσης`. Μια προαιρετική παράμετρος εγγραφής, `επιλογές`, μπορεί να καθοριστεί για τον έλεγχο των ακόλουθων επιλογών:

-   `ConnectionTimeout`: Μια διάρκεια που ελέγχει τη διάρκεια αναμονής πριν από την εγκατάλειψη μιας προσπάθειας σύνδεσης με τον διακομιστή. Η προεπιλεγμένη τιμή είναι τιμή χρονικού ορίου σύνδεσης ODBC.
-   `CommandTimeout`: Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή προτού αυτό ακυρωθεί.
-   `UseStorageApi`: Καθορίζει αν θα χρησιμοποιηθεί το BigQuery Storage API για τα μεγάλα σύνολα αποτελεσμάτων. Η προεπιλεγμένη τιμή είναι true για τη χρήση του API χώρου αποθήκευσης. Ορισμός σε false ώστε να μην χρησιμοποιείται το API χώρου αποθήκευσης.
-   `AudienceUri`: Αυτό είναι το URI ακροατηρίου που μπορεί να χρησιμοποιήσει το πρόγραμμα οδήγησης ODBC για τις αιτήσεις ανταλλαγής διακριτικών. Αυτό το πεδίο πρέπει να είναι ένα πλήρως προσδιορισμένο URI (π.χ. //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) όπου το pool\_id είναι ένα καθολικά μοναδικό όνομα για τον προσδιορισμό του συνόλου εργατικού δυναμικού.

Η παράμετρος εγγραφής καθορίζεται με τη μορφή \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Παράθεση των διαθέσιμων έργων στο Google BigQuery με χρήση του Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



