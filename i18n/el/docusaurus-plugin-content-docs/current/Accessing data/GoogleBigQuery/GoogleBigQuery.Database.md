---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Εισαγάγετε δεδομένα από βάση δεδομένων Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Επιστρέφει έναν πίνακα με τα διαθέσιμα έργα στο Google BigQuery. Μια προαιρετική παράμετρος εγγραφής, <code>options</code>, μπορεί να καθοριστεί για τον έλεγχο των παρακάτω επιλογών:      <ul>        <li><code>ConnectionTimeout</code>: Μια διάρκεια που ελέγχει πόσος χρόνος αναμονής πριν εγκαταλείψετε μια προσπάθεια σύνδεσης με τον διακομιστή. Η προεπιλεγμένη τιμή είναι η τιμή λήξης χρονικού ορίου σύνδεσης ODBC.</li>        <li><code>CommandTimeout</code>: Μια διάρκεια που ελέγχει πόσο χρόνο επιτρέπεται να εκτελείται το ερώτημα από την πλευρά του διακομιστή προτού ακυρωθεί.</li>        <li><code>BillingProject</code>:Αναγνωριστικό έργου χρέωσης. Η προεπιλεγμένη τιμή είναι το πρώτο διαθέσιμο έργο.</li>        <li><code>UseStorageApi</code>: Καθορίζει εάν θα χρησιμοποιηθεί το BigQuery Storage API για μεγάλα σύνολα αποτελεσμάτων. Η προεπιλεγμένη τιμή είναι αληθής για τη χρήση του Storage API. Ορίστε σε false για να μην χρησιμοποιείται το Storage API</li>      </ul>    Η παράμετρος εγγραφής καθορίζεται ως [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Παράθεση των διαθέσιμων έργων στο Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



