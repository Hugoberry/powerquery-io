---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Επιστρέφει τις οικογένειες αναφορών στο Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Επιστρέφει έναν πίνακα πολυδιάστατων πακέτων από το Adobe Analytics. Μπορεί να καθοριστεί μια προαιρετική παράμετρος εγγραφής, `options`, για τον έλεγχο των ακόλουθων επιλογών:

-   `HierarchicalNavigation` : Μια λογική τιμή (true/false) που ορίζει αν οι πίνακες θα προβάλλονται ομαδοποιημένοι κατά τα ονόματα σχήματος (η προεπιλογή είναι false).
-   `MaxRetryCount` : Ο αριθμός των επαναλήψεων εκτέλεσης κατά την ανίχνευση για το αποτέλεσμα του ερωτήματος. Η προεπιλεγμένη τιμή είναι 120.
-   `RetryInterval` : Το χρονικό διάστημα μεταξύ των προσπαθειών επανάληψης. Η προεπιλεγμένη τιμή είναι 1 δευτερόλεπτο.
-   `Implementation` : Καθορίζει την έκδοση API του Adobe Analytics. Οι έγκυρες τιμές είναι: "2.0". Η προεπιλογή χρησιμοποιεί API έκδοση 1.4.



## Category
Accessing data
