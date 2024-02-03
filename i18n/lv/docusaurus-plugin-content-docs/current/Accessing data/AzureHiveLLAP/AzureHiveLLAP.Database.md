---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Importējiet datus no HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Tiek atgriezts HDInsight Interactive Query tabulu saraksts, kurš norādīts HDInsight Interactive Query serverī <code>server</code> esošajā datu bāzē <code>database</code>. Kopā ar serveri pēc izvēles var norādīt porta numuru, atdalot to ar kolu. Var norādīt neobligātu parametru <code>options</code>, lai pārvaldītu tālāk norādītās opcijas.<ul>        <li><code>ConnectionTimeout</code>: ilgums, kas tiek izmantots, lai pārvaldītu, cik ilgi jāgaida, pirms tiek atmests mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li>        <li><code>CommandTimeout</code>: ilgums, kas tiek izmantots, lai pārvaldītu, cik ilgi drīkst izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir atkarīga no draivera.</li></ul>Parametrs <code>options</code> tiek norādīts šādi: [option1 = value1, option2 = value2...].


