---
title: WebAction.Request
---

# WebAction.Request


## Description

Crea un&#39;azione che, quando eseguita, restituisce i risultati dell&#39;esecuzione di una richiesta HTTP come valore binario.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Crea un'azione che, se eseguita, restituirà i risultati dell'esecuzione di una richiesta di <code>method</code> su <code>url</code> utilizzando HTTP come valore binario.    È possibile specificare un parametro di record facoltativo, <code>options</code>, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:     <ul><li><code>Query</code> : Consente di aggiungere i parametri di query all&#39;URL a livello di codice senza aggiungere sequenze di caratteri di escape.</li><li><code>ApiKeyName</code> : Se il sito di destinazione prevede la nozione di una chiave API, &#232; possibile usare questo parametro per specificare il nome (non il valore) del parametro della chiave da usare nell&#39;URL. Il valore effettivo della chiave viene fornito nelle credenziali.</li><li><code>Headers</code> : Se si specifica questo valore come record, verranno fornite ulteriori intestazioni a una richiesta HTTP.</li><li><code>Timeout</code> : Se si specifica questo valore come durata, il timeout per una richiesta HTTP verr&#224; modificato. Il valore predefinito &#232; 100 secondi.</li><li><code>ExcludedFromCacheKey</code> : Se si specifica questo valore come elenco, queste chiavi di intestazione HTTP sarano escluse dal calcolo per la memorizzazione nella cache dei dati.</li><li><code>IsRetry</code> : Se si specifica questo valore logico come true, tutte le risposte esistenti nella cache verranno ignorate durante il recupero dei dati.</li><li><code>ManualStatusHandling</code> : Se si specifica questo valore come elenco, verr&#224; impedita qualsiasi attivit&#224; gestione predefinita per le richieste HTTP con risposte contenenti uno di questi codici di stato.</li><li><code>RelativePath</code> : Se si specifica questo valore come testo, questo verr&#224; aggiunto all&#39;URL di base prima di effettuare la richiesta.</li><li><code>Content</code> : Se si specifica questo valore, il relativo contenuto diventer&#224; il corpo della richiesta HTTP.</li></ul>    <br />    Si noti che questa funzione è disabilitata nella maggior parte dei contesti. Provare a usare Web.Contents o Web.Headers.    


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
