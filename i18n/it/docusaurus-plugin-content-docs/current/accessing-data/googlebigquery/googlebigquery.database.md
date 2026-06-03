---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importa i dati da un database di Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Restituisce una tabella che elenca i progetti disponibili in Google BigQuery. È possibile specificare un parametro del record facoltativo, `options`, per controllare le opzioni seguenti:

-   `ConnectionTimeout`: valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito è il valore di timeout della connessione ODBC.
-   `CommandTimeout`: valore che controlla quanto può durare l'esecuzione della query sul lato server prima che venga annullata.
-   `BillingProject`: ID progetto di fatturazione. Il valore predefinito è il primo progetto disponibile.
-   `UseStorageApi`: valore che specifica se usare l'API di archiviazione BigQuery per i set di risultati di grandi dimensioni. Il valore predefinito è true e indica l'utilizzo dell'API di archiviazione. Impostarlo su false per non usare l'API di archiviazione

Il parametro del record viene specificato come \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Elenca i progetti disponibili in Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



