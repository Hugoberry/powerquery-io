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

Restituisce una tabella con una riga per ogni elemento elenco trovato nell'elenco SharePoint specificato `url`. Ogni riga contiene le proprietà dell'elenco. È possibile specificare `options` per controllare le opzioni seguenti:

-   `ApiVersion` : Un numero (14 o 15) o il testo "Auto" che specifica la versione API di SharePoint da usare per questo sito. Se questo valore non è specificato, verrà usata la versione 14 dell'API. Quando viene specificato Auto, la versione del server verrà individuata automaticamente, se possibile. In caso contrario, il valore predefinito è la versione 14. I siti di SharePoint non in lingua inglese richiedono almeno la versione 15.
-   `Implementation` : Facoltativo. Specifica la versione del connettore SharePoint da utilizzare. I valori accettati sono "2.0" o Null. Se il valore è "2.0", viene utilizzata l'implementazione 2.0 del connettore SharePoint. Se il valore è Null, viene utilizzata l'implementazione originale del connettore SharePoint.
-   `ViewMode` : Facoltativo. Questa opzione è valida solo per l'implementazione 2.0. I valori accettati sono "All" e "Default". Se non viene specificato alcun valore, il valore viene impostato su "All". Quando si specifica "All", la vista include tutte le colonne create dall'utente e definite dal sistema. Quando si specifica "Predefinito", la visualizzazione corrisponderà a quella visualizzata dall'utente quando esamina l'elenco online in qualsiasi visualizzazione impostata come Predefinita nelle impostazioni dell'utente. Se l'utente modifica la visualizzazione predefinita per aggiungere o rimuovere colonne create dall'utente o definite dal sistema oppure creando una nuova visualizzazione e impostandola come predefinita, queste modifiche verranno propagate attraverso il connettore.
-   `DisableAppendNoteColumns` : Impedisce al connettore di usare un endpoint separato per le colonne delle note.



## Category
Accessing data
