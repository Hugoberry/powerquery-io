---
title: Smartsheet.Content
---

# Smartsheet.Content


Vráti tabuľku s údajmi z koncového bodu indexu služby Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Remarks

Uskutoční volanie do koncového bodu rozhrania Smartsheet 2.0 REST API a transformuje prvok údajov vrátený v tabuľke.


## Examples

### Example #1
Stiahne tabuľku s informáciami o používateľoch z rozhrania Smartsheet API
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Tabuľka s informáciami o používateľoch, ktorú vrátilo rozhranie Smartsheet API
```



