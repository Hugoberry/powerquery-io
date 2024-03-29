---
title: SharePoint.Files
---

# SharePoint.Files


Restituisce una tabella con i documenti di un sito di SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella con una riga per ogni documento trovato nel sito di SharePoint specificato <code>url</code> e nelle sottocartelle. Ogni riga contiene le proprietà della cartella o del file e un collegamento al relativo contenuto. È possibile specificare <code>options</code> per controllare le opzioni seguenti:    <ul><li><code>ApiVersion</code> : Un numero (14 o 15) o il testo &quot;Auto&quot; che specifica la versione API di SharePoint da usare per questo sito. Se questo valore non &#232; specificato, verr&#224; usata la versione 14 dell&#39;API. Quando viene specificato Auto, la versione del server verr&#224; individuata automaticamente, se possibile. In caso contrario, il valore predefinito &#232; la versione 14. I siti di SharePoint non in lingua inglese richiedono almeno la versione 15.</li></ul>    



## Category
Accessing data
