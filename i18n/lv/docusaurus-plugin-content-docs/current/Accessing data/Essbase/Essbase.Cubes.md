---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Atgriež kubus Essbase instancē, grupētus pēc Essbase servera.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Atgriež tabulu ar kubiem, kas ir grupēti pēc Essbase servera no Essbase instances APS serverī <code>url</code>. Var norādīt neobligātu ieraksta parametru <code>options</code>, lai kontrolētu šādas opcijas:    <ul><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.</li></ul>



## Category
Accessing data
