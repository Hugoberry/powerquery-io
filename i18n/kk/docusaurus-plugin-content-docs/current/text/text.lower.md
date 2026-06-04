---
title: Text.Lower
---

# Text.Lower


Барлық таңбаларды кіші әріптерге түрлендіреді.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

`text` ішіндегі барлық таңбаларды төменгі регистрге түрлендіру нәтижесін қайтарады. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
"AbCd" төменгі регистрдегі нұсқасын алу.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
