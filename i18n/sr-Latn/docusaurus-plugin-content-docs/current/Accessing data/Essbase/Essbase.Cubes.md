---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Vraća kocke u Essbase instanci grupisane prema Essbase serveru.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Vraća tabelu sa kockama grupisanih prema Essbase serveru sa Essbase instance na APS serveru <code>url</code>. Moguće je navesti opcionalni parametar zapisa, <code>options</code>, radi kontrole sledećih opcija:    <ul><li><code>CommandTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.</li></ul>



## Category
Accessing data
