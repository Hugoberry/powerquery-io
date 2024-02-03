---
title: Text.Repeat
---

# Text.Repeat


## Description

Повертає текстове значення, складене із заданої кількості повторювань вхідного тексту.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Повертає текстове значення, складене з <code>count</code> повторювань вхідного тексту <code>text</code>.


## Examples

### Example #1 
Повторити текст &#34;a&#34; п&#39;ять разів.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Повторити текст &#34;helloworld&#34; тричі.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
