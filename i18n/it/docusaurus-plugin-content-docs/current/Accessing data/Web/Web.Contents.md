---
title: Web.Contents
---

# Web.Contents


## Description

Restituisce il contenuto scaricato dall&#39;URL come binario.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Restituisce il contenuto scaricato da <code>url</code> come binario. È possibile specificare un parametro di record facoltativo, <code>options</code>, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:    <ul><li><code>Query</code> : Consente di aggiungere i parametri di query all&#39;URL a livello di codice senza aggiungere sequenze di caratteri di escape.</li><li><code>ApiKeyName</code> : Se il sito di destinazione prevede la nozione di una chiave API, &#232; possibile usare questo parametro per specificare il nome (non il valore) del parametro della chiave da usare nell&#39;URL. Il valore effettivo della chiave viene fornito nelle credenziali.</li><li><code>Headers</code> : Se si specifica questo valore come record, verranno fornite ulteriori intestazioni a una richiesta HTTP.</li><li><code>Timeout</code> : Se si specifica questo valore come durata, il timeout per una richiesta HTTP verr&#224; modificato. Il valore predefinito &#232; 100 secondi.</li><li><code>ExcludedFromCacheKey</code> : Se si specifica questo valore come elenco, queste chiavi di intestazione HTTP sarano escluse dal calcolo per la memorizzazione nella cache dei dati.</li><li><code>IsRetry</code> : Se si specifica questo valore logico come true, tutte le risposte esistenti nella cache verranno ignorate durante il recupero dei dati.</li><li><code>ManualStatusHandling</code> : Se si specifica questo valore come elenco, verr&#224; impedita qualsiasi attivit&#224; gestione predefinita per le richieste HTTP con risposte contenenti uno di questi codici di stato.</li><li><code>RelativePath</code> : Se si specifica questo valore come testo, questo verr&#224; aggiunto all&#39;URL di base prima di effettuare la richiesta.</li><li><code>Content</code> : Se si specifica questo valore, la richiesta Web viene modificata da GET a POST, usando il valore dell&#39;opzione come contenuto della richiesta POST.</li></ul>    La richiesta HTTP viene effettuata come GET (quando non è specificato alcun contenuto) o POST (quando è presente contenuto). Le richieste POST possono essere effettuate solo in forma anonima.    <br />    Le intestazioni della risposta HTTP sono disponibili come metadati nel risultato binario. All'esterno di un contesto del connettore dati personalizzato, è disponibile solo un subset di intestazioni di risposta (per motivi di sicurezza).    


## Examples

### Example #1 
Recupera il contenuto di &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; usando le opzioni RelativePath e query. Queste opzioni possono essere utilizzate per eseguire query dinamiche su un URL di base statico.
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
Connettersi a un URL sicuro che accetta una chiave di autenticazione nella relativa stringa di query. Invece di usare la chiave privata hardcoded in M (che costituisce un rischio per la sicurezza),     è possibile fornire la chiave in modo sicuro specificandone il nome (non il valore) in M, scegliendo l&#39;autenticazione API Web e immettendo il valore della chiave nelle credenziali dell&#39;API Web.    Se usato in questo modo, l&#39;esempio seguente genererà una richiesta di &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
