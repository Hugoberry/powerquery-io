---
title: Folder.Contents
---

# Folder.Contents


Retourneert een tabel die de eigenschappen en inhoud bevat van de bestanden en mappen die in de opgegeven map zijn te vinden.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Retourneert een tabel met een rij voor elke map en elk bestand in de map <code>path</code>. Elke rij bevat eigenschappen van de map of het bestand en een koppeling naar de inhoud ervan. De parameter <code>options</code> is momenteel alleen bedoeld voor intern gebruik.



## Category
Accessing data
