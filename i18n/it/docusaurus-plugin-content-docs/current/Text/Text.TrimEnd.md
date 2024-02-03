---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Rimuove tutti gli spazi finali.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Restituisce il risultato della rimozione di tutti gli spazi finali dal valore di testo <code>text</code>.


## Examples

### Example #1 
Rimuovere gli spazi finali da &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
