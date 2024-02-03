---
title: AnalysisServices.Database
---

# AnalysisServices.Database


## Description

Tiek atgriezta tabula, kurā ir ietverti daudzdimensiju kubi vai tabulveida modeļi no analīzes pakalpojumu datu bāzes.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Tiek atgriezta tabula, kurā ir ietverti daudzdimensiju kubi vai tabulveida modeļi no analīzes pakalpojumu datu bāzes <code>database</code> serverī <code>server</code>. Var norādīt neobligātu ieraksta parametru <code>options</code>, lai kontrolētu tālāk norādītās opcijas.    <ul><li><code>Query</code> : Iekšējs MDX vaicājums, ko izmanto datu izgūšanai.</li><li><code>TypedMeasureColumns</code> : Loģiska vērtība, kas norāda, vai daudzdimensiju vai tabulveida modelī norādītie veidi tiks izmantoti pievienotajām mēru kolonnām. Ja ir iestatīta vērtība “false”, visām mēru kolonnām tiks izmantots veids “number”. Šīs opcijas noklusējuma vērtība ir “false”.</li><li><code>Culture</code> : Kultūras nosaukums, kas norāda datu kultūru. Šī vērtība atbilst savienojuma virknes rekvizītam Lokālais identifikators.</li><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir atkarīga no draivera.</li><li><code>ConnectionTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li><li><code>SubQueries</code> : Skaitlis (0, 1 vai 2), ar kuru tiek iestatīta rekvizīta SubQueries vērtība savienojuma virknē. Tas nodrošina aprēķināto elementu darbības pārvaldību apakšatlasēs un apakškubos. (Noklusējuma vērtība ir&#160;2.)</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
