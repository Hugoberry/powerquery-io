---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Εισαγάγετε τη διεύθυνση URL ενός λογαριασμού Azure Cosmos DB.


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Remarks

Επιστρέφει έναν πίνακα με τις βάσεις δεδομένων Azure Cosmos DB στη διεύθυνση `url`. Αν έχει καθοριστεί το στοιχείο `database`, θα επιστραφεί ένας πίνακας συλλογών. Επιπλέον, αν το πεδίο `Query` έχει καθοριστεί στην εγγραφή `options`, επιστρέφονται τα αποτελέσματα του ερωτήματος που εκτελείται είτε στην καθορισμένη βάση δεδομένων ή/και στη συλλογή.


