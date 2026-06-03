---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Importa i dati da un'istanza di Hive LLAP


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

Restituisce un elenco di tabelle di Hive LLAP specificate dal `database` nel `server` Hive LLAP usando il `protocollo` selezionato. Facoltativamente con il server è possibile specificare un numero di porta, separato da due punti. Il protocollo di trasporto Thrift è un tipo enumerato i cui valori sono "Standard", "HTTP". È possibile specificare un parametro facoltativo `options` per controllare le opzioni seguenti:

-   `ConnectionTimeout`: valore che controlla il tempo di attesa prima che un tentativo di connessione al server venga abbandonato. Il valore predefinito dipende dal driver.
-   `CommandTimeout`: valore che controlla la durata di esecuzione prima che la query sul lato server venga annullata. Il valore predefinito dipende dal driver.

Il parametro `options` viene specificato come \[opzione1 = valore1, opzione2 = valore2...\].


