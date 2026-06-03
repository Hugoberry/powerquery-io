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

Restituisce tutte le tabelle trovate in `pdf`. È possibile fornire un parametro di record facoltativo, `options`, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:

-   `Implementation` : Versione dell'algoritmo da usare per l'identificazione delle tabelle. Le versioni precedenti sono disponibili solo per la compatibilità con le versioni precedenti, per evitare che le query meno recenti siano interrotte a causa degli aggiornamenti dell'algoritmo. La versione più recente garantirà sempre il risultato ottimale. I valori validi sono "1.3", "1.2", "1.1" o Null.
-   `StartPage` : Consente di specificare la prima pagina nell'intervallo di pagine da esaminare. Impostazione predefinita: 1.
-   `EndPage` : Consente di specificare l'ultima pagina nell'intervallo di pagine da esaminare. Impostazione predefinita: ultima pagina del documento.
-   `MultiPageTables` : Controlla se tabelle simili in pagine consecutive verranno combinate automaticamente in un'unica tabella. Impostazione predefinita: true.
-   `EnforceBorderLines` : Controlla se le linee dei bordi vengono sempre applicate come limiti delle celle (quando è true) o usate semplicemente come uno dei numerosi suggerimenti disponibili per determinare i limiti delle celle (quando è false). Impostazione predefinita: false.


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
