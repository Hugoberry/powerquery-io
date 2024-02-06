---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Restituisce i database di Analysis Services in un host specifico.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Restituisce i database in un'istanza di Analysis Services, <code>server</code>. È possibile fornire un parametro di record facoltativo, <code>options</code>, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:    <ul><li><code>TypedMeasureColumns</code> : Valore logico che indica se i tipi specificati nel modello multidimensionale o tabulare verranno usati per i tipi delle colonne di misura aggiunte. Se impostato su false, verr&#224; usato il tipo &quot;number&quot; per tutte le colonne di misura. Il valore predefinito per questa opzione &#232; false.</li><li><code>Culture</code> : Nome delle impostazioni cultura che specifica le impostazioni per i dati. Corrisponde alla propriet&#224; della stringa di connessione relativa all&#39;identificatore delle impostazioni locali (LCID).</li><li><code>CommandTimeout</code> : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito dipende dal driver.</li><li><code>ConnectionTimeout</code> : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.</li><li><code>SubQueries</code> : Numero (0, 1 o 2) che imposta il valore della propriet&#224; &quot;SubQueries&quot; nella stringa di connessione. Controlla il comportamento dei membri calcolati nelle sub-SELECT e nei sottocubi. Il valore predefinito &#232; 2.</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
