---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Suprimeix tots els espais en blanc inicials.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Retorna el resultat de suprimir tots els espais en blanc inicials del valor de text <code>text</code>.


## Examples

### Example #1 
Suprimeix els espais en blanc de &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
