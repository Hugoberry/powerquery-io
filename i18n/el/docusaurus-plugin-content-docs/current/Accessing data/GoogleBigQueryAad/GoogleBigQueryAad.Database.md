---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Εισαγωγή δεδομένων από μια βάση δεδομένων Google BigQuery με χρήση του Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Εμφανίζει έναν πίνακα με τα διαθέσιμα έργα στο Google BigQuery χρησιμοποιώντας το Azure AD για <code>Αναγνωριστικό έργου χρέωσης</code> . Μια προαιρετική παράμετρος εγγραφής, <code>επιλογές</code>, μπορεί να καθοριστεί για τον έλεγχο των παρακάτω επιλογών:      <ul>        <li><code>ConnectionTimeout</code>: Μια διάρκεια που ελέγχει πόσος χρόνος αναμονής πριν εγκαταλείψετε μια προσπάθεια σύνδεσης με τον διακομιστή. Η προεπιλεγμένη τιμή είναι η τιμή λήξης χρονικού ορίου σύνδεσης ODBC.</li>        <li><code>CommandTimeout</code>: Μια διάρκεια που ελέγχει πόσο χρόνο επιτρέπεται να εκτελείται το ερώτημα από την πλευρά του διακομιστή προτού ακυρωθεί.</li>        <li><code>UseStorageApi</code>: Καθορίζει εάν θα χρησιμοποιηθεί το BigQuery Storage API για μεγάλα σύνολα αποτελεσμάτων. Η προεπιλεγμένη τιμή είναι αληθής για τη χρήση του Storage API. Ορίστε σε false για να μην χρησιμοποιείται το Storage API</li>        <li><code>AudienceUri</code>: Αυτό είναι το URI κοινού που μπορεί να χρησιμοποιήσει το πρόγραμμα οδήγησης ODBC για τις αιτήσεις του για ανταλλαγή διακριτικών. Αυτό το πεδίο πρέπει να είναι πλήρως πιστοποιημένο URI (δηλαδή //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread) όπου το pool_id είναι ένα παγκοσμίως μοναδικό όνομα για τον προσδιορισμό του συνόλου εργατικού δυναμικού.</li>      </ul>    Η παράμετρος εγγραφής καθορίζεται ως [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Παράθεση των διαθέσιμων έργων στο Google BigQuery με χρήση του Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



