---
title: Text.Trim
---

# Text.Trim


## Description

Барлық алдындағы және соңындағы артық бос орындарды жояды.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

<code>text</code> мәтіндік мәнінен барлық алдындағы және артындағы артық бос орындарды жоюдың нәтижесін қайтарады.


## Examples

### Example #1 
&#34;     a b c d    &#34; мәтінінен алдындағы және соңындағы артық бос орындарды жою.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
