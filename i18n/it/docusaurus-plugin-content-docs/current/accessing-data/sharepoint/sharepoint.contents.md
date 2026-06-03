---
title: SharePoint.Contents
---

# SharePoint.Contents


Restituisce una tabella con il contenuto di un sito di SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella con una riga per ogni cartella e documento trovato nel sito di SharePoint specificato `url`. Ogni riga contiene le proprietà della cartella o del file e un collegamento al relativo contenuto. È possibile specificare `options` per controllare le opzioni seguenti:

-   `ApiVersion` : Un numero (14 o 15) o il testo "Auto" che specifica la versione API di SharePoint da usare per questo sito. Se questo valore non è specificato, verrà usata la versione 14 dell'API. Quando viene specificato Auto, la versione del server verrà individuata automaticamente, se possibile. In caso contrario, il valore predefinito è la versione 14. I siti di SharePoint non in lingua inglese richiedono almeno la versione 15.
-   `Implementation` : Facoltativo. Specifica la versione del connettore SharePoint da utilizzare. I valori accettati sono "2.0" o Null. Se il valore è "2.0", viene utilizzata l'implementazione 2.0 del connettore SharePoint. Se il valore è Null, viene utilizzata l'implementazione originale del connettore SharePoint.



## Category
Accessing data
