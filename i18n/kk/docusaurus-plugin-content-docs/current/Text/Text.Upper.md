---
title: Text.Upper
---

# Text.Upper


## Description

Барлық таңбаларды бас әріптерге түрлендіреді.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

<code>text</code> ішіндегі барлық таңбаларды жоғарғы регистрге түрлендіру нәтижесін қайтарады. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1 
&#34;aBcD&#34; жоғарғы регистрдегі нұсқасын алу.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
