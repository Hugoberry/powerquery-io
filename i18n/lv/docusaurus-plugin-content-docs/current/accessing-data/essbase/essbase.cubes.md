---
title: Essbase.Cubes
---

# Essbase.Cubes


Atgriež kubus Essbase instancē, grupētus pēc Essbase servera.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Atgriež tabulu ar kubiem, kas ir grupēti pēc Essbase servera no Essbase instances APS serverī `url`. Var norādīt neobligātu ieraksta parametru `options`, lai kontrolētu šādas opcijas:

-   `CommandTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.



## Category
Accessing data
