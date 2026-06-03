---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Importera data från en interaktiv HDInsight-fråga


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerar en lista med tabeller från en interaktiv HDInsight-fråga som anges av `databasen` på `servern` för interaktiva HDInsight-frågor. Om du vill kan du ange ett portnummer med servern, åtskilt med ett kolon. Thrift Transport Protocol är en uppräknad typ med värdena Binary, SASL och HTTP. Du kan ange en valfri `alternativparameter` om du vill kontrollera följande alternativ:

-   `ConnectionTimeout`: En varaktighet som anger hur lång väntetiden ska vara innan försöket att ansluta till servern avbryts. Standardvärdet är drivrutinsberoende.
-   `CommandTimeout`: En varaktighets som anger hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är drivrutinsberoende.

`Alternativparametern` anges som \[option1 = value1, option2 = value2...\].


