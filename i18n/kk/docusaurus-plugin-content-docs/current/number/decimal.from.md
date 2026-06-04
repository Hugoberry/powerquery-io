---
title: Decimal.From
---

# Decimal.From


Берілген мәннен ондық сан жасайды.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Берілген `value` мәнінен Decimal `number` мәнін қайтарады. Егер берілген `value` `null` болса, `Decimal.From` `null` мәнін қайтарады. Егер берілген `value` Decimal ауқымындағы `number` болса, `value` қайтарылады, әйтпесе қате қайтарылады. Егер `value` басқа кез келген түрде болса, ол алдымен `Number.FromText` көмегімен `number` мәніне түрлендіріледі. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
`"4.5"` ондық `санын` алыңыз.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
