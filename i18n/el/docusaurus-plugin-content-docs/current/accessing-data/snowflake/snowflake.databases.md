---
title: Snowflake.Databases
---

# Snowflake.Databases


Εισαγάγετε δεδομένα από μια αποθήκη Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Επιστρέφει έναν πίνακα όπου παρατίθενται οι πίνακες στην αποθήκη Snowflake Computing `warehouse` που βρίσκεται στον διακομιστή `server`. Μια προαιρετική παράμετρος εγγραφής, `options`, μπορεί να καθοριστεί για τον έλεγχο των παρακάτω επιλογών:

-   `Role`: Μια τιμή κειμένου που θα χρησιμοποιηθεί ως όνομα του ρόλου για τη σύνδεση.
-   `CreateNavigationProperties`: Μια λογική τιμή (true/false) που ορίζει αν θα δημιουργούνται ιδιότητες περιήγησης στις επιστρεφόμενες τιμές (η προεπιλογή είναι true).
-   `ConnectionTimeout`: Ο αριθμός των δευτερολέπτων αναμονής για αποκρίσεις δικτύου από το Snowflake.
-   `CommandTimeout`: Ο αριθμός των δευτερολέπτων αναμονής για εκτέλεση ενός ερωτήματος.


## Examples

### Example #1
Εμφανίστε τους πίνακες σε μια αποθήκη Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



