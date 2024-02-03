---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

Επιστρέφει τα InfoCube και τα ερωτήματα σε ένα σύστημα SAP Business Warehouse ομαδοποιημένα κατά InfoArea.


## Syntax

```powerquery
SapBusinessWarehouse.Cubes(
    server as text,
    systemNumberOrSystemId as text,
    clientId as text,
    optional optionsOrLogonGroup as any,
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα με InfoCube και ερωτήματα ομαδοποιημένα κατά InfoArea από μια παρουσία SAP Business Warehouse στο διακομιστή <code>server</code> με αριθμό συστήματος <code>systemNumberOrSystemId</code> και αναγνωριστικό προγράμματος-πελάτη <code>clientId</code>. Μπορεί να καθοριστεί μια προαιρετική παράμετρος εγγραφής <code>optionsOrLogonGroup</code> για τον έλεγχο των ακόλουθων επιλογών:        



## Category
Accessing data
