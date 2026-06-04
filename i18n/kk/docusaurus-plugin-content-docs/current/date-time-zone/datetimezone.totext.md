---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Күн және уақыт белдеуі мәнінің мәтіндік көрінісін қайтарады.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

`dateTimeZone` мәтіндік көрінісін қайтарады. Міндетті емес `options` `record` параметрі, қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. `culture` тек бұрынғы жұмыс ағындары үшін пайдаланылады. `record` параметрі келесі өрістерді қамтуы мүмкін:

-   `Пішім`: пайдаланатын пішімді көрсететін `мәтіндік` мән. Қосымша мәліметтер алу үшін, https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті қалдырып кетсеңіз немесе `null` көрсетсеңіз, `Culture` параметрінде көрсетілген әдепкі күн пішімі пайдаланылады.
-   `Culture`: `Format` мәні null болмаса, `Culture` кейбір пішім көрсеткіштерін басқарады. Мысалы, `"en-US"` тілінде `"MMM"` мәні `"Jan", "Feb", "Mar", ...`, ал `"ru-RU"` тілінде `"MMM"` мәні `"янв", "фев", "мар", ...` болады. `Format` мәні `null` болса, `Culture` пайдаланатын әдепкі пішімді басқарады. `Culture` мәні `null` болғанда немесе өткізіп жіберілгенде, `Culture.Current` пайдаланылады.

Бұрынғы жұмыс ағындарын қолдау үшін `options` және `culture` мәтіндік мәндер де болуы мүмкін. Бұл `options = [Format = options, Culture = culture]` сияқты әрекет етеді.


## Examples

### Example #1
`#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` мәнін `text` мәніне түрлендіреді. *Нәтиже ағымдағы мәдениетке байланысты өзгеріп отыруы мүмкін.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Теңшелетін пішімді және неміс тілі мәдениетін пайдаланып түрлендіру
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
ISO 8601 үлгісін пайдаланып түрлендіру.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
