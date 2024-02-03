---
title: Time.FromText
---

# Time.FromText


## Description

Жергілікті, әмбебап және теңшелетін уақыт пішімдерінен уақытты жасайды.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

<code>text</code> мәтіндік көрінісінен <code>time</code> мәнін жасайды. Міндетті емес <code>options</code> <code>record</code> параметрі, қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. <code>record</code> келесі өрістерді қамтуы мүмкін:<ul>   <li><code>Format</code>: пайдалану керек пішімді көрсететін <code>text</code> мәні. Қосымша мәліметтер алу үшін, https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті өткізіп жіберу немесе <code>null</code> мәнін беру ең жақсы болжамды пайдаланып күнді талдауға әкеледі.</li>   <li><code>Culture</code> : <code>Format</code> мәні null болмаса, <code>Culture</code> кейбір пішім көрсеткіштерін басқарады. Мысалы, <code>"en-US"</code> тілінде <code>"tt"</code> дегеніміз <code>"AM" немесе "PM"</code> дегенді білдіреді, ал <code>"ar-EG"</code> тілінде <code>"tt"</code> дегеніміз <code>"ص" немесе "م"</code> дегенді білдіреді. <code>Format</code> мәні <code>null</code> болғанда, <code>Culture</code> пайдалану керек әдепкі пішімді басқарады. <code>Culture</code> мәні <code>null</code> болғанда немесе өткізіп жіберілгенде, <code>Culture.Current</code> пайдаланылады.</li></ul>Бұрынғы жұмыс ағындарын қолдау үшін <code>options</code> мәтіндік мән де болуы мүмкін. <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> болса, мұның әрекеті бірдей болады.


## Examples

### Example #1 
&lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; мәнін уақыт мәніне түрлендіру.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
&lt;code&gt;&#34;1012&#34;&lt;/code&gt; мәнін Уақыт мәніне түрлендіру.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
&lt;code&gt;&#34;10&#34;&lt;/code&gt; мәнін Уақыт мәніне түрлендіру.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
