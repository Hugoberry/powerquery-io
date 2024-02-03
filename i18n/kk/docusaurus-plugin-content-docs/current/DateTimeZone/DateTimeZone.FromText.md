---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Жергілікті, әмбебап және теңшелетін datetimezone пішімдерінен datetimezone мәнін жасайды.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

<code>text</code> мәтіндік көрінісінен <code>datetimezone</code> мәнін жасайды. Міндетті емес <code>record</code> параметрі, <code>options</code> қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. <code>record</code> келесі өрістерді қамтуы мүмкін:<ul>   <li><code>Format</code>: пайдалану керек пішімді көрсететін <code>text</code> мәні. Қосымша мәлімет алу үшін https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті өткізіп жіберу немесе <code>null</code> мәнін беру ең жақсы болжамды пайдаланып күнді талдауға әкеледі.</li>   <li><code>Culture</code>: <code>Format</code> мәні null болмаса, <code>Culture</code> кейбір пішім көрсеткіштерін басқарады. Мысалы, <code>"en-US"</code> ішіндегі <code>"MMM"</code>: <code>"Jan", "Feb", "Mar", ...</code>, ал <code>"ru-RU"</code> ішіндегі <code>"MMM"</code>: <code>"янв", "фев", "мар", ...</code>. <code>Format</code> мәні <code>null</code> болғанда, <code>Culture</code> пайдалану керек әдепкі пішімді басқарады. <code>Culture</code> мәні <code>null</code> болғанда немесе өткізіп жіберілгенде, <code>Culture.Current</code> пайдаланылады.</li></ul>Бұрынғы жұмыс ағындарын қолдау үшін <code>options</code> мәтіндік мән де болуы мүмкін. <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> болса, мұның әрекеті бірдей болады.


## Examples

### Example #1 
&lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; &lt;code&gt;datetimezone&lt;/code&gt; мәніне түрлендіру.
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
