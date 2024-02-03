---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Az Essbase-példányokban lévő kockákat adja vissza az Essbase-kiszolgáló által csoportosítva.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Az Essbase-kiszolgáló által csoportosított kockák tábláját adja vissza egy, a(z) <code>url</code> APS-kiszolgálón futó Essbase-példányból. A(z) <code>options</code> választható rekordparaméter megadásával szabályozhatja az alábbi beállításokat:    <ul><li><code>CommandTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a kiszolg&#225;l&#243;oldali lek&#233;rdez&#233;s mennyi ideig futhat, mielőtt megszakadna. Az alap&#233;rtelmezett &#233;rt&#233;k t&#237;z perc.</li></ul>



## Category
Accessing data
