---
title: Web.Headers
---

# Web.Headers


Restituisce le intestazioni HTTP scaricate dall'URL come valore di record.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Restituisce le intestazioni scaricate da `url` come record. È possibile specificare un parametro di record facoltativo, `options`, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:

-   `Query` : Consente di aggiungere i parametri di query all'URL a livello di codice senza aggiungere sequenze di caratteri di escape.
-   `ApiKeyName` : Se il sito di destinazione prevede la nozione di una chiave API, è possibile usare questo parametro per specificare il nome (non il valore) del parametro della chiave da usare nell'URL. Il valore effettivo della chiave viene fornito nelle credenziali.
-   `Headers` : Se si specifica questo valore come record, verranno fornite ulteriori intestazioni a una richiesta HTTP.
-   `Timeout` : Se si specifica questo valore come durata, il timeout per una richiesta HTTP verrà modificato. Il valore predefinito è 100 secondi.
-   `ExcludedFromCacheKey` : Se si specifica questo valore come elenco, queste chiavi di intestazione HTTP sarano escluse dal calcolo per la memorizzazione nella cache dei dati.
-   `IsRetry` : Se si specifica questo valore logico come true, tutte le risposte esistenti nella cache verranno ignorate durante il recupero dei dati.
-   `ManualStatusHandling` : Se si specifica questo valore come elenco, verrà impedita qualsiasi attività gestione predefinita per le richieste HTTP con risposte contenenti uno di questi codici di stato.
-   `RelativePath` : Se si specifica questo valore come testo, questo verrà aggiunto all'URL di base prima di effettuare la richiesta.

La richiesta HTTP viene effettuata con il metodo HEAD. All'esterno di un contesto del connettore dati personalizzato, è disponibile solo un subset di intestazioni di risposta (per motivi di sicurezza).


## Examples

### Example #1
Recupera le intestazioni HTTP per `"https://bing.com/search?q=Power+Query"` utilizzando le opzioni RelativePath e Query.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
