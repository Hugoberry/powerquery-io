---
title: Text.Select
---

# Text.Select


Кіріс мәтіндік мәннен берілген таңбаның немесе таңбалар тізімінің барлық даналарын таңдайды.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

`selectChars` ішінде жойылмаған барлық таңбалармен `text` мәтіндік мәнінің көшірмесін қайтарады.


## Examples

### Example #1
Мәтіндік мәннен "а" – "я" аумағындағы барлық таңбаларды таңдау.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
