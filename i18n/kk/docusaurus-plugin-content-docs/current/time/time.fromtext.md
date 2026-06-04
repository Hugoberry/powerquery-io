---
title: Time.FromText
---

# Time.FromText


Жергілікті, әмбебап және теңшелетін уақыт пішімдерінен уақытты жасайды.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

`text` мәтіндік көрінісінен `time` мәнін жасайды. Міндетті емес `options` `record` параметрі, қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. `record` параметрі келесі өрістерді қамтуы мүмкін:

-   `Пішім`: пайдаланатын пішімді көрсететін `мәтіндік` мән. Қосымша мәліметтер алу үшін, https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті өткізіп жіберу немесе `null` мәнін беру ең жақсы болжамды пайдаланып уақытты талдауға әкеледі.
-   `Culture`: `Format` мәні null болмаса, `Culture` кейбір пішім көрсеткіштерін басқарады. Мысалы, `"en-US"` тілінде `"tt"` дегеніміз `"AM" немесе "PM"` дегенді білдіреді, ал `"ar-EG"` тілінде `"tt"` дегеніміз `"ص" немесе "م"` дегенді білдіреді. `Format` мәні `null` болса, `Culture` пайдаланатын әдепкі пішімді басқарады. `Culture` мәні `null` болғанда немесе өткізіп жіберілгенде, `Culture.Current` пайдаланылады.

Бұрынғы жұмыс ағындарын қолдау үшін `options` мәтіндік мән де болуы мүмкін. `= [Format = null, Culture = опциялар]` болса, мұның әрекеті бірдей болады.


## Examples

### Example #1
`"10:12:31am"` мәнін уақыт мәніне түрлендіру.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
`"1012"` мәнін Уақыт мәніне түрлендіру.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
`"10"` мәнін Уақыт мәніне түрлендіру.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
