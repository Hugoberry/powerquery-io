---
title: Text.End
---

# Text.End


Restituisce gli ultimi caratteri del testo.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Restituisce il valore `text` che rappresenta gli ultimi `count` caratteri del valore `text` `text`.


## Examples

### Example #1
Ottenere gli ultimi 5 caratteri del testo "Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
