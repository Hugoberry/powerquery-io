---
title: Double.From
---

# Double.From


Берілген мәнен Double мәнін жасайды.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Берілген `value` мәнінен Double `number` мәнін қайтарады. Егер берілген `value` `null` болса, `Double.From` `null` мәнін қайтарады. Егер берілген `value` Double ауқымындағы `number` болса, `value` қайтарылады, әйтпесе қате қайтарылады. Егер `value` басқа кез келген түрде болса, ол алдымен `Number.FromText` көмегімен `number` мәніне түрлендіріледі. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
`"4"` Double `саны` мәнін алыңыз.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
