---
title: Text.Range
---

# Text.Range


## Description

Retorna la subcadena que s&#39;ha trobat al desplaçament.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Retorna la subcadena del text <code>text</code> que s'ha trobat al desplaçament <code>offset</code>.    Es pot incloure un paràmetre opcional, <code>count</code>, per especificar quants caràcters s'han de retornar. Mostra un error si no hi ha prou caràcters.


## Examples

### Example #1 
Troba la subcadena del text &#34;Hello World&#34; començant per l&#39;índex 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Troba la subcadena del text &#34;Hello World Hello&#34; començant per l&#39;índex 6 amb un abast de 5 caràcters.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
