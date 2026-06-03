---
title: WebAction.Request
---

# WebAction.Request


Crea un'azione che, quando eseguita, restituisce i risultati dell'esecuzione di una richiesta HTTP come valore binario.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Crea un'azione che, quando eseguita, restituirà i risultati dell'esecuzione di una `method` richiesta rispetto `url` all'uso dell'HTTP come valore binario. È possibile specificare un parametro di record facoltativo, `options`, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:

-   `Query` : Consente di aggiungere i parametri di query all'URL a livello di codice senza aggiungere sequenze di caratteri di escape.
-   `ApiKeyName` : Se il sito di destinazione prevede la nozione di una chiave API, è possibile usare questo parametro per specificare il nome (non il valore) del parametro della chiave da usare nell'URL. Il valore effettivo della chiave viene fornito nelle credenziali.
-   `Headers` : Se si specifica questo valore come record, verranno fornite ulteriori intestazioni a una richiesta HTTP.
-   `Timeout` : Se si specifica questo valore come durata, il timeout per una richiesta HTTP verrà modificato. Il valore predefinito è 100 secondi.
-   `ExcludedFromCacheKey` : Se si specifica questo valore come elenco, queste chiavi di intestazione HTTP sarano escluse dal calcolo per la memorizzazione nella cache dei dati.
-   `IsRetry` : Se si specifica questo valore logico come true, tutte le risposte esistenti nella cache verranno ignorate durante il recupero dei dati.
-   `ManualStatusHandling` : Se si specifica questo valore come elenco, verrà impedita qualsiasi attività gestione predefinita per le richieste HTTP con risposte contenenti uno di questi codici di stato.
-   `RelativePath` : Se si specifica questo valore come testo, questo verrà aggiunto all'URL di base prima di effettuare la richiesta.
-   `Content` : Se si specifica questo valore, il relativo contenuto diventerà il corpo della richiesta HTTP.

Questa funzione è disabilitata nella maggior parte dei contesti. Considerare di usare invece Web.Contents o Web.Headers.


## Examples

### Example #1
Eseguire una richiesta GET su Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
