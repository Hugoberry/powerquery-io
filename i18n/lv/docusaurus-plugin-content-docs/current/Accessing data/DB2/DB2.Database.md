---
title: DB2.Database
---

# DB2.Database


## Description

Tiek atgriezta DB2 datu bāzē pieejamo SQL tabulu un skatu tabula.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Tiek atgriezta servera <code>server</code> DB2 datu bāzē pieejamo SQL tabulu un skatu tabula datu bāzes instancē <code>database</code>. Kopā ar serveri pēc izvēles var norādīt portu, atdalot to ar kolu. Lai pārvaldītu tālāk minētās opcijas, var norādīt neobligātu ieraksta parametru <code>options</code>.     <ul><li><code>CreateNavigationProperties</code> : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.</li><li><code>Query</code> : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.</li><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.</li><li><code>ConnectionTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li><li><code>HierarchicalNavigation</code> : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).</li><li><code>Implementation</code> : Norāda, kura iekšējās datu bāzes nodrošinātāja implementācija jāizmanto. Derīgās vērtības ir “IBM” un “Microsoft”.</li><li><code>BinaryCodePage</code> : Skaitlis, kas tiek izmantots CCSID (Coded Character Set Identifier&#160;— kodēto rakstzīmju kopas identifikators), ko izmanto, lai dekodētu DB2&#160;FOR&#160;BIT bināros datus uz rakstzīmju virknēm. Ir spēkā tad, ja parametra Implementation vērtība ir Microsoft. Lai atspējotu konvertēšanu, iestatiet vērtību&#160;0 (noklusējuma vērtība). Lai konvertētu, pamatojoties uz datu bāzes kodējumu, iestatiet vērtību&#160;1. Lai konvertētu uz lietojumprogrammas kodējumu, iestatiet citu CCSID&#160;skaitli.</li><li><code>PackageCollection</code> : Norāda pakotņu kolekcijas virknes vērtību (noklusējuma vērtība ir NULLID), lai iespējotu koplietoto pakotņu lietošanu, kas nepieciešama SQL priekšrakstu apstrādāšanai. Ir spēkā tad, ja parametra Implementation vērtība ir Microsoft.</li><li><code>UseDb2ConnectGateway</code> : Norāda, vai savienojums tiek veidots, izmantojot DB2&#160;Connect vārteju. Spēkā tad, ja lauka “Ieviešana” vērtība ir “Microsoft”.</li></ul>    Ieraksta parametrs tiek norādīts šādi: [option1 = value1, option2 = value2...] or [Query = "select ..."] for example.    



## Category
Accessing data
