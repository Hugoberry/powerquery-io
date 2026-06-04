---
title: DB2.Database
---

# DB2.Database


Tiek atgriezta DB2 datu bāzē pieejamo SQL tabulu un skatu tabula.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta servera `server` DB2 datu bāzē pieejamo SQL tabulu un skatu tabula datu bāzes instancē `database`. Kopā ar serveri pēc izvēles var norādīt portu, atdalot to ar kolu. Lai pārvaldītu tālāk minētās opcijas, var norādīt neobligātu ieraksta parametru `options`. Ieraksta parametrs tiek norādīts šādi:

-   `CreateNavigationProperties` : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).
-   `NavigationPropertyNameGenerator` : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.
-   `Query` : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.
-   `CommandTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.
-   `ConnectionTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.
-   `HierarchicalNavigation` : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).
-   `Implementation` : Norāda, kura iekšējās datu bāzes nodrošinātāja implementācija jāizmanto. Derīgās vērtības ir “IBM” un “Microsoft”.
-   `BinaryCodePage` : Skaitlis, kas tiek izmantots CCSID (Coded Character Set Identifier — kodēto rakstzīmju kopas identifikators), ko izmanto, lai dekodētu DB2 FOR BIT bināros datus uz rakstzīmju virknēm. Ir spēkā tad, ja parametra Implementation vērtība ir Microsoft. Lai atspējotu konvertēšanu, iestatiet vērtību 0 (noklusējuma vērtība). Lai konvertētu, pamatojoties uz datu bāzes kodējumu, iestatiet vērtību 1. Lai konvertētu uz lietojumprogrammas kodējumu, iestatiet citu CCSID skaitli.
-   `PackageCollection` : Norāda pakotņu kolekcijas virknes vērtību (noklusējuma vērtība ir NULLID), lai iespējotu koplietoto pakotņu lietošanu, kas nepieciešama SQL priekšrakstu apstrādāšanai. Ir spēkā tad, ja parametra Implementation vērtība ir Microsoft.
-   `UseDb2ConnectGateway` : Norāda, vai savienojums tiek veidots, izmantojot DB2 Connect vārteju. Spēkā tad, ja lauka “Ieviešana” vērtība ir “Microsoft”.

Ieraksta parametrus ir norādīts kā \[option1 = value1, option2 = value2...\] vai \[Query = "select ..."\], piemēram.



## Category
Accessing data
