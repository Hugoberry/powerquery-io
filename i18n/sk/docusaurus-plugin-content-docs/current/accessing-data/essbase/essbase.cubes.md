---
title: Essbase.Cubes
---

# Essbase.Cubes


V inštancii Essbase vráti kocky zoskupené podľa servera Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Z inštancie Essbase na serveri APS `url` vráti tabuľku kociek zoskupených podľa servera Essbase. Môže sa zadať voliteľný parameter záznamu `options`, ktorý bude riadiť tieto možnosti:

-   `CommandTimeout` : Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred zrušením dotazu. Predvolená hodnota je desať minút.



## Category
Accessing data
