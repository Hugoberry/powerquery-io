---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Προσθέτει μια στήλη στον κύβο η οποία περιέχει τα αποτελέσματα της μέτρησης που εφαρμόστηκε στο περιβάλλον γραμμής κάθε γραμμής.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Προσθέτει μια στήλη με το όνομα <code>column</code> στο <code>cube</code> στον κύβο η οποία περιέχει τα αποτελέσματα της μέτρησης <code>measureSelector</code> που εφαρμόστηκε στο περιβάλλον γραμμής κάθε γραμμής. Η εφαρμογή μέτρησης επηρεάζεται από τις αλλαγές στις υποδιαιρέσεις και την ανάλυση της διάστασης. Οι τιμές μέτρησης θα ρυθμιστούν μετά την εκτέλεση ορισμένων λειτουργιών κύβου.



## Category
Cube
