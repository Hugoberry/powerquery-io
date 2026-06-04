---
title: Date.ToText
---

# Date.ToText


Күн мәнінің мәтіндік көрінісін қайтарады.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

`date` мәтіндік көрінісін қайтарады. Міндетті емес `options` `record` параметрі, қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. `culture` тек бұрынғы жұмыс ағындары үшін пайдаланылады. `record` параметрі келесі өрістерді қамтуы мүмкін:

-   `Пішім`: пайдаланатын пішімді көрсететін `мәтіндік` мән. Қосымша мәліметтер алу үшін, https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті қалдырып кетсеңіз немесе `null` көрсетсеңіз, `Culture` параметрінде көрсетілген әдепкі күн пішімі пайдаланылады.
-   `Culture`: `Format` мәні null болмаса, `Culture` кейбір пішім көрсеткіштерін басқарады. Мысалы, `"en-US"` тілінде `"MMM"` мәні `"Jan", "Feb", "Mar", ...`, ал `"ru-RU"` тілінде `"MMM"` мәні `"янв", "фев", "мар", ...` болады. `Format` мәні `null` болса, `Culture` пайдаланатын әдепкі пішімді басқарады. `Culture` мәні `null` болғанда немесе өткізіп жіберілгенде, `Culture.Current` пайдаланылады.

Бұрынғы жұмыс ағындарын қолдау үшін `options` және `culture` мәтіндік мәндер де болуы мүмкін. Бұл `options = [Format = options, Culture = culture]` сияқты әрекет етеді.


## Examples

### Example #1
`#date(2010, 12, 31)` мәнін `text` мәніне түрлендіреді. *Нәтиже ағымдағы мәдениетке байланысты өзгеріп отыруы мүмкін.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Теңшелетін пішімді және неміс тілі мәдениетін пайдаланып түрлендіру
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Хиджра күнтізбесінде Григориан күнтізбесіндегі 2000 жылдың 1 қаңтарына сәйкес келетін жылды табады.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
