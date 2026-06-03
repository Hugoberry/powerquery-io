---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importare dati da un database Google BigQuery usando Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella che elenca i progetti disponibili in Google BigQuery usando Microsoft Entra ID per `ID progetto di fatturazione`. È possibile specificare un parametro del record facoltativo, `options`, per controllare le opzioni seguenti:

-   `ConnectionTimeout`: valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito è il valore di timeout della connessione ODBC.
-   `CommandTimeout`: valore che controlla quanto può durare l'esecuzione della query sul lato server prima che venga annullata.
-   `UseStorageApi`: valore che specifica se usare l'API di archiviazione BigQuery per i set di risultati di grandi dimensioni. Il valore predefinito è true e indica l'utilizzo dell'API di archiviazione. Impostarlo su false per non usare l'API di archiviazione
-   `AudienceUri`: URI del gruppo di destinatari che il driver ODBC può usare per le richieste di scambio di token. Questo campo deve essere un URI completo (ad esempio //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) in cui pool\_id è un nome univoco a livello globale che identifica il pool del personale.

Il parametro del record viene specificato come \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Elencare i progetti disponibili in Google BigQuery usando Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



