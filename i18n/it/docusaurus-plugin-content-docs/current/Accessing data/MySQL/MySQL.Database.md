---
title: MySQL.Database
---

# MySQL.Database


## Description

Restituisce una tabella di tabelle, viste e funzioni scalari archiviate SQL disponibili in un database MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Restituisce una tabella di tabelle, viste e funzioni scalari archiviate di SQL disponibili in un database MySQL nel server <code>server</code> nell'istanza denominata <code>database</code>. Facoltativamente, con il server è possibile specificare la porta, separando le voci con i due punti. È possibile specificare un parametro di record facoltativo, <code>options</code>, per controllare le opzioni seguenti:    <ul><li><code>Encoding</code> : Valore TextEncoding che specifica il set di caratteri usato per codificare tutte le query inviate al server. L&#39;impostazione predefinita &#232; Null.</li><li><code>CreateNavigationProperties</code> : Espressione logica (true/false) che consente di scegliere se generare propriet&#224; di navigazione per i valori restituiti (il valore predefinito &#232; true).</li><li><code>NavigationPropertyNameGenerator</code> : Funzione usata per la creazione dei nomi per le propriet&#224; di navigazione.</li><li><code>Query</code> : Query SQL nativa usata per recuperare i dati. Se la query genera pi&#249; set di risultati, viene restituito solo il primo.</li><li><code>CommandTimeout</code> : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito &#232; dieci minuti.</li><li><code>ConnectionTimeout</code> : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.</li><li><code>TreatTinyAsBoolean</code> : Espressione logica (true/false) che determina se forzare o meno le colonne tinyint nel server come valori logici. Il valore predefinito &#232; true.</li><li><code>OldGuids</code> : Espressione logica (true/false) che consente di scegliere se le colonne char(36) (se false) o le colonne binary(16) (se true) verranno considerate come GUID. Il valore predefinito &#232; false.</li><li><code>ReturnSingleDatabase</code> : Espressione logica (true/false) che consente di scegliere se restituire tutte le tabelle di tutti i database (se false) o restituire le tabelle e le viste del database specificato (se true). Il valore predefinito &#232; false.</li><li><code>HierarchicalNavigation</code> : Espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito &#232; true).</li></ul>    Ad esempio, il parametro di record è specificato nel formato [opzione1 = valore1, opzione2 = valore2...] o [Query = "select ..."].    



## Category
Accessing data
