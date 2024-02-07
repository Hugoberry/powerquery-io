---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Restituisce una tabella di cubi multidimensionali o di modelli tabulari dal database Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di cubi multidimensionali o modelli tabulari dal database di Analysis Services <code>database</code> nel server <code>server</code>. È possibile specificare un parametro di record facoltativo, <code>options</code>, per controllare le opzioni seguenti:    <ul><li><code>Query</code> : Query MDX nativa usata per recuperare i dati.</li><li><code>TypedMeasureColumns</code> : Valore logico che indica se i tipi specificati nel modello multidimensionale o tabulare verranno usati per i tipi delle colonne di misura aggiunte. Se impostato su false, verr&#224; usato il tipo &quot;number&quot; per tutte le colonne di misura. Il valore predefinito per questa opzione &#232; false.</li><li><code>Culture</code> : Nome delle impostazioni cultura che specifica le impostazioni per i dati. Corrisponde alla propriet&#224; della stringa di connessione relativa all&#39;identificatore delle impostazioni locali (LCID).</li><li><code>CommandTimeout</code> : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito dipende dal driver.</li><li><code>ConnectionTimeout</code> : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.</li><li><code>SubQueries</code> : Numero (0, 1 o 2) che imposta il valore della propriet&#224; &quot;SubQueries&quot; nella stringa di connessione. Controlla il comportamento dei membri calcolati nelle sub-SELECT e nei sottocubi. Il valore predefinito &#232; 2.</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
