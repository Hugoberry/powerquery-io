---
title: SapHana.Database
---

# SapHana.Database


Atgriež paketes SAP HANA datu bāzē.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta daudzdimensiju pakotņu tabula no SAP HANA datu bāzes `server`. Var norādīt neobligātu ieraksta parametru `options`, lai kontrolētu tālāk norādītās opcijas.

-   `Query` : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.
-   `Distribution` : SapHanaDistribution, kas nosaka rekvizīta “Izplatīšana” vērtību savienojuma virknē. Priekšrakstu maršrutēšana ir veids, kā novērtēt pareizo servera mezglu izplatītajai sistēmai pirms priekšraksta izpildes. Noklusējuma vērtība ir SapHanaDistribution.All.
-   `Implementation` : Norāda, kuru SAP Hana savienotāja implementāciju izmantot.
-   `EnableColumnBinding` : Ienesot datus, mainīgos saista SAP Hana rezultātu kopas kolonnām. Var uzlabot veiktspēju ar mazliet lielāku atmiņas lietojumu. Noklusējuma vērtība ir False.
-   `ConnectionTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir 15 sekundes.
-   `CommandTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.



## Category
Accessing data
