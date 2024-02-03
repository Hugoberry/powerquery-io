---
title: Folder.Files
---

# Folder.Files


## Description

Retourneert een tabel die de eigenschappen en inhoud bevat van de bestanden die in de opgegeven map en submappen zijn te vinden.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Retourneert een tabel met een rij voor elk bestand in de map <code>path</code> en alle bijbehorende submappen. Elke rij bevat eigenschappen van het bestand en een koppeling naar de inhoud. De parameter <code>options</code> is momenteel alleen bedoeld voor intern gebruik.



## Category
Accessing data
