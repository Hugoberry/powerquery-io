---
title: Text.Upper
---

# Text.Upper


## Description

Converteix tots els caràcters a majúscules.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Retorna el resultat de convertir tots els caràcters del valor <code>text</code> a majúscules. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").


## Examples

### Example #1 
Obté la versió en majúscules de &#34;aBcD&#34;.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
