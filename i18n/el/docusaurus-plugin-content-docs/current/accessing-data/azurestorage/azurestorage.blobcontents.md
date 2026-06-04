---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Επιστρέφει το περιεχόμενο του καθορισμένου αντικειμένου blob από έναν θάλαμο χώρου αποθήκευσης του Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Επιστρέφει το περιεχόμενο του αντικειμένου blob στη διεύθυνση URL, `url`, από έναν θάλαμο χώρου αποθήκευσης Azure. Μπορεί να καθοριστεί `options` για έλεγχο των ακόλουθων επιλογών:

-   `BlockSize` : Ο αριθμός των byte για ανάγνωση πριν από την αναμονή στον καταναλωτή δεδομένων. Η προεπιλεγμένη τιμή είναι 4 MB.
-   `RequestSize` : Ο αριθμός των byte των οποίων θα επιχειρείται ανάγνωση σε μια μεμονωμένη αίτηση HTTP στον διακομιστή. Η προεπιλεγμένη τιμή είναι 4 MB.
-   `ConcurrentRequests` : Η επιλογή ConcurrentRequests υποστηρίζει ταχύτερη λήψη δεδομένων με καθορισμό του αριθμού των αιτήσεων που θα πραγματοποιηθούν παράλληλα, εις βάρος της χρήσης της μνήμης. Η απαιτούμενη μνήμη είναι (ConcurrentRequest \* RequestSize). Η προεπιλεγμένη τιμή είναι 16.



## Category
Accessing data
