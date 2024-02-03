---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


## Description

Επιστρέφει το περιεχόμενο του καθορισμένου αντικειμένου blob από έναν θάλαμο χώρου αποθήκευσης του Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Details

Επιστρέφει το περιεχόμενο του αντικειμένου blob στη διεύθυνση URL, <code>url</code>, από έναν θάλαμο χώρου αποθήκευσης Azure. Μπορεί να καθοριστεί <code>options</code> για έλεγχο των ακόλουθων επιλογών:    <ul><li><code>BlockSize</code> : Ο αριθμός των byte για ανάγνωση πριν από την αναμονή στον καταναλωτή δεδομένων. Η προεπιλεγμένη τιμή είναι 4 MB.</li><li><code>RequestSize</code> : Ο αριθμός των byte των οποίων θα επιχειρείται ανάγνωση σε μια μεμονωμένη αίτηση HTTP στον διακομιστή. Η προεπιλεγμένη τιμή είναι 4 MB.</li><li><code>ConcurrentRequests</code> : Η επιλογή ConcurrentRequests υποστηρίζει ταχύτερη λήψη δεδομένων με καθορισμό του αριθμού των αιτήσεων που θα πραγματοποιηθούν παράλληλα, εις βάρος της χρήσης της μνήμης. Η απαιτούμενη μνήμη είναι (ConcurrentRequest \* RequestSize). Η προεπιλεγμένη τιμή είναι 16.</li></ul>



## Category
Accessing data
