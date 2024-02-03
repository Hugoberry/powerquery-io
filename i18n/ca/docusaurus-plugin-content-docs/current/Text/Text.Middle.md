---
title: Text.Middle
---

# Text.Middle


## Description

Retorna la subcadena a una longitud específica.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Retorna <code>count</code> caràcters, o fins al final de <code>text</code>; amb el desplaçament <code>start</code>.


## Examples

### Example #1 
Cerca la subcadena del text &#34;Hello World&#34; començant per l&#39;índex 6 amb un abast de 5 caràcters.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Cerca la subcadena del text &#34;Hello World&#34; començant per l&#39;índex 6 fins al final.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
