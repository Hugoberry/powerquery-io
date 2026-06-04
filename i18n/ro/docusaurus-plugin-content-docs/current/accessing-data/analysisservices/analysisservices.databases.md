---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Returnează bazele de date Analysis Services de la o gazdă anume.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Returnează bazele de date dintr-o instanță Analysis Services, `server`. Poate fi furnizat un parametru de înregistrare opțional, `options`, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `TypedMeasureColumns` : O valoare logică ce indică dacă tipurile specificate în modelul tabelar sau multidimensional va fi utilizat pentru tipurile de coloane cu măsură adăugată. Atunci când este setată la false, „numărul” tipului va fi utilizat pentru toate coloanele cu măsuri. Valoarea implicită pentru această opțiune este false.
-   `Culture` : Un nume de cultură care specifică cultura datelor. Acesta corespunde cu proprietatea șirului de conexiune „Identificator setări regionale”.
-   `CommandTimeout` : O durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată. Valoarea implicită depinde de driver.
-   `ConnectionTimeout` : O durată care controlează cât timp se așteaptă înainte de a abandona o încercare de a face o conexiune la server. Valoarea implicită depinde de driver.
-   `SubQueries` : Un număr (0, 1 sau 2) care setează valoarea proprietății „SubQueries” în șirul de conexiune. Aceasta controlează comportamentul membrilor calculați la subselectări sau subcuburi. (Valoarea implicită este 2).
-   `Implementation`



## Category
Accessing data
