---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Rimuove tutti gli spazi iniziali.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Restituisce il risultato della rimozione di tutti gli spazi iniziali dal valore di testo <code>text</code>.


## Examples

### Example #1 
Rimuovere gli spazi iniziali da &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
