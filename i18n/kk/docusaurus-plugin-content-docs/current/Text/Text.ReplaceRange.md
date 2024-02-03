---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Таңбалар ауқымын жояды және көрсетілген орында жаңа мәнді кірістіреді.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

<code>text</code> мәтіндік мәнінен <code>offset</code> орнынан бастап <code>count</code> таңбалар санын жою, содан кейін <code>newText</code> мәтіндік мәнін <code>text</code> ішінде дәл сол орында кірістірудің нәтижесін қайтарады.


## Examples

### Example #1 
&#34;ABGF&#34; мәтіндік мәніндегі 2 орнындағы бір таңбаны &#34;CDE&#34; жаңа мәтіндік мәнімен ауыстыру.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
