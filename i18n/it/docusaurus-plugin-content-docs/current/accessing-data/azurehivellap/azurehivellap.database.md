---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Importa i dati da HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Restituisce un elenco di tabelle di HDInsight Interactive Query specificate dal `database` nel `server` HDInsight Interactive Query. Facoltativamente con il server è possibile specificare un numero di porta, separato da due punti. È possibile specificare un parametro facoltativo `options` per controllare le opzioni seguenti:

-   `ConnectionTimeout`: valore che controlla il tempo di attesa prima che un tentativo di connessione al server venga abbandonato. Il valore predefinito dipende dal driver.
-   `CommandTimeout`: valore che controlla la durata di esecuzione prima che la query sul lato server venga annullata. Il valore predefinito dipende dal driver.

Il parametro `options` viene specificato come \[opzione1 = valore1, opzione2 = valore2...\].


