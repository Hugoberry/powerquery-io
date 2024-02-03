---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

Importējiet datus no Hive LLAP


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Details

Tiek atgriezts Hive LLAP tabulu saraksts, kurš norādīts Hive LLAP serverī <code>server</code> esošajā datu bāzē <code>database</code>, izmantojot atlasīto protokolu <code>protocol</code>. Kopā ar serveri pēc izvēles var norādīt porta numuru, atdalot to ar kolu. Protokols Thrift Transport Protocol (TTP) ir uzskaitījuma tips ar vērtībām “Standard”, “HTTP”. Var norādīt neobligātu parametru <code>options</code>, lai pārvaldītu tālāk norādītās opcijas.<ul>        <li><code>ConnectionTimeout</code>: ilgums, kas tiek izmantots, lai pārvaldītu, cik ilgi jāgaida, pirms tiek atmests mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li>        <li><code>CommandTimeout</code>: ilgums, kas tiek izmantots, lai pārvaldītu, cik ilgi drīkst izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir atkarīga no draivera.</li></ul>Parametrs <code>options</code> tiek norādīts šādi: [option1 = value1, option2 = value2...].


