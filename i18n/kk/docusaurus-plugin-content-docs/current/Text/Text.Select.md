---
title: Text.Select
---

# Text.Select


## Description

Кіріс мәтіндік мәннен берілген таңбаның немесе таңбалар тізімінің барлық даналарын таңдайды.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

<code>selectChars</code> ішінде жойылмаған барлық таңбалармен <code>text</code> мәтіндік мәнінің көшірмесін қайтарады.  


## Examples

### Example #1 
Мәтіндік мәннен &#34;а&#34; – &#34;я&#34; аумағындағы барлық таңбаларды таңдау.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
