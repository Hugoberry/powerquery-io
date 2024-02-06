---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importare dati da un database Google BigQuery usando Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      Restituisce una tabella che elenca i progetti disponibili in Google BigQuery usando Azure AD per <code>ID progetto di fatturazione</code> . È possibile specificare un parametro di record facoltativo, <code>options</code>, per controllare le opzioni seguenti:      <ul>        <li><code>ConnectionTimeout</code>: valore che controlla il tempo di attesa di un tentativo di connessione al server prima dell'abbandono. Il valore predefinito è quello del timeout connessione ODBC.</li>        <li><code>CommandTimeout</code>: valore che controlla la durata di esecuzione della query sul lato server prima dell'annullamento.</li>        <li><code>UseStorageApi</code>: specifica se usare l'API di archiviazione di BigQuery per i set di risultati di grandi dimensioni. Il valore predefinito è true per usare l'API di archiviazione. Impostarlo su false per non usare l'API di archiviazione</li>        <li><code>AudienceUri</code>: URI del gruppo che il driver ODBC può usare per le richieste di scambio di token. Questo campo deve essere un URI completo (ad esempio //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/aad-provider) dove pool_id è un nome univoco a livello globale che identifica il pool del personale</li>      </ul>    Il parametro del record è specificato come [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Elencare i progetti disponibili in Google BigQuery usando Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



