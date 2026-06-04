---
title: SapHana.Database
---

# SapHana.Database


Returnează pachetele dintr-o bază de date SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel de pachete multidimensionale de la baza de date SAP HANA `server`. Poate fi specificat un parametru de înregistrare opțional, `options`, pentru a controla următoarele opțiuni:

-   `Query` : O interogare SQL nativă utilizată pentru a prelua date. Dacă interogarea produse mai multe seturi de rezultate, doar primul va fi returnat.
-   `Distribution` : Un element SapHanaDistribution care setează valoarea proprietății „Distribuire” din șirul de conexiune. Rutarea instrucțiunilor este metoda de a evalua nodul de server corect al unui sistem distribuit înainte de a executa instrucțiunea. Valoarea implicită este SapHanaDistribution.All.
-   `Implementation` : Specifică implementarea conectorului SAP HANA care să se utilizeze.
-   `EnableColumnBinding` : Leagă variabilele la coloanele unui set de rezultate SAP Hana la preluarea datelor. Poate îmbunătăți performanța cu prețul unei utilizări ușor mai mari a memoriei. Valoarea implicită este fals.
-   `ConnectionTimeout` : O durată care controlează cât timp se așteaptă înainte de a abandona o încercare de a face o conexiune la server. Valoarea implicită este de 15 secunde.
-   `CommandTimeout` : O durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată. Valoarea implicită este de zece minute.



## Category
Accessing data
