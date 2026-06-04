---
title: DateTime.FromText
---

# DateTime.FromText


Жергілікті және әмбебап күн/уақыт пішімдерінен күнді және уақыт белдеуін жасайды.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

`text` мәтіндік көрінісінен `datetime` мәнін жасайды. Міндетті емес `options` `record` параметрі, қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. `record` параметрі келесі өрістерді қамтуы мүмкін:

-   `Пішім`: пайдаланатын пішімді көрсететін `мәтіндік` мән. Қосымша мәліметтер алу үшін, https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті өткізіп жіберу немесе `null` мәнін беру ең жақсы болжамды пайдаланып күнді талдауға әкеледі.
-   `Culture`: `Format` мәні null болмаса, `Culture` кейбір пішім көрсеткіштерін басқарады. Мысалы, `"en-US"` тілінде `"MMM"` мәні `"Jan", "Feb", "Mar", ...`, ал `"ru-RU"` тілінде `"MMM"` мәні `"янв", "фев", "мар", ...` болады. `Format` мәні `null` болса, `Culture` пайдаланатын әдепкі пішімді басқарады. `Culture` мәні `null` болғанда немесе өткізіп жіберілгенде, `Culture.Current` пайдаланылады.

Бұрынғы жұмыс ағындарын қолдау үшін `options` мәтіндік мән де болуы мүмкін. `= [Format = null, Culture = опциялар]` болса, мұның әрекеті бірдей болады.


## Examples

### Example #1
`"2010-12-31T01:30:00"` мәнін күн/уақыт мәніне түрлендіру.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
`"2010-12-31T01:30:00.121212"` мәнін күн/уақыт мәніне түрлендіру.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
`"2010-12-31T01:30:00"` мәнін күн/уақыт мәніне түрлендіру.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
`"20101231T013000"` мәнін datetime мәніне түрлендіру.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
