---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

Күн және уақыт белдеуі мәнінің мәтіндік көрінісін қайтарады.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

<code>dateTimeZone</code> мәтіндік көрінісін қайтарады. Міндетті емес <code>options</code> <code>record</code> параметрі, қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. <code>culture</code> тек бұрынғы жұмыс ағындары үшін пайдаланылады. <code>record</code> параметрі келесі өрістерді қамтуы мүмкін:<ul>   <li><code>Format</code>:Пайдалану керек пішімді көрсететін <code>text</code> мәні. Қосымша мәлімет алу үшін https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті қалдырып кетсеңіз немесе <code>null</code> көрсетсеңіз, <code>Culture</code> параметрінде көрсетілген әдепкі күн пішімі пайдаланылады.</li>   <li><code>Culture</code>: <code>Format</code> мәні null болмаса, <code>Culture</code> кейбір пішім көрсеткіштерін басқарады. Мысалы, <code>"en-US"</code> параметрінде <code>"MMM"</code> <code>"Jan", "Feb", "Mar", ...</code>, ал <code>"ru-RU"</code> параметрінде <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> болып көрсетіледі. <code>Format</code> мәні <code>null</code> болғанда, <code>Culture</code> пайдалану керек әдепкі пішімді басқарады. <code>Culture</code> мәні <code>null</code> болғанда немесе өткізіп жіберілгенде, <code>Culture.Current</code> пайдаланылады.</li></ul>Бұрынғы жұмыс ағындарын қолдау үшін, <code>options</code> және <code>culture</code> мәтіндік мәндер де болуы мүмкін. <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> болса, мұның әрекеті бірдей болады.


## Examples

### Example #1 
&lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; мәнін &lt;code&gt;text&lt;/code&gt; мәніне түрлендіреді. &lt;i&gt;Нәтиже ағымдағы мәдениетке байланысты өзгеріп отыруы мүмкін.&lt;/i&gt;
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
