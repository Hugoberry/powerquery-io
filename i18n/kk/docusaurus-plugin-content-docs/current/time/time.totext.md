---
title: Time.ToText
---

# Time.ToText


Уақыт мәнінің мәтіндік көрінісін қайтарады.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

`time` мәтіндік көрінісін қайтарады. Міндетті емес `options` `record` параметрі, қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. `culture` тек бұрынғы жұмыс ағындары үшін пайдаланылады. `record` параметрі келесі өрістерді қамтуы мүмкін:

-   `Пішім`: пайдаланатын пішімді көрсететін `мәтіндік` мән. Қосымша мәліметтер алу үшін, https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті қалдырып кетсеңіз немесе `null` көрсетсеңіз, `Culture` параметрінде көрсетілген әдепкі күн пішімі пайдаланылады.
-   `Culture`: `Format` мәні null болмаса, `Culture` кейбір пішім көрсеткіштерін басқарады. Мысалы, `"en-US"` тілінде `"tt"` дегеніміз `"AM" немесе "PM"` дегенді білдіреді, ал `"ar-EG"` тілінде `"tt"` дегеніміз `"ص" немесе "م"` дегенді білдіреді. `Format` мәні `null` болса, `Culture` пайдаланатын әдепкі пішімді басқарады. `Culture` мәні `null` болғанда немесе өткізіп жіберілгенде, `Culture.Current` пайдаланылады.

Бұрынғы жұмыс ағындарын қолдау үшін `options` және `culture` мәтіндік мәндер де болуы мүмкін. Бұл `options = [Format = options, Culture = culture]` сияқты әрекет етеді.


## Examples

### Example #1
`#time(01, 30, 25)` мәнін `text` мәніне түрлендіреді. *Нәтиже ағымдағы мәдениетке байланысты өзгеріп отыруы мүмкін.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Теңшелетін пішімді және неміс тілі мәдениетін пайдаланып түрлендіру
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Стандартты уақыт пішімін пайдаланып түрлендіру.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
