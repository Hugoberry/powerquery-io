---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Palauttaa määritetyn muuttujan arvon tai oletusarvon, jos muuttujaa ei ole määritetty.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Palauttaa nykyisen arviointiympäristön määrittämän määritetyn muuttujan `identifier` arvon. Jos muuttujaa ei ole määritetty, palautetaan valinnainen `defaultValue`.



## Category
Values.Implementation
