---
title: Text.Lower
---

# Text.Lower


## Description

Барлық таңбаларды кіші әріптерге түрлендіреді.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

<code>text</code> ішіндегі барлық таңбаларды төменгі регистрге түрлендіру нәтижесін қайтарады. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1 
&#34;AbCd&#34; төменгі регистрдегі нұсқасын алу.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
