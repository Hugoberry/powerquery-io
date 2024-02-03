---
title: Date.FromText
---

# Date.FromText


## Description

Жергілікті, әмбебап және теңшелетін күн пішімдерінен күнді жасайды.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

<code>text</code> мәтіндік көрінісінен <code>date</code> мәнін жасайды. Міндетті емес <code>record</code> параметрі, <code>options</code> қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. <code>record</code> келесі өрістерді қамтуы мүмкін:<ul>   <li><code>Format</code>: пайдалану керек пішімді көрсететін <code>text</code> мәні. Қосымша мәлімет алу үшін https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті өткізіп жіберу немесе <code>null</code> мәнін беру ең жақсы болжамды пайдаланып күнді талдауға әкеледі.</li>   <li><code>Culture</code>: <code>Format</code> мәні null болмаса, <code>Culture</code> кейбір пішім көрсеткіштерін басқарады. Мысалы, <code>"en-US"</code> ішіндегі <code>"MMM"</code>: <code>"Jan", "Feb", "Mar", ...</code>, ал <code>"ru-RU"</code> ішіндегі <code>"MMM"</code>: <code>"янв", "фев", "мар", ...</code>. <code>Format</code> мәні <code>null</code> болғанда, <code>Culture</code> пайдалану керек әдепкі пішімді басқарады. <code>Culture</code> мәні <code>null</code> болғанда немесе өткізіп жіберілгенде, <code>Culture.Current</code> пайдаланылады.</li></ul>Бұрынғы жұмыс ағындарын қолдау үшін <code>options</code> мәтіндік мән де болуы мүмкін. <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> болса, мұның әрекеті бірдей болады.


## Examples

### Example #1 
&lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; мәнін &lt;code&gt;date&lt;/code&gt; мәніне түрлендіру.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Теңшелетін пішімді және неміс тілі мәдениетін пайдаланып түрлендіру
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Хиджра күнтізбесінде Григориан күнтізбесіндегі 1400 жылдың басына сәйкес келетін жылды табады.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
