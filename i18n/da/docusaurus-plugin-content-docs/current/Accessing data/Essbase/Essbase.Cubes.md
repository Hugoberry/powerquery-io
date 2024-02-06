---
title: Essbase.Cubes
---

# Essbase.Cubes


Returnerer kuberne i en Essbase-forekomst grupperet efter Essbase-server.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel med kuber grupperet efter Essbase-server fra en Essbase-forekomst ved APS-server <code>url</code>. Et valgfrit optagelsesparameter, <code>options</code>, kan angives til at styre følgende indstillinger:    <ul><li><code>CommandTimeout</code> : En varighed, som styrer, hvor l&#230;nge foresp&#248;rgslen p&#229; serversiden m&#229; k&#248;re, f&#248;r den annulleres. Standardv&#230;rdien er ti minutter.</li></ul>



## Category
Accessing data
