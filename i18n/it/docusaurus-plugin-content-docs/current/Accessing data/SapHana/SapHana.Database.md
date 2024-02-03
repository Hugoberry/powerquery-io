---
title: SapHana.Database
---

# SapHana.Database


## Description

Restituisce i pacchetti in un database SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Restituisce una tabella di pacchetti multidimensionali dal database SAP HANA <code>server</code>. È possibile specificare un parametro di record facoltativo, <code>options</code>, per controllare le opzioni seguenti:    <ul><li><code>Query</code> : Query SQL nativa usata per recuperare i dati. Se la query genera pi&#249; set di risultati, viene restituito solo il primo.</li><li><code>Distribution</code> : Oggetto SapHanaDistribution che imposta il valore della propriet&#224; &quot;Distribution&quot; nella stringa di connessione. Il routing delle istruzioni &#232; il metodo usato per la valutazione del nodo server corretto di un sistema distribuito prima dell&#39;esecuzione dell&#39;istruzione. Il valore predefinito &#232; SapHanaDistribution.All.</li><li><code>Implementation</code> : Consente di specificare l&#39;implementazione del connettore SAP HANA da usare.</li><li><code>EnableColumnBinding</code> : Associa le variabili alle colonne di un set di risultati SAP HANA durante il recupero dei dati. Pu&#242; potenzialmente migliorare le prestazioni a causa di un utilizzo leggermente pi&#249; elevato della memoria. Il valore predefinito &#232; False.</li><li><code>ConnectionTimeout</code> : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito &#232; 15 secondi.</li><li><code>CommandTimeout</code> : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito &#232; dieci minuti.</li></ul>    



## Category
Accessing data
