---
title: HdInsight.Contents
---

# HdInsight.Contents


Retourneert een navigeerbare tabel die de containers bevat die in het opgegeven account van een Azure-opslagkluis zijn te vinden.


## Syntax

```powerquery
HdInsight.Contents(
    account as text
) as table
```


## Remarks

Retourneert een navigeerbare tabel die een rij bevat voor elke container die in de account-URL, <code>account</code>, van een Azure-opslagkluis is te vinden. Elke rij bevat een koppeling naar de container-blobs.



## Category
Accessing data
