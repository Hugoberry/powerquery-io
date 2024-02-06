---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Importa i dati da un&#39;istanza di Hive LLAP


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

Restituisce un elenco di tabelle di Hive LLAP specificate dal <code>database</code> nel <code>server</code> Hive LLAP usando il <code>protocollo</code> selezionato. Facoltativamente con il server è possibile specificare un numero di porta, separato da due punti. Il protocollo di trasporto Thrift è un tipo enumerato i cui valori sono "Standard", "HTTP". È possibile specificare un parametro facoltativo <code>options</code> per controllare le opzioni seguenti:<ul>        <li><code>ConnectionTimeout</code>: valore che controlla il tempo di attesa prima che un tentativo di connessione al server venga abbandonato. Il valore predefinito dipende dal driver.</li>        <li><code>CommandTimeout</code>: valore che controlla la durata di esecuzione prima che la query sul lato server venga annullata. Il valore predefinito dipende dal driver.</li></ul>Il parametro <code>options</code> viene specificato come [opzione1 = valore1, opzione2 = valore2...].


