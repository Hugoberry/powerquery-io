---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

V inštancii Essbase vráti kocky zoskupené podľa servera Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Z inštancie Essbase na serveri APS <code>url</code> vráti tabuľku kociek zoskupených podľa servera Essbase. Môže sa zadať voliteľný parameter záznamu <code>options</code>, ktorý bude riadiť tieto možnosti:    <ul><li><code>CommandTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho smie byť spusten&#253; dotaz na strane servera pred zrušen&#237;m dotazu. Predvolen&#225; hodnota je desať min&#250;t.</li></ul>



## Category
Accessing data
