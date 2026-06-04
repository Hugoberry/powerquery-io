---
title: Essbase.Cubes
---

# Essbase.Cubes


Vraća kocke u Essbase instanci grupisane prema Essbase serveru.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Vraća tabelu sa kockama grupisanih prema Essbase serveru sa Essbase instance na APS serveru `url`. Moguće je navesti opcionalni parametar zapisa, `options`, radi kontrole sledećih opcija:

-   `CommandTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.



## Category
Accessing data
