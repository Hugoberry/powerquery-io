---
title: Folder.Contents
---

# Folder.Contents


## Description

Επιστρέφει έναν πίνακα που περιέχει τις ιδιότητες και τα περιεχόμενα των αρχείων και φακέλων που βρέθηκαν στον καθορισμένο φάκελο.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα που περιέχει μια σειρά για κάθε φάκελο και αρχείο που βρίσκονται στο φάκελο <code>path</code>. Κάθε σειρά περιέχει ιδιότητες του φακέλου ή του αρχείου και έναν σύνδεσμο προς το περιεχόμενό του. Η <code>options</code> παράμετρος προορίζεται προς το παρόν μόνο για εσωτερική χρήση.



## Category
Accessing data
