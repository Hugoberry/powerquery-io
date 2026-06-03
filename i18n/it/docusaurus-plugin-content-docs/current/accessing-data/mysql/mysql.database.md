---
title: MySQL.Database
---

# MySQL.Database


Restituisce una tabella di tabelle, viste e funzioni scalari archiviate SQL disponibili in un database MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di tabelle, viste e funzioni scalari archiviate di SQL disponibili in un database MySQL nel server `server` nell'istanza denominata `database`. Facoltativamente, è possibile specificare la porta con il server, separando le voci con i due punti. È possibile specificare un parametro di record opzionale, `options`, per controllare le seguenti opzioni:

-   `Encoding` : Valore TextEncoding che specifica il set di caratteri usato per codificare tutte le query inviate al server. L'impostazione predefinita è Null.
-   `CreateNavigationProperties` : Espressione logica (true/false) che consente di scegliere se generare proprietà di navigazione per i valori restituiti (il valore predefinito è true).
-   `NavigationPropertyNameGenerator` : Funzione usata per la creazione dei nomi per le proprietà di navigazione.
-   `Query` : Query SQL nativa usata per recuperare i dati. Se la query genera più set di risultati, viene restituito solo il primo.
-   `CommandTimeout` : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito è dieci minuti.
-   `ConnectionTimeout` : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.
-   `TreatTinyAsBoolean` : Espressione logica (true/false) che determina se forzare o meno le colonne tinyint nel server come valori logici. Il valore predefinito è true.
-   `OldGuids` : Espressione logica (true/false) che consente di scegliere se le colonne char(36) (se false) o le colonne binary(16) (se true) verranno considerate come GUID. Il valore predefinito è false.
-   `ReturnSingleDatabase` : Espressione logica (true/false) che consente di scegliere se restituire tutte le tabelle di tutti i database (se false) o restituire le tabelle e le viste del database specificato (se true). Il valore predefinito è false.
-   `HierarchicalNavigation` : Espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito è true).

Ad esempio, il parametro di record è specificato nel formato \[opzione1 = valore1, opzione2 = valore2...\] o \[Query = "select ..."\].



## Category
Accessing data
