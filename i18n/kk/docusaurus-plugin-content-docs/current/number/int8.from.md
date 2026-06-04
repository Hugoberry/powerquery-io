---
title: Int8.From
---

# Int8.From


Берілген мәннен белгіленген 8 биттік бүтін сан жасайды.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Берілген `value` мәнінен белгіленген 8 биттік бүтін `сан` мәнін қайтарады. Егер берілген `value` мәні `null` болса, `Int8.From` `null` мәнін қайтарады. Егер берілген `value` мәні бөлшегі жоқ белгіленген 8 биттік бүтін сан ауқымындағы `number` болса, `value` қайтарылады. Егер оның бөлшек саны болса, ол сан көрсетілген режиммен дөңгелектеледі. Әдепкі дөңгелектеу режимі – `RoundingMode.ToEven`. Егер `value` мәні басқа түрге жататын болса, алдымен ол `Number.FromText` көмегімен `number` мәніне түрлендіріледі. Қолжетімді дөңгелектеу режимдері үшін `Number.Round` мәнін қараңыз. Қосымша `culture` мәні берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
`"4"` белгіленген 8 биттік бүтін `сан` мәнін алыңыз .
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`RoundingMode.AwayFromZero` пайдалана отырып, `"4.5"` белгіленген 8 биттік бүтін `сан` мәнін алыңыз.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
