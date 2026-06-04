---
title: Text.Remove
---

# Text.Remove


Кіріс мәтіндік мәннен осы таңбаның немесе таңбалар тізімінің барлық даналарын жояды.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

`text` мәтіндік мәнінің `removeChars` орнынан барлық таңбалар жойылған көшірмесін қайтарады.


## Examples

### Example #1
Мәтіндік мәннен , және ; таңбаларын жою.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
