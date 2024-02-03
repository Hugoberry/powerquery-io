---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Date cub import/DirectQuery de la un AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Returnează datele cub de la AtScale pe serverul <code>server</code>. Un parametru opțional de înregistrare, <code>options</code>, poate fi specificat pentru a controla următoarele opțiuni:<ul>        <li><code>TypedMeasureColumns</code>: o valoare logică care precizează dacă tipurile specificate în modelul tabelar sau multidimensional vor fi utilizate pentru tipurile de coloane de măsură adăugate. Când este setat la false, va fi utilizat tipul „number” pentru toate coloanele de măsură. Valoarea implicită pentru această opțiune este false.</li>        <li><code>CommandTimeout</code>: o durată (în secunde) care controlează cât timp poate rula interogarea pe partea serverului, înainte de a fi anulată. Valoarea implicită este dependentă de driver. </li>        <li><code>ConnectionTimeout</code>: o durată (în secunde) care controlează cât timp se așteaptă înainte de abandonarea unei încercări de a face o conexiune la server. Valoarea implicită este dependentă de driver. </li></ul>Parametrul de înregistrare este specificat ca [opțiune1 = valoare1, opțiune2 = valoare2...].


