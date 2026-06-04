---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Tiek atgriezta tabula, kurā ir ietverti daudzdimensiju kubi vai tabulveida modeļi no analīzes pakalpojumu datu bāzes.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta tabula, kurā ir ietverti daudzdimensiju kubi vai tabulveida modeļi no analīzes pakalpojumu datu bāzes `database` serverī `server`. Var norādīt neobligātu ieraksta parametru `options`, lai kontrolētu tālāk norādītās opcijas.

-   `Query` : Iekšējs MDX vaicājums, ko izmanto datu izgūšanai.
-   `TypedMeasureColumns` : Loģiska vērtība, kas norāda, vai daudzdimensiju vai tabulveida modelī norādītie veidi tiks izmantoti pievienotajām mēru kolonnām. Ja ir iestatīta vērtība “false”, visām mēru kolonnām tiks izmantots veids “number”. Šīs opcijas noklusējuma vērtība ir “false”.
-   `Culture` : Kultūras nosaukums, kas norāda datu kultūru. Šī vērtība atbilst savienojuma virknes rekvizītam Lokālais identifikators.
-   `CommandTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir atkarīga no draivera.
-   `ConnectionTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.
-   `SubQueries` : Skaitlis (0, 1 vai 2), ar kuru tiek iestatīta rekvizīta SubQueries vērtība savienojuma virknē. Tas nodrošina aprēķināto elementu darbības pārvaldību apakšatlasēs un apakškubos. (Noklusējuma vērtība ir 2.)
-   `Implementation`



## Category
Accessing data
