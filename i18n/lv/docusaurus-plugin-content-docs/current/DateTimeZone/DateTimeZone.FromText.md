---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Izveidot datetimezone no lokālā, universālā un pielāgota datetimezone formāta.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Izveido <code>datetimezone</code> vērtību no teksta atveidojuma, <code>text</code>. Neobligāts <code>ieraksta</code> parametrs, <code>options</code>, var tikt nodrošināts, lai precizētu papildu rekvizītus. <code>Ieraksts</code> var saturēt tālāk norādītos laukus:<ul>   <li><code>Format</code>: <code>teksta</code> vērtība, kas norāda uz izmantojamo formātu. Dodieties uz https://go.microsoft.com/fwlink/?linkid=2180104 un https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas vai <code>null</code> vērtības norādīšanas rezultātā notiks datuma parsēšana, izmantojot labākos rezultātus.</li>   <li><code>Culture</code>: kad <code>Format</code> vērtība nav null, <code>Culture</code> kontrolē atsevišķus formāta apzīmētājus. Piemēram, <code>"en-US"</code> <code>"MMM"</code> ir <code>"Jan", "Feb", "Mar", ...</code>, bet <code>"ru-RU"</code> <code>"MMM"</code> ir <code>"янв", "фев", "мар", ...</code>. Kad <code>Format</code> ir <code>null</code>, <code>Culture</code> kontrolē noklusējuma formāta izmantošanu. Kad <code>Culture</code> ir <code>null</code> vai izlaists, tiek izmantots <code>Culture.Current</code>.</li></ul>Lai atbalstītu mantotās darbplūsmas, <code>options</code> var būt arī teksta vērtības. Tam ir tāda pati uzvedība kā tad, ja <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertēt &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; par &lt;code&gt;datetimezone&lt;/code&gt; vērtību.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Konvertēt, izmantojot pielāgotu formātu un vācu kultūru.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Konvertēt, izmantojot ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
