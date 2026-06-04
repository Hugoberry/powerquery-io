---
title: HdInsight.Files
---

# HdInsight.Files


Επιστρέφει έναν πίνακα που περιέχει τις ιδιότητες και τα περιεχόμενα των blob που βρέθηκαν στο καθορισμένο κοντέινερ από ένα θάλαμο χώρου αποθήκευσης του Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Επιστρέφει έναν πίνακα που περιέχει μια γραμμή για κάθε αρχείο blob που βρέθηκε στη διεύθυνση URL λογαριασμού `account` από ένα θάλαμο χώρου αποθήκευσης του Azure. Κάθε γραμμή περιέχει ιδιότητες του αρχείου και μια σύνδεση στο περιεχόμενό του.



## Category
Accessing data
