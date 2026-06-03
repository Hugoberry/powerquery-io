---
title: Web.BrowserContents
---

# Web.BrowserContents


Restituisce il codice HTML per l'URL specificato, come visualizzato da un Web browser.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Restituisce il codice HTML per l'oggetto `url` specificato, come viene visualizzato da un Web browser. È possibile indicare un parametro di record facoltativo, `options`, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:

-   `ApiKeyName`: se il sito di destinazione include la nozione di una chiave API, questo parametro può essere usato per specificare il nome (non il valore) del parametro della chiave che deve essere usato nell'URL. Il valore effettivo della chiave viene fornito nelle credenziali.
-   `WaitFor`: specifica una condizione da attendere prima di scaricare il codice HTML, oltre ad attendere il caricamento della pagina (operazione sempre eseguita). Può essere un record contenente i campi Timeout e/o Selettore. Se viene specificato solo un timeout, la funzione attenderà la quantità di tempo specificata prima di scaricare il codice HTML. Se vengono specificati sia un selettore sia un timeout e il timeout trascorre prima che il selettore sia presente nella pagina, viene generato un errore. Se si specifica un selettore senza alcun timeout, viene applicato un timeout predefinito di 30 secondi.


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
Restituisce il codice HTML per https://microsoft.com dopo aver atteso l'aggiunta di un selettore CSS.
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
Restituisce il codice HTML per https://microsoft.com dopo aver atteso fino a 10 secondi l'aggiunta di un selettore CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
