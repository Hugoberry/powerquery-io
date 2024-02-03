---
title: Parquet.Document
---

# Parquet.Document


## Description

Επιστρέφει τα περιεχόμενα του εγγράφου Parquet ως πίνακα.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Επιστρέφει τα περιεχόμενα του εγγράφου Parquet ως πίνακα. Οι επιλογές περιλαμβάνουν:
    <ul>
    <li> <code>TypeMapping</code> : Μια τιμή κειμένου που ελέγχει την αντιστοίχιση προεπιλεγμένου τύπου κατά την ανάγνωση και τη σύνταξη αρχείων. Η προεπιλεγμένη τιμή είναι null και προσπαθεί να διατηρήσει όσο το δυνατόν μεγαλύτερη πιστότητα στον αρχικό τύπο. Μια τιμή "Sql" θα παράγει αποτελέσματα πιο συμβατά με τον Sql Server.</li>
    </ul>



## Category
Πρόσβαση σε δεδομένα
