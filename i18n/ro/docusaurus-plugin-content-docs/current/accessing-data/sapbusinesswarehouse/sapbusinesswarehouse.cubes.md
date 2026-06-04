---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


Returnează elementele InfoCube și interogările dintr-un sistem SAP Business Warehouse, grupate după InfoArea.


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

Returnează un tabel de elemente InfoCube și interogări, grupate după InfoArea, dintr-o instanță SAP Business Warehouse de la serverul `server` cu numărul de sistem `systemNumberOrSystemId` și ID client `clientId`. Poate fi specificat un parametru de înregistrare opțional, `optionsOrLogonGroup`, pentru a controla următoarele opțiuni:



## Category
Accessing data
