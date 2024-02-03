---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Returnează cuburile dintr-o instanță Essbase, grupate după serverul Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Returnează un tabel de cuburi grupate după serverul Essbase dintr-o instanță Essbase de pe serverul APS <code>url</code>. Un parametru opțional de înregistrare, <code>options</code>, poate fi specificat pentru a controla următoarele opțiuni:    <ul><li><code>CommandTimeout</code> : O durată care controlează c&#226;t timp poate rula interogarea de partea serverului &#238;nainte să fie anulată. Valoarea implicită este de zece minute.</li></ul>



## Category
Accessing data
