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

Restituisce una tabella di tabelle, viste e funzioni archiviate SQL dal database SQL Server <code>database</code> nel server <code>server</code>. Facoltativamente, con il server è possibile specificare la porta, separando le voci con i due punti o la virgola. È possibile specificare un parametro di record facoltativo, <code>options</code>, per controllare le opzioni seguenti:    <ul><li><code>Query</code> : Query SQL nativa usata per recuperare i dati. Se la query genera pi&#249; set di risultati, viene restituito solo il primo.</li><li><code>CreateNavigationProperties</code> : Espressione logica (true/false) che consente di scegliere se generare propriet&#224; di navigazione per i valori restituiti (il valore predefinito &#232; true).</li><li><code>NavigationPropertyNameGenerator</code> : Funzione usata per la creazione dei nomi per le propriet&#224; di navigazione.</li><li><code>MaxDegreeOfParallelism</code> : Numero che imposta il valore della clausola di query &quot;maxdop&quot; nella query SQL generata.</li><li><code>CommandTimeout</code> : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito &#232; dieci minuti.</li><li><code>ConnectionTimeout</code> : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.</li><li><code>HierarchicalNavigation</code> : Espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito &#232; true).</li><li><code>MultiSubnetFailover</code> : Espressione logica (true/false) che imposta il valore della propriet&#224; &quot;MultiSubnetFailover&quot; nella stringa di connessione (il valore predefinito &#232; false).</li><li><code>UnsafeTypeConversions</code> : Valore logico (true/false) che, se true, tenta di ridurre le conversioni dei tipi che potrebbero generare errori e determinare l&#39;esito negativo dell&#39;intera query. Non consigliato per l&#39;uso generale.</li><li><code>ContextInfo</code> : Valore binario usato per impostare CONTEXT_INFO prima di eseguire ogni comando.</li><li><code>OmitSRID</code> : Valore logico (true/false) che, se true, omette l&#39;ID SRID durante la generazione di Well-Known Text da tipi geometrici e geografici.</li><li><code>EnableCrossDatabaseFolding</code> : Valore logico (true/false) che, se true, consente la riduzione della query dei database nello stesso server. Il valore predefinito &#232; false.</li></ul>    Ad esempio, il parametro di record è specificato nel formato [opzione1 = valore1, opzione2 = valore2...] o [Query = "select ..."].    



## Category
Accessing data
