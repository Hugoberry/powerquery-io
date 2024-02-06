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

      Restituisce una tabella che elenca i progetti disponibili in Google BigQuery. È possibile specificare un parametro di record facoltativo, <code>options</code>, per controllare le opzioni seguenti:      <ul>        <li><code>ConnectionTimeout</code>: valore che controlla il tempo di attesa di un tentativo di connessione al server prima dell’abbandono. Il valore predefinito è quello del timeout connessione ODBC.</li>        <li><code>CommandTimeout</code>: valore che controlla la durata di esecuzione della query sul lato server prima dell'annullamento.</li>        <li><code>BillingProject</code>:  ID del progetto di fatturazione. Il valore predefinito è il primo progetto disponibile.</li>        <li><code>UseStorageApi</code>: specifica se usare l'API di archiviazione di BigQuery per i set di risultati di grandi dimensioni. Il valore predefinito è true per usare l'API di archiviazione. Impostarlo su false per non usare l'API di archiviazione</li>      </ul>    Il parametro del record è specificato come [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Elenca i progetti disponibili in Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



