---
title: Web.Headers
---

# Web.Headers


Restituisce le intestazioni HTTP scaricate dall&#39;URL come valore di record.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Restituisce le intestazioni scaricate da <code>url</code> come record. È possibile specificare un parametro di record facoltativo, <code>options</code>, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:    <ul><li><code>Query</code> : Consente di aggiungere i parametri di query all&#39;URL a livello di codice senza aggiungere sequenze di caratteri di escape.</li><li><code>ApiKeyName</code> : Se il sito di destinazione prevede la nozione di una chiave API, &#232; possibile usare questo parametro per specificare il nome (non il valore) del parametro della chiave da usare nell&#39;URL. Il valore effettivo della chiave viene fornito nelle credenziali.</li><li><code>Headers</code> : Se si specifica questo valore come record, verranno fornite ulteriori intestazioni a una richiesta HTTP.</li><li><code>Timeout</code> : Se si specifica questo valore come durata, il timeout per una richiesta HTTP verr&#224; modificato. Il valore predefinito &#232; 100 secondi.</li><li><code>ExcludedFromCacheKey</code> : Se si specifica questo valore come elenco, queste chiavi di intestazione HTTP sarano escluse dal calcolo per la memorizzazione nella cache dei dati.</li><li><code>IsRetry</code> : Se si specifica questo valore logico come true, tutte le risposte esistenti nella cache verranno ignorate durante il recupero dei dati.</li><li><code>ManualStatusHandling</code> : Se si specifica questo valore come elenco, verr&#224; impedita qualsiasi attivit&#224; gestione predefinita per le richieste HTTP con risposte contenenti uno di questi codici di stato.</li><li><code>RelativePath</code> : Se si specifica questo valore come testo, questo verr&#224; aggiunto all&#39;URL di base prima di effettuare la richiesta.</li></ul>    La richiesta HTTP viene effettuata con il metodo HEAD. All'esterno di un contesto del connettore dati personalizzato, è disponibile solo un subset di intestazioni di risposta (per motivi di sicurezza).    


## Examples

### Example #1 
Recupera le intestazioni HTTP per &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; utilizzando le opzioni RelativePath e Query.
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
