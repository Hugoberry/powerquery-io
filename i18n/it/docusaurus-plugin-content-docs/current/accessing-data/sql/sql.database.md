---
title: Sql.Database
---

# Sql.Database


Restituisce una tabella di tabelle, viste e funzioni archiviate SQL dal database SQL Server.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di tabelle, viste e funzioni archiviate SQL dal database SQL Server `database` nel server `server`. Facoltativamente, con il server è possibile specificare la porta, separando le voci con i due punti o la virgola. È possibile specificare un parametro di record opzionale, `options`, per controllare le seguenti opzioni:

-   `Query` : Query SQL nativa usata per recuperare i dati. Se la query genera più set di risultati, viene restituito solo il primo.
-   `CreateNavigationProperties` : Espressione logica (true/false) che consente di scegliere se generare proprietà di navigazione per i valori restituiti (il valore predefinito è true).
-   `NavigationPropertyNameGenerator` : Funzione usata per la creazione dei nomi per le proprietà di navigazione.
-   `MaxDegreeOfParallelism` : Numero che imposta il valore della clausola di query "maxdop" nella query SQL generata.
-   `CommandTimeout` : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito è dieci minuti.
-   `ConnectionTimeout` : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.
-   `HierarchicalNavigation` : Espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito è true).
-   `MultiSubnetFailover` : Espressione logica (true/false) che imposta il valore della proprietà "MultiSubnetFailover" nella stringa di connessione (il valore predefinito è false).
-   `UnsafeTypeConversions` : Valore logico (true/false) che, se true, tenta di ridurre le conversioni dei tipi che potrebbero generare errori e determinare l'esito negativo dell'intera query. Non consigliato per l'uso generale.
-   `ContextInfo` : Valore binario usato per impostare CONTEXT\_INFO prima di eseguire ogni comando.
-   `OmitSRID` : Valore logico (true/false) che, se true, omette l'ID SRID durante la generazione di Well-Known Text da tipi geometrici e geografici.
-   `EnableCrossDatabaseFolding` : Valore logico (true/false) che, se true, consente la riduzione della query dei database nello stesso server. Il valore predefinito è false.

Ad esempio, il parametro di record è specificato nel formato \[opzione1 = valore1, opzione2 = valore2...\] o \[Query = "select ..."\].



## Category
Accessing data
