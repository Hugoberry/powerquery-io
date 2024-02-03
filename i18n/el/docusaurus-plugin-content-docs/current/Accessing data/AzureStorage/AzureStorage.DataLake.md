---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Επιστρέφει έναν πίνακα περιήγησης που περιέχει τα έγγραφα που βρέθηκαν στο καθορισμένο κοντέινερ και στους υποφακέλους του από το Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα περιήγησης που περιέχει τα έγγραφα που βρέθηκαν στο καθορισμένο κοντέινερ και στους υποφακέλους του στη διεύθυνση URL του λογαριασμού, <code>endpoint</code>, από ένα σύστημα αρχείων Azure Data Lake Storage. Μπορεί να καθοριστεί <code>options</code> για έλεγχο των ακόλουθων επιλογών:    <ul><li><code>BlockSize</code> : Ο αριθμός των byte για ανάγνωση πριν από την αναμονή στον καταναλωτή δεδομένων. Η προεπιλεγμένη τιμή είναι 4 MB.</li><li><code>RequestSize</code> : Ο αριθμός των byte των οποίων θα επιχειρείται ανάγνωση σε μια μεμονωμένη αίτηση HTTP στον διακομιστή. Η προεπιλεγμένη τιμή είναι 4 MB.</li><li><code>ConcurrentRequests</code> : Η επιλογή ConcurrentRequests υποστηρίζει ταχύτερη λήψη δεδομένων με καθορισμό του αριθμού των αιτήσεων που θα πραγματοποιηθούν παράλληλα, εις βάρος της χρήσης της μνήμης. Η απαιτούμενη μνήμη είναι (ConcurrentRequest \* RequestSize). Η προεπιλεγμένη τιμή είναι 16.</li><li><code>HierarchicalNavigation</code> : Μια λογική τιμή (true/false) που ελέγχει αν τα αρχεία επιστρέφονται σε μια προβολή καταλόγου με μορφή δέντρου ή σε μια επίπεδη λίστα. Η προεπιλεγμένη τιμή είναι false.</li></ul>



## Category
Accessing data
