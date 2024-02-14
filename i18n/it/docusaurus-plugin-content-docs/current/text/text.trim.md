---
title: Text.Trim
---

# Text.Trim


Rimuove tutti gli spazi iniziali e finali.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Restituisce il risultato della rimozione di tutti gli spazi iniziali e finali dal valore di testo <code>text</code>.


## Examples

### Example #1 
Rimuovere gli spazi iniziali e finali da &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
