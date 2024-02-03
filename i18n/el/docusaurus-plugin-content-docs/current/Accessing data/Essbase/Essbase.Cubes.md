---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Επιστρέφει τους κύβους σε μια παρουσία Essbase με ομαδοποίηση κατά διακομιστή Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα με κύβους με ομαδοποίηση κατά διακομιστή Essbase από μια παρουσία Essbase στον διακομιστή APS <code>url</code>. Μια προαιρετική παράμετρος εγγραφής, <code>options</code>, μπορεί να καθοριστεί για έλεγχο των ακόλουθων επιλογών:    <ul><li><code>CommandTimeout</code> : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή προτού αυτό ακυρωθεί. Η προεπιλεγμένη τιμή είναι δέκα λεπτά.</li></ul>



## Category
Accessing data
