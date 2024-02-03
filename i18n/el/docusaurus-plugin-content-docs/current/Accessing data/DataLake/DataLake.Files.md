---
title: DataLake.Files
---

# DataLake.Files


## Description

Καταχωρήστε τη διεύθυνση URL του λογαριασμού σας Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα που περιέχει μια γραμμή για κάθε αρχείο που βρέθηκε στη διεύθυνση <code>url</code> από το Azure Data Lake Storage Gen1. Κάθε γραμμή περιέχει ιδιότητες του αρχείου και μια σύνδεση προς το περιεχόμενό του.


