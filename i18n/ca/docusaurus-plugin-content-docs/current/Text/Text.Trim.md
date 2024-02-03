---
title: Text.Trim
---

# Text.Trim


## Description

Suprimeix tots els espais en blanc inicials i finals.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Retorna el resultat de suprimir tots els espais en blanc inicials i finals del valor de text <code>text</code>.


## Examples

### Example #1 
Suprimeix els espais en blanc inicials i finals de &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
