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

Restituisce il valore <code>text</code> che rappresenta gli ultimi <code>count</code> caratteri del valore <code>text</code> <code>text</code>.


## Examples

### Example #1 
Ottenere gli ultimi 5 caratteri del testo &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
