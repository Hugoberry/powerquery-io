---
title: Teradata.Database
---

# Teradata.Database


Tiek atgriezta SQL tabulu un skatu tabula no Teradata datu bāzes.


## Syntax

```powerquery
Teradata.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Atgriež tabulu ar SQL tabulām un skatiem no Teradata datu bāzes serverī `server`. Kopā ar serveri pēc izvēles var norādīt portu, atdalot to ar kolu. Var norādīt neobligātu ieraksta parametru `options`, lai pārvaldītu tālāk minētās opcijas.

-   `CreateNavigationProperties` : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).
-   `NavigationPropertyNameGenerator` : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.
-   `Query` : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.
-   `CommandTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.
-   `ConnectionTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.
-   `HierarchicalNavigation` : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).

Ieraksta parametrs tiek norādīts, piemēram, šādi: \[option1 = value1, option2 = value2...\] vai \[Query = "select ..."\].



## Category
Accessing data
