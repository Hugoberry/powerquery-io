---
title: Text.End
---

# Text.End


Metnin son karakterlerini döndürür.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

<code>text</code> değeri olan <code>text</code> öğesinin son <code>count</code> karakteri olan bir <code>text</code> değeri döndürür.


## Examples

### Example #1 
&#34;Hello, World&#34; metninin son 5 karakterini alır.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
