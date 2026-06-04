---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Returnează suitele de rapoarte din Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Returnează un tabel de pachete multidimensionale din Adobe Analytics. Se poate specifica un parametru de înregistrare opțional, `options`, pentru a controla următoarele opțiuni:

-   `HierarchicalNavigation` : O valoare logică (true/false) care setează dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este false).
-   `MaxRetryCount` : Numărul de reîncercări de efectuat atunci când sondați după rezultatul interogării. Valoarea implicită este de 120.
-   `RetryInterval` : Durata de timp dintre reîncercări. Valoarea implicită este de 1 secundă.
-   `Implementation` : Specifică versiunea API Adobe Analytics. Valorile valide sunt: „2.0”. Valoarea implicită utilizează API versiunea 1.4.



## Category
Accessing data
