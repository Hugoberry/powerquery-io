---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Suprimeix tots els espais en blanc finals.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Retorna el resultat de suprimir tots els espais en blanc finals del valor de text <code>text</code>.


## Examples

### Example #1 
Suprimeix els espais en blanc de &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
