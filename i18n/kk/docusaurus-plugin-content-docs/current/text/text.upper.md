---
title: Text.Upper
---

# Text.Upper


Барлық таңбаларды бас әріптерге түрлендіреді.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

`text` ішіндегі барлық таңбаларды жоғарғы регистрге түрлендіру нәтижесін қайтарады. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
"aBcD" жоғарғы регистрдегі нұсқасын алу.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
