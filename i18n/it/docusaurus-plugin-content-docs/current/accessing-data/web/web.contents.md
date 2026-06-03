---
title: Web.Contents
---

# Web.Contents


Restituisce il contenuto scaricato dall'URL come binario.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Restituisce il contenuto scaricato da `url` come binario. È possibile indicare un parametro di record facoltativo, `options`, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:

-   `Query` : Consente di aggiungere i parametri di query all'URL a livello di codice senza aggiungere sequenze di caratteri di escape.
-   `ApiKeyName` : Se il sito di destinazione prevede la nozione di una chiave API, è possibile usare questo parametro per specificare il nome (non il valore) del parametro della chiave da usare nell'URL. Il valore effettivo della chiave viene fornito nelle credenziali.
-   `Headers` : Se si specifica questo valore come record, verranno fornite ulteriori intestazioni a una richiesta HTTP.
-   `Timeout` : Se si specifica questo valore come durata, il timeout per una richiesta HTTP verrà modificato. Il valore predefinito è 100 secondi.
-   `ExcludedFromCacheKey` : Se si specifica questo valore come elenco, queste chiavi di intestazione HTTP sarano escluse dal calcolo per la memorizzazione nella cache dei dati.
-   `IsRetry` : Se si specifica questo valore logico come true, tutte le risposte esistenti nella cache verranno ignorate durante il recupero dei dati.
-   `ManualStatusHandling` : Se si specifica questo valore come elenco, verrà impedita qualsiasi attività gestione predefinita per le richieste HTTP con risposte contenenti uno di questi codici di stato.
-   `RelativePath` : Se si specifica questo valore come testo, questo verrà aggiunto all'URL di base prima di effettuare la richiesta.
-   `Content` : Se si specifica questo valore, la richiesta Web viene modificata da GET a POST, usando il valore dell'opzione come contenuto della richiesta POST.

La richiesta HTTP viene effettuata come GET (quando non è specificato alcun contenuto) o POST (quando è presente contenuto). Le richieste POST possono essere effettuate solo in forma anonima.  
  
Le intestazioni della risposta HTTP sono disponibili come metadati nel risultato binario. All'esterno di un contesto del connettore dati personalizzato, è disponibile solo un subset di intestazioni di risposta (per motivi di sicurezza).


## Examples

### Example #1
Recupera il contenuto di `"https://bing.com/search?q=Power+Query"` usando le opzioni RelativePath e query. Queste opzioni possono essere utilizzate per eseguire query dinamiche su un URL di base statico.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
Eseguire un POST su un URL, passando un payload JSON binario e analizzando la risposta come JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
Connettersi a un URL sicuro che accetta una chiave di autenticazione nella relativa stringa di query. Invece di usare la chiave privata hardcoded in M (che costituisce un rischio per la sicurezza), è possibile fornire la chiave in modo sicuro specificandone il nome (non il valore) in M, scegliendo l'autenticazione API Web e immettendo il valore della chiave nelle credenziali dell'API Web. Se usato in questo modo, l'esempio seguente genererà una richiesta di `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
