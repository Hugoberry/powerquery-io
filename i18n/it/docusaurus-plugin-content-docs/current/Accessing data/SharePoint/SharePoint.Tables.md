---
title: SharePoint.Tables
---

# SharePoint.Tables


Restituisce una tabella con il contenuto di un elenco SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella con una riga per ogni elemento elenco trovato nell'elenco SharePoint specificato <code>url</code>. Ogni riga contiene le proprietà dell'elenco. È possibile specificare <code>options</code> per controllare le opzioni seguenti:    <ul><li><code>ApiVersion</code> : Un numero (14 o 15) o il testo &quot;Auto&quot; che specifica la versione API di SharePoint da usare per questo sito. Se questo valore non &#232; specificato, verr&#224; usata la versione 14 dell&#39;API. Quando viene specificato Auto, la versione del server verr&#224; individuata automaticamente, se possibile. In caso contrario, il valore predefinito &#232; la versione 14. I siti di SharePoint non in lingua inglese richiedono almeno la versione 15.</li><li><code>Implementation</code> : Facoltativo. Specifica la versione del connettore SharePoint da utilizzare. I valori accettati sono &quot;2.0&quot; o Null. Se il valore &#232; &quot;2.0&quot;, viene utilizzata l&#39;implementazione 2.0 del connettore SharePoint. Se il valore &#232; Null, viene utilizzata l&#39;implementazione originale del connettore SharePoint.</li><li><code>ViewMode</code> : Facoltativo. Questa opzione &#232; valida solo per l&#39;implementazione 2.0. I valori accettati sono &quot;All&quot; e &quot;Default&quot;. Se non viene specificato alcun valore, il valore viene impostato su &quot;All&quot;. Quando si specifica &quot;All&quot;, la vista include tutte le colonne create dall&#39;utente e definite dal sistema. Quando si specifica &quot;Predefinito&quot;, la visualizzazione corrisponder&#224; a quella visualizzata dall&#39;utente quando esamina l&#39;elenco online in qualsiasi visualizzazione impostata come Predefinita nelle impostazioni dell&#39;utente. Se l&#39;utente modifica la visualizzazione predefinita per aggiungere o rimuovere colonne create dall&#39;utente o definite dal sistema oppure creando una nuova visualizzazione e impostandola come predefinita, queste modifiche verranno propagate attraverso il connettore.</li><li><code>DisableAppendNoteColumns</code> : Impedisce al connettore di usare un endpoint separato per le colonne delle note.</li></ul>    



## Category
Accessing data
