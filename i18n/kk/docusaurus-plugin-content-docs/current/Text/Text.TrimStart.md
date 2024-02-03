---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Барлық алдындағы артық бос орындарды жояды.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

<code>text</code> мәтіндік мәнінен барлық алдындағы артық бос орындарды жоюдың нәтижесін қайтарады.


## Examples

### Example #1 
&#34;     a b c d    &#34; мәтінінен алдындағы артық бос орындарды жою.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
