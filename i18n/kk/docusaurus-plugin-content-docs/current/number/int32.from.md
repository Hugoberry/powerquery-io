---
title: Int32.From
---

# Int32.From


Берілген мәннен 32 биттік бүтін сан жасайды.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Берілген `value` мәнінен 32 биттік бүтін `сан` мәнін қайтарады. Егер берілген `value` мәні `null` болса, `Int32.From` `null` мәнін қайтарады. Егер берілген `value` мәні бөлшегі жоқ 32 биттік бүтін сан ауқымындағы `number` болса, `value` қайтарылады. Егер оның бөлшек саны болса, ол сан көрсетілген режиммен дөңгелектеледі. Әдепкі дөңгелектеу режимі – `RoundingMode.ToEven`. Егер `value` мәні басқа түрге жататын болса, алдымен ол `Number.FromText` көмегімен `number` мәніне түрлендіріледі. Қолжетімді дөңгелектеу режимдері үшін `Number.Round` мәнін қараңыз. Қосымша `culture` мәні берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
`"4"` `сан` мәнінің 32 биттік бүтін санын алыңыз.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`RoundingMode.AwayFromZero` пайдалана отырып, `"4.5"` 32 биттік бүтін `сан` мәнін алыңыз.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
