---
title: Smartsheet.Content
---

# Smartsheet.Content


Restituisce una tabella di dati da un endpoint di indice Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Remarks

Effettua una chiamata all'API REST Smartsheet 2.0 all'endpoint specificato e trasforma l'elemento dati restituito in una tabella.


## Examples

### Example #1 
Esegue il pull di una tabella di informazioni sugli utenti dall&#39;API Smartsheet
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Tabella con le informazioni sugli utenti come restituita dall'API Smartsheet
```



