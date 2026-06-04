---
title: Single.From
---

# Single.From


Берілген мәннен Single мәнін жасайды.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Берілген `value` мәнінен Single `number` мәнін қайтарады. Егер берілген `value` `null` болса, `Single.From` `null` мәнін қайтарады. Егер берілген `value` Single ауқымындағы `number` болса, `value` қайтарылады, әйтпесе қате қайтарылады. Егер `value` басқа кез келген түрде болса, ол алдымен `Number.FromText` көмегімен `number` мәніне түрлендіріледі. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
`"1.5"` Single `сан` мәнін алыңыз.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
