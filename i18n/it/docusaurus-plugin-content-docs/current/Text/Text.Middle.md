---
title: Text.Middle
---

# Text.Middle


## Description

Restituisce la sottostringa fino a una lunghezza specificata.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Restituisce <code>count</code> caratteri o fino alla fine di <code>text</code>, a partire dall'offset <code>start</code>.


## Examples

### Example #1 
Trovare la sottostringa nel testo &#34;Hello World&#34; a partire dall&#39;indice 6 con un&#39;estensione di 5 caratteri.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Trovare la sottostringa nel testo &#34;Hello World&#34; a partire dall&#39;indice 6 fino alla fine.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
