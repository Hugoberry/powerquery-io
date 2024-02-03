---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Restituisce il codice HTML per l&#39;URL specificato, come visualizzato da un Web browser.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Restituisce il codice HTML per il <code>url</code> specificato, visualizzato da un Web browser. È possibile specificare un parametro di record facoltativo, <code>options</code>, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti: <ul> <li><code>ApiKeyName</code>: se il sito di destinazione presenta una nozione di una chiave API, questo parametro può essere usato per specificare il nome (non il valore) del parametro chiave che deve essere usato nell'URL. Il valore chiave effettivo viene fornito nelle credenziali.</li> <li><code>WaitFor</code>: specifica una condizione da attendere prima di scaricare il codice HTML, oltre ad attendere il caricamento della pagina ( operazione sempre eseguita). Può essere un record contenente i campi Timeout e/o Selettore. Se viene specificato solo un timeout, la funzione attenderà la quantità di tempo specificata prima di scaricare il codice HTML. Se vengono specificati sia un selettore che un timeout e il timeout è trascorso prima che il selettore si manifesti nella pagina, verrà generato un errore. Se si specifica un selettore senza timeout, viene applicato un timeout predefinito di 30 secondi.</li>      </ul>    


## Examples

### Example #1 
Restituisce il codice HTML per https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Restituisce il codice HTML per https://microsoft.com dopo aver atteso l&#39;aggiunta di un selettore CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Restituisce il codice HTML per https://microsoft.com dopo aver atteso 10 secondi.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Restituisce il codice HTML per https://microsoft.com dopo aver atteso fino a 10 secondi l&#39;aggiunta di un selettore CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accesso ai dati
