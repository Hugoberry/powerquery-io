---
title: Informix.Database
---

# Informix.Database


Atgriež tabulu ar Informix datu bāzē pieejamajām SQL tabulām un skatiem.


## Syntax

```powerquery
Informix.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta servera `server` Informix datu bāzē pieejamo SQL tabulu un skatu tabula datu bāzes instancē `database`. Kopā ar serveri pēc izvēles var norādīt portu, atdalot to ar kolu. Lai pārvaldītu tālāk minētās opcijas, var norādīt neobligātu ieraksta parametru `options`.Ieraksta parametrs tiek norādīts šādi:

-   `CreateNavigationProperties` : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).
-   `NavigationPropertyNameGenerator` : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.
-   `Query` : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.
-   `CommandTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.
-   `ConnectionTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.
-   `HierarchicalNavigation` : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).

Ieraksta parametrus ir norādīts kā \[value1 = option2, value2 = value2...\] vai \[Query = "select ..."\], piemēram.



## Category
Accessing data
