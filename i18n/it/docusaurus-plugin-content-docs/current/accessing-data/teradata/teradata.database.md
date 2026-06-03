---
title: Teradata.Database
---

# Teradata.Database


Restituisce una tabella di tabelle e viste SQL dal database Teradata.


## Syntax

```powerquery
Teradata.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di tabelle e viste SQL dal database Teradata nel server `server`. Facoltativamente, è possibile specificare la porta con il server, separando le voci con i due punti. È possibile specificare un parametro di record facoltativo, `options`, per controllare le seguenti opzioni:

-   `CreateNavigationProperties` : Espressione logica (true/false) che consente di scegliere se generare proprietà di navigazione per i valori restituiti (il valore predefinito è true).
-   `NavigationPropertyNameGenerator` : Funzione usata per la creazione dei nomi per le proprietà di navigazione.
-   `Query` : Query SQL nativa usata per recuperare i dati. Se la query genera più set di risultati, viene restituito solo il primo.
-   `CommandTimeout` : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito è dieci minuti.
-   `ConnectionTimeout` : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.
-   `HierarchicalNavigation` : Espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito è true).

Ad esempio, il parametro di record è specificato nel formato \[opzione1 = valore1, opzione2 = valore2...\] o \[Query = "select ..."\].



## Category
Accessing data
