---
title: Percentage.From
---

# Percentage.From


Берілген мәннің пайыздық мәнін қайтарады.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Берілген `value` мәнінен `percentage` мәнін қайтарады. Егер берілген `value` болса, `null`, `Percentage.From` `null` мәнін қайтарады. Егер берілген `value` соңында пайыз таңбасы бар`text` болса, түрлендірілген ондық сан қайтарылады. Әйтпесе, бұл мән `Number.From` көмегімен `number` мәніне түрлендіріледі. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
`"12,3%"` үшін `пайыздық` мәнді алыңыз.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
