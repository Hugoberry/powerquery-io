---
title: Teradata.Database
---

# Teradata.Database


## Description

Tiek atgriezta SQL tabulu un skatu tabula no Teradata datu bāzes.


## Syntax

```powerquery
Teradata.Database(
    server as text,
    optional options as record
) as table
```


## Details

Atgriež servera <code>server</code> Teradata datu bāzē pieejamo SQL tabulu un skatu tabulu. Kopā ar serveri pēc izvēles var norādīt portu, atdalot to ar kolu. Var norādīt neobligātu ieraksta parametru <code>options</code>, lai pārvaldītu tālāk minētās opcijas.    <ul><li><code>CreateNavigationProperties</code> : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.</li><li><code>Query</code> : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.</li><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.</li><li><code>ConnectionTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li><li><code>HierarchicalNavigation</code> : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).</li></ul>    Ieraksta parametrs tiek norādīts, piemēram, šādi: [option1 = value1, option2 = value2...] vai [Query = "select ..."].    



## Category
Accessing data
