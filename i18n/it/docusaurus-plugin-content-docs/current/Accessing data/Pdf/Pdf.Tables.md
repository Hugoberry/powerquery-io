---
title: Pdf.Tables
---

# Pdf.Tables


Restituisce tutte le tabelle trovate in un file PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Restituisce tutte le tabelle trovate in <code>pdf</code>. È possibile fornire un parametro di record facoltativo, <code>options</code>, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:    <ul><li><code>Implementation</code> : Versione dell&#39;algoritmo da usare per l&#39;identificazione delle tabelle. Le versioni precedenti sono disponibili solo per la compatibilit&#224; con le versioni precedenti, per evitare che le query meno recenti siano interrotte a causa degli aggiornamenti dell&#39;algoritmo. La versione pi&#249; recente garantir&#224; sempre il risultato ottimale. I valori validi sono &quot;1.3&quot;, &quot;1.2&quot;, &quot;1.1&quot; o Null.</li><li><code>StartPage</code> : Consente di specificare la prima pagina nell&#39;intervallo di pagine da esaminare. Impostazione predefinita: 1.</li><li><code>EndPage</code> : Consente di specificare l&#39;ultima pagina nell&#39;intervallo di pagine da esaminare. Impostazione predefinita: ultima pagina del documento.</li><li><code>MultiPageTables</code> : Controlla se tabelle simili in pagine consecutive verranno combinate automaticamente in un&#39;unica tabella. Impostazione predefinita: true.</li><li><code>EnforceBorderLines</code> : Controlla se le linee dei bordi vengono sempre applicate come limiti delle celle (quando &#232; true) o usate semplicemente come uno dei numerosi suggerimenti disponibili per determinare i limiti delle celle (quando &#232; false). Impostazione predefinita: false.</li></ul>    


## Examples

### Example #1 
Restituisce le tabelle contenute in sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Accesso ai dati
