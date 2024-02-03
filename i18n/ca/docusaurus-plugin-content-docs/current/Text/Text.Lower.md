---
title: Text.Lower
---

# Text.Lower


## Description

Converteix tots els caràcters a minúscules.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Retorna el resultat de convertir tots els caràcters del valor <code>text</code> a minúscules. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").


## Examples

### Example #1 
Obté la versió en minúscules de &#34;AbCd&#34;.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
