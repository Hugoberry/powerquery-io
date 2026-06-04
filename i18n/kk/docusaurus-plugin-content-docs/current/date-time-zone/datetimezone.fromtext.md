---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Жергілікті, әмбебап және теңшелетін datetimezone пішімдерінен datetimezone мәнін жасайды.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

`text` мәтіндік көрінісінен `datetimezone` мәнін жасайды. Міндетті емес `options` `record` параметрі, қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. `record` параметрі келесі өрістерді қамтуы мүмкін:

-   `Пішім`: пайдаланатын пішімді көрсететін `мәтіндік` мән. Қосымша мәліметтер алу үшін, https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті өткізіп жіберу немесе `null` мәнін беру ең жақсы болжамды пайдаланып күнді талдауға әкеледі.
-   `Culture`: `Format` мәні null болмаса, `Culture` кейбір пішім көрсеткіштерін басқарады. Мысалы, `"en-US"` тілінде `"MMM"` мәні `"Jan", "Feb", "Mar", ...`, ал `"ru-RU"` тілінде `"MMM"` мәні `"янв", "фев", "мар", ...` болады. `Format` мәні `null` болса, `Culture` пайдаланатын әдепкі пішімді басқарады. `Culture` мәні `null` болғанда немесе өткізіп жіберілгенде, `Culture.Current` пайдаланылады.

Бұрынғы жұмыс ағындарын қолдау үшін `options` мәтіндік мән де болуы мүмкін. `= [Format = null, Culture = опциялар]` болса, мұның әрекеті бірдей болады.


## Examples

### Example #1
`"2010-12-31T01:30:00-08:00"` `datetimezone` мәніне түрлендіру.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Теңшелетін пішімді және неміс тілі мәдениетін пайдаланып түрлендіру
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
ISO 8601 арқылы түрлендіру.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
