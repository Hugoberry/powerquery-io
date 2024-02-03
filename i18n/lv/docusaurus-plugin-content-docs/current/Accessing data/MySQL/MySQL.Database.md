---
title: MySQL.Database
---

# MySQL.Database


## Description

Tiek atgriezta MySQL datu bāzē pieejamo SQL tabulu, skatu un saglabāto skalāro funkciju tabula.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Atgriež servera <code>server</code>MySQL datu bāzē pieejamo SQL tabulu, skatu un iekļauto skalāro funkciju tabulu datu bāzes instancē <code>database</code>. Kopā ar serveri pēc izvēles var norādīt portu, atdalot to ar kolu. Var norādīt neobligātu ieraksta parametru <code>options</code>, lai pārvaldītu tālāk minētās opcijas.    <ul><li><code>Encoding</code> : TextEncoding vērtība, kas norāda rakstzīmju kopu, ko izmanto, lai šifrētu visus uz serveri nosūtītos vaicājumus (noklusējuma vērtība ir Null).</li><li><code>CreateNavigationProperties</code> : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.</li><li><code>Query</code> : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.</li><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.</li><li><code>ConnectionTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li><li><code>TreatTinyAsBoolean</code> : Loģiskā funkcija (true/false), kura nosaka, vai tipa tinyint kolonnas serverī ir jāapstrādā kā loģiskās vērtības. Noklusējuma vērtība ir “true”.</li><li><code>OldGuids</code> : Loģiskā funkcija (true/false), kura nosaka, vai kā GUID objektus apstrādāt tipa char(36) kolonnas (ja vērtība ir “false”) vai tipa binary(16) kolonnas (ja vērtība ir “true”). Noklusējuma vērtība ir “false”.</li><li><code>ReturnSingleDatabase</code> : Loģiskā funkcija (true/false), kura nosaka, vai ir jāatgriež visu datu bāzu visas tabulas (ja vērtība ir “false”) vai norādītās datu bāzes tabulas un skati (ja vērtība ir “true”). Noklusējuma vērtība ir “false”.</li><li><code>HierarchicalNavigation</code> : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).</li></ul>    Ieraksta parametrs tiek norādīts, piemēram, šādi: [option1 = value1, option2 = value2...] vai [Query = "select ..."].    



## Category
Accessing data
