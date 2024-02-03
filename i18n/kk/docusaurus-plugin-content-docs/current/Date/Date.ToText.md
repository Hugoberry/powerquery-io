---
title: Date.ToText
---

# Date.ToText


## Description

Күн мәнінің мәтіндік көрінісін қайтарады.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

<code>date</code> мәтіндік көрінісін қайтарады. Міндетті емес <code>options</code> <code>record</code> параметрі, қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. <code>culture</code> тек бұрынғы жұмыс ағындары үшін пайдаланылады. <code>record</code> параметрі келесі өрістерді қамтуы мүмкін:<ul>   <li><code>Format</code>:Пайдалану керек пішімді көрсететін <code>text</code> мәні. Қосымша мәлімет алу үшін https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті қалдырып кетсеңіз немесе <code>null</code> көрсетсеңіз, <code>Culture</code> параметрінде көрсетілген әдепкі күн пішімі пайдаланылады.</li>   <li><code>Culture</code>: <code>Format</code> мәні null болмаса, <code>Culture</code> кейбір пішім көрсеткіштерін басқарады. Мысалы, <code>"en-US"</code> параметрінде <code>"MMM"</code> <code>"Jan", "Feb", "Mar", ...</code>, ал <code>"ru-RU"</code> параметрінде <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> болып көрсетіледі. <code>Format</code> мәні <code>null</code> болғанда, <code>Culture</code> пайдалану керек әдепкі пішімді басқарады. <code>Culture</code> мәні <code>null</code> болғанда немесе өткізіп жіберілгенде, <code>Culture.Current</code> пайдаланылады.</li></ul>Бұрынғы жұмыс ағындарын қолдау үшін, <code>options</code> және <code>culture</code> мәтіндік мәндер де болуы мүмкін. <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> болса, мұның әрекеті бірдей болады.


## Examples

### Example #1 
&lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; мәнін &lt;code&gt;text&lt;/code&gt; мәніне түрлендіреді. &lt;i&gt;Нәтиже ағымдағы мәдениетке байланысты өзгеріп отыруы мүмкін.&lt;/i&gt;
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
