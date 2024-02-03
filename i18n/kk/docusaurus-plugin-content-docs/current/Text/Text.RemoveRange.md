---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Осы ауытқуда басталатын таңбалар санын жояды


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

<code>text</code> мәтіндік мәнінің <code>offset</code> орнынан барлық таңбалар жойылған көшірмесін қайтарады.    Жоятын таңбалар санын көрсету үшін <code>count</code> міндетті емес параметрін пайдалануға болады. <code>count</code> әдепкі мәні — 1. Орын мәндері 0 мәнінен басталады.


## Examples

### Example #1 
&#34;ABEFC&#34; мәтіндік мәнінен 2 орнында 1 таңбаны жою.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
&#34;ABEFC&#34; мәтіндік мәнінен 2 орнынан бастап екі таңбаны жою.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
