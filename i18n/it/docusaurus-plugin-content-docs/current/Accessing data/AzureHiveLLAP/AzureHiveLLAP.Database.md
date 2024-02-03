---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Importa i dati da HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Restituisce un elenco di tabelle di HDInsight Interactive Query specificate dal <code>database</code> nel <code>server</code> HDInsight Interactive Query. Facoltativamente con il server è possibile specificare un numero di porta, separato da due punti. È possibile specificare un parametro facoltativo <code>options</code> per controllare le opzioni seguenti:<ul>        <li><code>ConnectionTimeout</code>: valore che controlla il tempo di attesa prima che un tentativo di connessione al server venga abbandonato. Il valore predefinito dipende dal driver.</li>        <li><code>CommandTimeout</code>: valore che controlla la durata di esecuzione prima che la query sul lato server venga annullata. Il valore predefinito dipende dal driver.</li></ul>Il parametro <code>options</code> viene specificato come [opzione1 = valore1, opzione2 = valore2...].


