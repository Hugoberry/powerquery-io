---
title: Time.ToText
---

# Time.ToText


## Description

Уақыт мәнінің мәтіндік көрінісін қайтарады.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

<code>time</code> мәтіндік көрінісін қайтарады. Міндетті емес <code>options</code> <code>record</code> параметрі, қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. <code>culture</code> тек бұрынғы жұмыс ағындары үшін пайдаланылады. <code>record</code> параметрі келесі өрістерді қамтуы мүмкін:<ul>   <li><code>Format</code>:Пайдалану керек пішімді көрсететін <code>text</code> мәні. Қосымша мәліметтер алу үшін, https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті қалдырып кетсеңіз немесе <code>null</code> көрсетсеңіз, <code>Culture</code> параметрінде көрсетілген әдепкі күн пішімі пайдаланылады.</li>   <li><code>Culture</code>: <code>Format</code> мәні null болмаса, <code>Culture</code> кейбір пішім көрсеткіштерін басқарады. Мысалы, <code>"en-US"</code> тілінде <code>"tt"</code> дегеніміз <code>"AM" немесе "PM"</code> дегенді білдіреді, ал <code>"ar-EG"</code> тілінде <code>"tt"</code> дегеніміз <code>"ص" немесе "م"</code> дегенді білдіреді. <code>Format</code> мәні <code>null</code> болғанда, <code>Culture</code> пайдалану керек әдепкі пішімді басқарады. <code>Culture</code> мәні <code>null</code> болғанда немесе өткізіп жіберілгенде, <code>Culture.Current</code> пайдаланылады.</li></ul>Бұрынғы жұмыс ағындарын қолдау үшін <code>options</code> және <code>culture</code> мәтіндік мәндер де болуы мүмкін. <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> болса, мұның әрекеті бірдей болады.


## Examples

### Example #1 
&lt;code&gt;#time(01, 30, 25)&lt;/code&gt; мәнін &lt;code&gt;text&lt;/code&gt; мәніне түрлендіреді. &lt;i&gt;Нәтиже ағымдағы мәдениетке байланысты өзгеріп отыруы мүмкін.&lt;/i&gt;
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
