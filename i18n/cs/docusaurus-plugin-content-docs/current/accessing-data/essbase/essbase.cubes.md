---
title: Essbase.Cubes
---

# Essbase.Cubes


Vrátí krychle v instanci Essbase seskupené podle serveru Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku krychlí seskupených podle serveru Essbase z instance Essbase na serveru APS `url`. Lze zadat volitelný parametr záznamu, `options`, který řídí následující možnosti:

-   `CommandTimeout` : Doba trvání, která řídí, jak dlouho může dotaz být dotaz na straně serveru spuštěný, než se zruší. Výchozí hodnota je 10 minut.



## Category
Accessing data
