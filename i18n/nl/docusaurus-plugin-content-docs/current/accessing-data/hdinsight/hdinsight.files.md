---
title: HdInsight.Files
---

# HdInsight.Files


Retourneert een tabel die de eigenschappen en inhoud bevat van de blobs in de opgegeven container van een Azure-opslagkluis.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Retourneert een tabel die een rij bevat voor elke blob in de container-URL <code>account</code> van een Azure-opslagkluis. Elke rij bevat eigenschappen van het bestand en een koppeling naar de inhoud.



## Category
Accessing data
