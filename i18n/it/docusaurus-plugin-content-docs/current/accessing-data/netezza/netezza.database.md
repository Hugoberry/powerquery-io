---
title: Netezza.Database
---

# Netezza.Database


Importa i dati da un database IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di tabelle, viste e funzioni archiviate Netezza dal database Netezza Server `database` nel server `server`. Facoltativamente, con il server è possibile specificare la porta, separando le voci con due punti. È possibile specificare un parametro di record facoltativo, `options`, per controllare le opzioni seguenti:

-   `CreateNavigationProperties`: espressione logica (true/false) che consente di scegliere se generare proprietà di navigazione per i valori restituiti (il valore predefinito è true)
-   `HierarchicalNavigation`: espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito è false)
-   `ConnectionTimeout`: valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.
-   `CommandTimeout`: valore che controlla la durata di esecuzione della query sul lato server prima che venga annullata. Il valore predefinito dipende dal driver.
-   `NormalizeDatabaseName`: valore logico (true/false) che imposta se normalizzare il nome del database in lettere maiuscole o se interpretarlo letteralmente (il valore predefinito è true).

Il parametro di record è specificato nel formato \[opzione1 = valore1, opzione2 = valore2...\].


## Examples

### Example #1
Elenca le tabelle in un progetto di IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



