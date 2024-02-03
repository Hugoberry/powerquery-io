---
title: Hdfs.Files
---

# Hdfs.Files


## Description

Επιστρέφει έναν πίνακα που περιέχει τις ιδιότητες και τα περιεχόμενα των αρχείων και φακέλων που βρέθηκαν στον καθορισμένο φάκελο και τους υποφακέλους από ένα σύστημα αρχείων Hadoop.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Details

Επιστρέφει έναν πίνακα που περιέχει μια γραμμή για κάθε φάκελο και αρχείο που βρέθηκαν στη διεύθυνση URL, <code>url</code>, και τους υποφακέλους από ένα σύστημα αρχείων Hadoop. Κάθε γραμμή περιέχει ιδιότητες του αρχείου και μια σύνδεση στο περιεχόμενό του.



## Category
Accessing data