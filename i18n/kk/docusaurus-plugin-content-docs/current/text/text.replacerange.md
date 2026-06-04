---
title: Text.ReplaceRange
---

# Text.ReplaceRange


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


## Remarks

`text` мәтіндік мәнінен `offset` орнынан бастап `count` таңбалар санын жою, содан кейін `newText` мәтіндік мәнін `text` ішінде дәл сол орында кірістірудің нәтижесін қайтарады.


## Examples

### Example #1
"ABGF" мәтіндік мәніндегі 2 орнындағы бір таңбаны "CDE" жаңа мәтіндік мәнімен ауыстыру.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
