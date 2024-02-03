---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

Importera data från en Hive-LLAP


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

Returnerar en lista med tabeller från Hive LLAP som anges av <code>databasen</code> på Hive LLAP-<code>servern</code> med hjälp av det valda <code>protokollet</code>. Om du vill kan du ange ett portnummer med servern, åtskilt med ett kolon. Thrift Transport Protocol är en uppräknad typ med värdena Standard, HTTP. Du kan ange en valfri <code>alternativ</code>parameter om du vill kontrollera följande alternativ:<ul>        <li><code>ConnectionTimeout</code>: En varaktighet som anger hur lång väntetiden ska vara innan försöket att ansluta till servern avbryts. Standardvärdet är drivrutinsberoende.</li>        <li><code>CommandTimeout</code>: En varaktighet som anger hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är drivrutinsberoende.</li></ul><code>Alternativ</code>parametern anges som [option1 = value1, option2 = value2...].


