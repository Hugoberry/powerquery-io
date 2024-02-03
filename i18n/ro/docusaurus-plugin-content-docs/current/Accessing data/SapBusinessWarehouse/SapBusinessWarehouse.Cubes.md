---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

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


## Details

Returnează un tabel de elemente InfoCube și interogări, grupate după InfoArea, dintr-o instanță SAP Business Warehouse de la serverul <code>server</code> cu numărul de sistem <code>systemNumberOrSystemId</code> și ID client <code>clientId</code>. Poate fi specificat un parametru de înregistrare opțional, <code>optionsOrLogonGroup</code>, pentru a controla următoarele opțiuni:        



## Category
Accessing data
