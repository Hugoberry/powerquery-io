---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Εισαγάγετε δεδομένα από μια αποθήκη Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα όπου παρατίθενται οι πίνακες στην αποθήκη Snowflake Computing <code>warehouse</code> που βρίσκεται στον διακομιστή <code>server</code>. Μια προαιρετική παράμετρος εγγραφής, <code>options</code>, μπορεί να καθοριστεί για τον έλεγχο των παρακάτω επιλογών:<ul><li><code>Role</code>: Μια τιμή κειμένου που θα χρησιμοποιηθεί ως όνομα του ρόλου για τη σύνδεση.</li><li><code>CreateNavigationProperties</code>: Μια λογική τιμή (true/false) που ορίζει αν θα δημιουργούνται ιδιότητες περιήγησης στις επιστρεφόμενες τιμές (η προεπιλογή είναι true).</li><li><code>ConnectionTimeout</code>: Ο αριθμός των δευτερολέπτων αναμονής για αποκρίσεις δικτύου από το Snowflake.</li><li><code>CommandTimeout</code>: Ο αριθμός των δευτερολέπτων αναμονής για εκτέλεση ενός ερωτήματος.</li></ul>    


## Examples

### Example #1 
Εμφανίστε τους πίνακες σε μια αποθήκη Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



