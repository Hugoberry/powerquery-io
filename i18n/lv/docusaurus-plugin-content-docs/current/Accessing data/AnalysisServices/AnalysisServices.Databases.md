---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

Tiek atgrieztas Analysis Services datubāzes konkrētā resursdatorā.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Tiek atgrieztas datu bāzes analīzes pakalpojumu instancē <code>server</code>. Lai precizētu papildu rekvizītus, var norādīt neobligātu ieraksta parametru <code>options</code>. Ierakstā var ietvert tālāk norādītos laukus.    <ul><li><code>TypedMeasureColumns</code> : Loģiska vērtība, kas norāda, vai daudzdimensiju vai tabulveida modelī norādītie veidi tiks izmantoti pievienotajām mēru kolonnām. Ja ir iestatīta vērtība “false”, visām mēru kolonnām tiks izmantots veids “number”. Šīs opcijas noklusējuma vērtība ir “false”.</li><li><code>Culture</code> : Kultūras nosaukums, kas norāda datu kultūru. Šī vērtība atbilst savienojuma virknes rekvizītam Lokālais identifikators.</li><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir atkarīga no draivera.</li><li><code>ConnectionTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li><li><code>SubQueries</code> : Skaitlis (0, 1 vai 2), ar kuru tiek iestatīta rekvizīta SubQueries vērtība savienojuma virknē. Tas nodrošina aprēķināto elementu darbības pārvaldību apakšatlasēs un apakškubos. (Noklusējuma vērtība ir&#160;2.)</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
