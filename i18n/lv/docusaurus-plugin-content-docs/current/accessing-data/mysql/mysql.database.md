---
title: MySQL.Database
---

# MySQL.Database


Tiek atgriezta MySQL datu bāzē pieejamo SQL tabulu, skatu un saglabāto skalāro funkciju tabula.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Atgriež servera `server` MySQL datu bāzē pieejamo SQL tabulu, skatu un iekļauto skalāro funkciju tabulu datu bāzes instancē `database`. Kopā ar serveri pēc izvēles var norādīt portu, atdalot to ar kolu. Var norādīt neobligātu ieraksta parametru `options`, lai pārvaldītu tālāk minētās opcijas.

-   `Encoding` : TextEncoding vērtība, kas norāda rakstzīmju kopu, ko izmanto, lai šifrētu visus uz serveri nosūtītos vaicājumus (noklusējuma vērtība ir Null).
-   `CreateNavigationProperties` : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).
-   `NavigationPropertyNameGenerator` : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.
-   `Query` : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.
-   `CommandTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.
-   `ConnectionTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.
-   `TreatTinyAsBoolean` : Loģiskā funkcija (true/false), kura nosaka, vai tipa tinyint kolonnas serverī ir jāapstrādā kā loģiskās vērtības. Noklusējuma vērtība ir “true”.
-   `OldGuids` : Loģiskā funkcija (true/false), kura nosaka, vai kā GUID objektus apstrādāt tipa char(36) kolonnas (ja vērtība ir “false”) vai tipa binary(16) kolonnas (ja vērtība ir “true”). Noklusējuma vērtība ir “false”.
-   `ReturnSingleDatabase` : Loģiskā funkcija (true/false), kura nosaka, vai ir jāatgriež visu datu bāzu visas tabulas (ja vērtība ir “false”) vai norādītās datu bāzes tabulas un skati (ja vērtība ir “true”). Noklusējuma vērtība ir “false”.
-   `HierarchicalNavigation` : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).

Ieraksta parametrs tiek norādīts, piemēram, šādi: \[option1 = value1, option2 = value2...\] vai \[Query = "select ..."\].



## Category
Accessing data
