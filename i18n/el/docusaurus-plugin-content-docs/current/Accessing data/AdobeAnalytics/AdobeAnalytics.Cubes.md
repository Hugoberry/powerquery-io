---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Επιστρέφει τις οικογένειες αναφορών στο Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα πολυδιάστατων πακέτων από το Adobe Analytics. Μπορεί να καθοριστεί μια προαιρετική παράμετρος εγγραφής, <code>options</code>, για τον έλεγχο των ακόλουθων επιλογών: <ul><li><code>HierarchicalNavigation</code> : Μια λογική τιμή (true/false) που ορίζει αν οι πίνακες θα προβάλλονται ομαδοποιημένοι κατά τα ονόματα σχήματος (η προεπιλογή είναι false).</li><li><code>MaxRetryCount</code> : Ο αριθμός των επαναλήψεων εκτέλεσης κατά την ανίχνευση για το αποτέλεσμα του ερωτήματος. Η προεπιλεγμένη τιμή είναι 120.</li><li><code>RetryInterval</code> : Το χρονικό διάστημα μεταξύ των προσπαθειών επανάληψης. Η προεπιλεγμένη τιμή είναι 1 δευτερόλεπτο.</li><li><code>Implementation</code> : Καθορίζει την έκδοση API του Adobe Analytics. Οι έγκυρες τιμές είναι: &quot;2.0&quot;. Η προεπιλογή χρησιμοποιεί API έκδοση 1.4.</li></ul>    



## Category
Accessing data
