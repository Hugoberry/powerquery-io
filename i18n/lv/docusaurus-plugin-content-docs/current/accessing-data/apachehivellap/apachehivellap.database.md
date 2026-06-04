---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


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


## Remarks

Tiek atgriezts Hive LLAP tabulu saraksts, kurš norādīts Hive LLAP serverī `server` esošajā datu bāzē `database`, izmantojot atlasīto protokolu `protocol`. Kopā ar serveri pēc izvēles var norādīt porta numuru, atdalot to ar kolu. Protokols Thrift Transport Protocol (TTP) ir uzskaitījuma tips ar vērtībām “Standard”, “HTTP”. Var norādīt neobligātu parametru `options`, lai pārvaldītu tālāk norādītās opcijas.

-   `ConnectionTimeout`: ilgums, kas tiek izmantots, lai pārvaldītu, cik ilgi jāgaida, pirms tiek atmests mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.
-   `CommandTimeout`: ilgums, kas tiek izmantots, lai pārvaldītu, cik ilgi drīkst izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir atkarīga no draivera.

Parametrs `options` tiek norādīts šādi: \[option1 = value1, option2 = value2...\].


