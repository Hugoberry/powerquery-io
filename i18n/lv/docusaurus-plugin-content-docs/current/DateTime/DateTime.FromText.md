---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Izveido datetimezone vērtību no vietējā un universālā datetime formāta.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Izveido <code>datetime</code> vērtību no teksta atveidojuma, <code>text</code>. Neobligāts <code>ieraksta</code> parametrs, <code>options</code>, var tikt nodrošināts, lai precizētu papildu rekvizītus. <code>Ieraksts</code> var saturēt tālāk norādītos laukus:<ul>   <li><code>Format</code>: <code>teksta</code> vērtība, kas norāda uz izmantojamo formātu. Dodieties uz https://go.microsoft.com/fwlink/?linkid=2180104 un https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas vai <code>null</code> vērtības norādīšanas rezultātā notiks datuma parsēšana, izmantojot labākos rezultātus.</li>   <li><code>Culture</code>: kad <code>Format</code> vērtība nav null, <code>Culture</code> kontrolē atsevišķus formāta apzīmētājus. Piemēram, <code>"en-US"</code> <code>"MMM"</code> ir <code>"Jan", "Feb", "Mar", ...</code>, bet <code>"ru-RU"</code> <code>"MMM"</code> ir <code>"янв", "фев", "мар", ...</code>. Kad <code>Format</code> ir <code>null</code>, <code>Culture</code> kontrolē noklusējuma formāta izmantošanu. Kad <code>Culture</code> ir <code>null</code> vai izlaists, tiek izmantots <code>Culture.Current</code>.</li></ul>Lai atbalstītu mantotās darbplūsmas, <code>options</code> var būt arī teksta vērtības. Tam ir tāda pati uzvedība kā tad, ja <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertēt &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; uz datetime vērtību.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Konvertēt &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; uz datetime vērtību.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Konvertēt &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; uz datetime vērtību.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Konvertēt &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; uz datetime vērtību.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
