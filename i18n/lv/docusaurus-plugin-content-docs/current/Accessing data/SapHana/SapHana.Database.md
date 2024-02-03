---
title: SapHana.Database
---

# SapHana.Database


## Description

Atgriež paketes SAP HANA datu bāzē.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Tiek atgriezta daudzdimensiju pakotņu tabula no SAP HANA datu bāzes <code>server</code>. Var norādīt neobligātu ieraksta parametru <code>options</code>, lai kontrolētu tālāk norādītās opcijas.    <ul><li><code>Query</code> : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.</li><li><code>Distribution</code> : SapHanaDistribution, kas nosaka rekvizīta “Izplatīšana” vērtību savienojuma virknē. Priekšrakstu maršrutēšana ir veids, kā novērtēt pareizo servera mezglu izplatītajai sistēmai pirms priekšraksta izpildes. Noklusējuma vērtība ir SapHanaDistribution.All.</li><li><code>Implementation</code> : Norāda, kuru SAP Hana savienotāja implementāciju izmantot.</li><li><code>EnableColumnBinding</code> : Ienesot datus, mainīgos saista SAP Hana rezultātu kopas kolonnām. Var uzlabot veiktspēju ar mazliet lielāku atmiņas lietojumu. Noklusējuma vērtība ir False.</li><li><code>ConnectionTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir 15&#160;sekundes.</li><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.</li></ul>    



## Category
Accessing data
