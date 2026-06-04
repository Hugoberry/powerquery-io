---
title: Essbase.Cubes
---

# Essbase.Cubes


Επιστρέφει τους κύβους σε μια παρουσία Essbase με ομαδοποίηση κατά διακομιστή Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Επιστρέφει έναν πίνακα με κύβους με ομαδοποίηση κατά διακομιστή Essbase από μια παρουσία Essbase στον διακομιστή APS `url`. Μια προαιρετική παράμετρος εγγραφής, `options`, μπορεί να καθοριστεί για έλεγχο των ακόλουθων επιλογών:

-   `CommandTimeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή προτού αυτό ακυρωθεί. Η προεπιλεγμένη τιμή είναι δέκα λεπτά.



## Category
Accessing data
