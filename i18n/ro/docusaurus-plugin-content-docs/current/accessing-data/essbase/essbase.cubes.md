---
title: Essbase.Cubes
---

# Essbase.Cubes


Returnează cuburile dintr-o instanță Essbase, grupate după serverul Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel de cuburi grupate după serverul Essbase dintr-o instanță Essbase de pe serverul APS `url`. Un parametru opțional de înregistrare, `options`, poate fi specificat pentru a controla următoarele opțiuni:

-   `CommandTimeout` : O durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată. Valoarea implicită este de zece minute.



## Category
Accessing data
