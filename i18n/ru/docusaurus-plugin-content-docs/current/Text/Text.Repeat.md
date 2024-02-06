---
title: Text.Repeat
---

# Text.Repeat


Возвращает текстовое значение, состоящее из входного текста, повторенного указанное число раз.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Возвращает текстовое значение, состоящее из входного текста <code>text</code>, повторенного <code>count</code> раз.


## Examples

### Example #1 
Повторить текст &#34;a&#34; 5 раз.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Повторить текст &#34;helloworld&#34; три раза.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
