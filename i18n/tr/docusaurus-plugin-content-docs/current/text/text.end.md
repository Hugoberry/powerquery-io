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

`text` değeri olan `text` öğesinin son `count` karakteri olan bir `text` değeri döndürür.


## Examples

### Example #1
"Hello, World" metninin son 5 karakterini alır.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
