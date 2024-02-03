---
title: SapHana.Database
---

# SapHana.Database


## Description

Returnează pachetele dintr-o bază de date SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Returnează un tabel de pachete multidimensionale de la baza de date SAP HANA <code>server</code>. Poate fi specificat un parametru de înregistrare opțional, <code>options</code>, pentru a controla următoarele opțiuni:    <ul><li><code>Query</code> : O interogare SQL nativă utilizată pentru a prelua date. Dacă interogarea produse mai multe seturi de rezultate, doar primul va fi returnat.</li><li><code>Distribution</code> : Un element SapHanaDistribution care setează valoarea proprietății „Distribuire” din șirul de conexiune. Rutarea instrucțiunilor este metoda de a evalua nodul de server corect al unui sistem distribuit &#238;nainte de a executa instrucțiunea. Valoarea implicită este SapHanaDistribution.All.</li><li><code>Implementation</code> : Specifică implementarea conectorului SAP HANA care să se utilizeze.</li><li><code>EnableColumnBinding</code> : Leagă variabilele la coloanele unui set de rezultate SAP Hana la preluarea datelor. Poate &#238;mbunătăți performanța cu prețul unei utilizări ușor mai mari a memoriei. Valoarea implicită este fals.</li><li><code>ConnectionTimeout</code> : O durată care controlează c&#226;t timp se așteaptă &#238;nainte de a abandona o &#238;ncercare de a face o conexiune la server. Valoarea implicită este de 15 secunde.</li><li><code>CommandTimeout</code> : O durată care controlează c&#226;t timp poate rula interogarea de partea serverului &#238;nainte să fie anulată. Valoarea implicită este de zece minute.</li></ul>    



## Category
Accessing data
