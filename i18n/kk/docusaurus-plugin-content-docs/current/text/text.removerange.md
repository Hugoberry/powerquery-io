---
title: Text.RemoveRange
---

# Text.RemoveRange


Осы ауытқуда басталатын таңбалар санын жояды


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

`text` мәтіндік мәнінің `offset` орнынан барлық таңбалар жойылған көшірмесін қайтарады. Жоятын таңбалар санын көрсету үшін `count` міндетті емес параметрін пайдалануға болады. `count` әдепкі мәні — 1. Орын мәндері 0 мәнінен басталады.


## Examples

### Example #1
"ABEFC" мәтіндік мәнінен 2 орнында 1 таңбаны жою.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
"ABEFC" мәтіндік мәнінен 2 орнынан бастап екі таңбаны жою.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
