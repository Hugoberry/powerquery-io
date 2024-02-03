---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

Επιστρέφει έναν πίνακα με τις βάσεις δεδομένων Azure Cosmos DB στη διεύθυνση <code>url</code>. Αν έχει καθοριστεί το στοιχείο <code>database</code>, θα επιστραφεί ένας πίνακας συλλογών. Επιπλέον, αν το πεδίο <code>Query</code> έχει καθοριστεί στην εγγραφή <code>options</code>, επιστρέφονται τα αποτελέσματα του ερωτήματος που εκτελείται είτε στην καθορισμένη βάση δεδομένων ή/και στη συλλογή.


