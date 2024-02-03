---
title: Table.Profile
---

# Table.Profile


## Description

Atgriež tabulas kolonnu profilu.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Atgriež <code>table</code> iekļauto kolonnu profilu.<br />Katrai kolonnai (ja piemērojams) tiek atgriezta šāda informācija:<ul>  <li>minimums</li>  <li>maksimums</li>  <li>vidējais</li>  <li>standarta novirze</li>  <li>skaits</li>  <li>nedefinētu vērtību skaits</li>  <li>unikālu vērtību skaits</li></ul><br />



## Category
Table.Information
