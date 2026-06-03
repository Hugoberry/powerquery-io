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

Restituisce una tabella con una riga per ogni documento trovato nel sito di SharePoint specificato `url` e nelle sottocartelle. Ogni riga contiene le proprietà della cartella o del file e un collegamento al relativo contenuto. È possibile specificare `options` per controllare le opzioni seguenti:

-   `ApiVersion` : Un numero (14 o 15) o il testo "Auto" che specifica la versione API di SharePoint da usare per questo sito. Se questo valore non è specificato, verrà usata la versione 14 dell'API. Quando viene specificato Auto, la versione del server verrà individuata automaticamente, se possibile. In caso contrario, il valore predefinito è la versione 14. I siti di SharePoint non in lingua inglese richiedono almeno la versione 15.



## Category
Accessing data
