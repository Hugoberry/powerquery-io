---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Returnează un tabel de cuburi multidimensionale sau modele tabelare din baza de date Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel care conține cuburi multidimensionale sau modele tabelare de la baza de date Analysis Services `database` pe serverul `server`. Poate fi specificat un parametru de înregistrare opțional, `options`, pentru a controla următoarele opțiuni:

-   `Query` : O interogare MDX nativă utilizată pentru a prelua date.
-   `TypedMeasureColumns` : O valoare logică ce indică dacă tipurile specificate în modelul tabelar sau multidimensional va fi utilizat pentru tipurile de coloane cu măsură adăugată. Atunci când este setată la false, „numărul” tipului va fi utilizat pentru toate coloanele cu măsuri. Valoarea implicită pentru această opțiune este false.
-   `Culture` : Un nume de cultură care specifică cultura datelor. Acesta corespunde cu proprietatea șirului de conexiune „Identificator setări regionale”.
-   `CommandTimeout` : O durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată. Valoarea implicită depinde de driver.
-   `ConnectionTimeout` : O durată care controlează cât timp se așteaptă înainte de a abandona o încercare de a face o conexiune la server. Valoarea implicită depinde de driver.
-   `SubQueries` : Un număr (0, 1 sau 2) care setează valoarea proprietății „SubQueries” în șirul de conexiune. Aceasta controlează comportamentul membrilor calculați la subselectări sau subcuburi. (Valoarea implicită este 2).
-   `Implementation`



## Category
Accessing data
