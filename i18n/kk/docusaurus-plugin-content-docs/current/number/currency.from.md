---
title: Currency.From
---

# Currency.From


Берілген мәннен валюта мәнін қайтарады.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Берілген `value` мәнінен `currency` мәнін қайтарады. Егер берілген `value` мәні `null` болса, `Currency.From` `null` мәнін қайтарады. Егер берілген `value` мәні валюта ауқымындағы `number` болса, `value` мәнінің бөлшек бөлігі 4 ондық цифрға дөңгелектеліп, қайтарылады. Егер `value` басқа кез келген түрде болса, ол алдымен `Number.FromText` көмегімен `number` мәніне түрлендіріледі. Валюта үшін жарамды ауқым `-922,337,203,685,477.5808` - `922,337,203,685,477.5807` болып табылады. Қолжетімді дөңгелектеу режимдері үшін `Number.Round` қараңыз. Әдепкі мән `RoundingMode.ToEven` болып табылады. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
`"1,23455"` мәнінің `валюта` мәнін алыңыз.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
`RoundingMode.Down` көмегімен `"1.23455"` `валюта` мәнін алыңыз.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
