---
title: Text.Repeat
---

# Text.Repeat


Belirtilen sayıda yinelenen girdi metninden oluşan bir metin değerini döndürür.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

<code>count</code> kez yinelenen <code>text</code> girdi metninden oluşan bir metin değerini döndürür.


## Examples

### Example #1 
&#34;a&#34; metnini beş kez yineler.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
&#34;helloworld&#34; metnini üç kez yineler.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
