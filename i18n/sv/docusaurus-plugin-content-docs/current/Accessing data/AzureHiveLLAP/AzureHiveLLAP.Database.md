---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Importera data från en interaktiv HDInsight-fråga


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returnerar en lista med tabeller från en interaktiv HDInsight-fråga som anges av <code>databasen</code> på <code>servern</code> för interaktiva HDInsight-frågor. Om du vill kan du ange ett portnummer med servern, åtskilt med ett kolon. Thrift Transport Protocol är en uppräknad typ med värdena Binary, SASL och HTTP. Du kan ange en valfri <code>alternativparameter</code> om du vill kontrollera följande alternativ: <ul>        <li><code>ConnectionTimeout</code>: En varaktighet som anger hur lång väntetiden ska vara innan försöket att ansluta till servern avbryts. Standardvärdet är drivrutinsberoende. </li>        <li><code>CommandTimeout</code>: En varaktighets som anger hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är drivrutinsberoende. </li></ul><code>Alternativparametern</code> anges som [option1 = value1, option2 = value2...].


