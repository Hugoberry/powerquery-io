---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Συγχωνεύει τον καθορισμένο πίνακα διαστάσεων στο περιβάλλον φίλτρου του κύβου και αλλάζει τις υποδιαιρέσεις των διαστάσεων του περιβάλλοντος φίλτρου επεκτείνοντας το καθορισμένο σύνολο των χαρακτηριστικών διάστασης.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Details

Συγχωνεύει τον καθορισμένο πίνακα διαστάσεων, <code>dimensionSelector</code>, στο περιβάλλον φίλτρου του κύβου, <code>cube</code>, και αλλάζει τις υποδιαιρέσεις των διαστάσεων του περιβάλλοντος φίλτρου επεκτείνοντας το καθορισμένο σύνολο, <code>attributeNames</code>, των χαρακτηριστικών διάστασης. Τα χαρακτηριστικά διάστασης προστίθενται στην προβολή πίνακα με στήλες που ονομάζονται <code>newColumnNames</code> ή <code>attributeNames</code> εάν δεν έχει καθοριστεί.



## Category
Cube
