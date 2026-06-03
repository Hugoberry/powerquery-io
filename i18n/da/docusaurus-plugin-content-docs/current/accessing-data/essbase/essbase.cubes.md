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

Returnerer en tabel med kuber grupperet efter Essbase-server fra en Essbase-forekomst ved APS-server `url`. Et valgfrit optagelsesparameter, `options`, kan angives til at styre følgende indstillinger:

-   `CommandTimeout` : En varighed, som styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien er ti minutter.



## Category
Accessing data
