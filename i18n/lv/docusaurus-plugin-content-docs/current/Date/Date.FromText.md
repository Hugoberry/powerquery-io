---
title: Date.FromText
---

# Date.FromText


## Description

Izveido Date no lokālā, universālā un pielāgotā Date formāta.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Izveido <code>date</code> vērtību no teksta atveidojuma, <code>text</code>. Neobligāts <code>ieraksta</code> parametrs, <code>options</code>, var tikt nodrošināts, lai precizētu papildu rekvizītus. <code>Ieraksts</code> var saturēt tālāk norādītos laukus:<ul>   <li><code>Format</code>: <code>teksta</code> vērtība, kas norāda uz izmantojamo formātu. Dodieties uz https://go.microsoft.com/fwlink/?linkid=2180104 un https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas vai <code>null</code> vērtības norādīšanas rezultātā notiks datuma parsēšana, izmantojot labākos rezultātus.</li>   <li><code>Culture</code>: kad <code>Format</code> vērtība nav null, <code>Culture</code> kontrolē atsevišķus formāta apzīmētājus. Piemēram, <code>"en-US"</code> <code>"MMM"</code> ir <code>"Jan", "Feb", "Mar", ...</code>, bet <code>"ru-RU"</code> <code>"MMM"</code> ir <code>"янв", "фев", "мар", ...</code>. Kad <code>Format</code> ir <code>null</code>, <code>Culture</code> kontrolē noklusējuma formāta izmantošanu. Kad <code>Culture</code> ir <code>null</code> vai izlaists, tiek izmantots <code>Culture.Current</code>.</li></ul>Lai atbalstītu mantotās darbplūsmas, <code>options</code> var būt arī teksta vērtības. Tam ir tāda pati uzvedība kā tad, ja <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertēt &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; par &lt;code&gt;date&lt;/code&gt; vērtību.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Konvertēt, izmantojot pielāgotu formātu un vācu kultūru.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Atrodiet datumu Gregora kalendārā, kas atbilst 1400. gada pēc Hidžras kalendāra sākumam.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
