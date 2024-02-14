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

Restituisce una tabella di tabelle, viste e funzioni archiviate Netezza dal database Netezza Server <code>database</code> nel server <code>server</code>. Facoltativamente, con il server è possibile specificare la porta, separando le voci con due punti. È possibile specificare un parametro di record facoltativo, <code>options</code>, per controllare le opzioni seguenti:<ul>        <li><code>CreateNavigationProperties</code>: espressione logica (true/false) che consente di scegliere se generare proprietà di navigazione per i valori restituiti (il valore predefinito è true)</li>        <li><code>HierarchicalNavigation</code>: espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito è false)</li>        <li><code>ConnectionTimeout</code>: valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.</li>        <li><code>CommandTimeout</code>: valore che controlla la durata di esecuzione della query sul lato server prima che venga annullata. Il valore predefinito dipende dal driver.</li><li><code>NormalizeDatabaseName</code>: valore logico (true/false) che imposta se normalizzare il nome del database in lettere maiuscole o se interpretarlo letteralmente (il valore predefinito è true).</li></ul>Il parametro di record è specificato nel formato [opzione1 = valore1, opzione2 = valore2...].


## Examples

### Example #1 
Elenca le tabelle in un progetto di IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



