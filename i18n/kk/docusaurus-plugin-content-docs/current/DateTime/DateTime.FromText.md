---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Жергілікті және әмбебап күн/уақыт пішімдерінен күнді және уақыт белдеуін жасайды.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

<code>text</code> мәтіндік көрінісінен <code>datetime</code> мәнін жасайды. Міндетті емес <code>record</code> параметрі, <code>options</code> қосымша сипаттарды көрсету үшін қамтамасыз етілуі мүмкін. <code>record</code> келесі өрістерді қамтуы мүмкін:<ul>   <li><code>Format</code>: пайдалану керек пішімді көрсететін <code>text</code> мәні. Қосымша мәлімет алу үшін https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті өткізіп жіберу немесе <code>null</code> мәнін беру ең жақсы болжамды пайдаланып күнді талдауға әкеледі.</li>   <li><code>Culture</code>: <code>Format</code> мәні null болмаса, <code>Culture</code> кейбір пішім көрсеткіштерін басқарады. Мысалы, <code>"en-US"</code> ішіндегі <code>"MMM"</code>: <code>"Jan", "Feb", "Mar", ...</code>, ал <code>"ru-RU"</code> ішіндегі <code>"MMM"</code>: <code>"янв", "фев", "мар", ...</code>. <code>Format</code> мәні <code>null</code> болғанда, <code>Culture</code> пайдалану керек әдепкі пішімді басқарады. <code>Culture</code> мәні <code>null</code> болғанда немесе өткізіп жіберілгенде, <code>Culture.Current</code> пайдаланылады.</li></ul>Бұрынғы жұмыс ағындарын қолдау үшін <code>options</code> мәтіндік мән де болуы мүмкін. <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> болса, мұның әрекеті бірдей болады.


## Examples

### Example #1 
&lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; мәнін күн/уақыт мәніне түрлендіру.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
&lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; мәнін күн/уақыт мәніне түрлендіру.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
&lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; мәнін күн/уақыт мәніне түрлендіру.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
&lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; мәнін datetime мәніне түрлендіру.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
