---
title: Text.Remove
---

# Text.Remove


## Description

Кіріс мәтіндік мәннен осы таңбаның немесе таңбалар тізімінің барлық даналарын жояды.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

<code>text</code> мәтіндік мәнінің <code>removeChars</code> орнынан барлық таңбалар жойылған көшірмесін қайтарады.  


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
