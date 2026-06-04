---
title: Int64.From
---

# Int64.From


Берілген мәннен 64 биттік бүтін сан жасайды.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Берілген `value` мәнінен 64 биттік бүтін `сан` мәнін қайтарады. Егер берілген `value` мәні `null` болса, `Int64.From` `null` мәнін қайтарады. Егер берілген `value` мәні бөлшегі жоқ 64 биттік бүтін сан ауқымындағы `number` болса, `value` қайтарылады. Егер оның бөлшек саны болса, ол сан көрсетілген режиммен дөңгелектеледі. Әдепкі дөңгелектеу режимі – `RoundingMode.ToEven`. Егер `value` мәні басқа түрге жататын болса, алдымен ол `Number.FromText` көмегімен `number` мәніне түрлендіріледі. Қолжетімді дөңгелектеу режимдері үшін `Number.Round` мәнін қараңыз. Қосымша `culture` мәні берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
`"4"` 64 биттік бүтін сан `number` мәнін алыңыз.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`RoundingMode.AwayFromZero` қолданатын `"4.5"` 64 биттік бүтін `сан` мәні.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
