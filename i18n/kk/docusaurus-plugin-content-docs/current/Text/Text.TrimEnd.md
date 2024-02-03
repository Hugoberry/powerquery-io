---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Барлық соңындағы артық бос орындарды жояды.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

<code>text</code> мәтіндік мәнінен барлық соңындағы артық бос орындарды жоюдың нәтижесін қайтарады.


## Examples

### Example #1 
&#34;     a b c d    &#34; мәтінінен соңындағы артық бос орындарды жою.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
