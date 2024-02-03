---
title: Text.Repeat
---

# Text.Repeat


## Description

Retorna un valor de text format pel text d&#39;entrada repetit un nombre de vegades especificat.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Retorna un valor de text format pel text d'entrada <code>text</code> repetit <code>count</code> vegades.


## Examples

### Example #1 
Repeteix el text &#34;a&#34; cinc vegades.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Repeteix el text &#34;helloworld&#34; tres vegades.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
