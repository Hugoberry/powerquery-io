---
title: DataLake.Contents
---

# DataLake.Contents


Εισαγάγετε τη διεύθυνση URL του λογαριασμού σας Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Επιστρέφει έναν πίνακα που περιέχει μια γραμμή για κάθε φάκελο και αρχείο που βρέθηκε στη διεύθυνση `url` από το Azure Data Lake Storage Gen1. Κάθε γραμμή περιέχει ιδιότητες του φακέλου ή του αρχείου και μια σύνδεση προς το περιεχόμενό του.


