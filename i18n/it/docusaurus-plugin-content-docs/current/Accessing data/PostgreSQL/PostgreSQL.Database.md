---
title: PostgreSQL.Database
---

# PostgreSQL.Database


## Description

Restituisce una tabella di tabelle e viste SQL disponibili in un database PostgreSQL.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Restituisce una tabella di tabelle e viste SQL disponibili in un database PostgreSQL nel server <code>server</code> nell'istanza di database denominata <code>database</code>. Facoltativamente, con il server è possibile specificare la porta, separando le voci con i due punti. È possibile specificare un parametro di record facoltativo, <code>options</code>, per controllare le opzioni seguenti:    <ul><li><code>CreateNavigationProperties</code> : Espressione logica (true/false) che consente di scegliere se generare propriet&#224; di navigazione per i valori restituiti (il valore predefinito &#232; true).</li><li><code>NavigationPropertyNameGenerator</code> : Funzione usata per la creazione dei nomi per le propriet&#224; di navigazione.</li><li><code>Query</code> : Query SQL nativa usata per recuperare i dati. Se la query genera pi&#249; set di risultati, viene restituito solo il primo.</li><li><code>CommandTimeout</code> : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito &#232; dieci minuti.</li><li><code>ConnectionTimeout</code> : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.</li><li><code>HierarchicalNavigation</code> : Espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito &#232; true).</li></ul>    Ad esempio, il parametro di record è specificato nel formato [opzione1 = valore1, opzione2 = valore2...] o [Query = "select ..."].    



## Category
Accessing data
