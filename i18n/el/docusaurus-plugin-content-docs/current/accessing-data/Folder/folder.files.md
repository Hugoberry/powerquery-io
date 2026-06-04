---
title: Folder.Files
---

# Folder.Files


Επιστρέφει έναν πίνακα που περιέχει τις ιδιότητες και τα περιεχόμενα των αρχείων που βρέθηκαν στον καθορισμένο φάκελο και τους υποφακέλους του.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Επιστρέφει έναν πίνακα που περιέχει μια γραμμή για κάθε αρχείο που βρίσκεται στον καθορισμένο φάκελο και όλους τους υποφακέλους του.

-   `path`: Η διαδρομή προς τον φάκελο από τον οποίο θέλετε να ανακτήσετε τα αρχεία. Η παρεχόμενη διαδρομή φακέλου πρέπει να είναι μια έγκυρη απόλυτη διαδρομή.
-   `options`: (Προαιρετικό) Αυτή η παράμετρος προορίζεται προς το παρόν μόνο για εσωτερική χρήση.

Κάθε γραμμή του επιστρεφόμενου πίνακα περιέχει ιδιότητες του αρχείου και μια σύνδεση προς το περιεχόμενό του.


## Examples

### Example #1
Επιστρέφει έναν πίνακα που περιέχει όλα τα αρχεία που βρίσκονται στον φάκελο C:\\test-examples\\example-folder και όλους τους υποφακέλους του.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
