---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


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


## Remarks

Returnerar en lista med tabeller från Hive LLAP som anges av `databasen` på Hive LLAP-`servern` med hjälp av det valda `protokollet`. Om du vill kan du ange ett portnummer med servern, åtskilt med ett kolon. Thrift Transport Protocol är en uppräknad typ med värdena Standard, HTTP. Du kan ange en valfri `alternativ`parameter om du vill kontrollera följande alternativ:

-   `ConnectionTimeout`: En varaktighet som anger hur lång väntetiden ska vara innan försöket att ansluta till servern avbryts. Standardvärdet är drivrutinsberoende.
-   `CommandTimeout`: En varaktighet som anger hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är drivrutinsberoende.

`Alternativ`parametern anges som \[option1 = value1, option2 = value2...\].


