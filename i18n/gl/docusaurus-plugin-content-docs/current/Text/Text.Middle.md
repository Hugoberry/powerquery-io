---
title: Text.Middle
---

# Text.Middle


## Description

Devolve a subcadea ata unha lonxitude específica.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Devolve <code>count</code> caracteres ou ata o final de <code>text</code>; no desprazamento <code>start</code>.


## Examples

### Example #1 
Busque a subcadea no texto &#34;Hello World&#34; comezando polo índice 6 abarcando 5 caracteres.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Busque a subcadea no texto &#34;Hello World&#34; comezando polo índice 6 ata o final.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
