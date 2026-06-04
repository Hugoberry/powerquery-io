---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


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


## Remarks

Επιστρέφει έναν πίνακα με InfoCube και ερωτήματα ομαδοποιημένα κατά InfoArea από μια παρουσία SAP Business Warehouse στο διακομιστή `server` με αριθμό συστήματος `systemNumberOrSystemId` και αναγνωριστικό προγράμματος-πελάτη `clientId`. Μπορεί να καθοριστεί μια προαιρετική παράμετρος εγγραφής `optionsOrLogonGroup` για τον έλεγχο των ακόλουθων επιλογών:



## Category
Accessing data
