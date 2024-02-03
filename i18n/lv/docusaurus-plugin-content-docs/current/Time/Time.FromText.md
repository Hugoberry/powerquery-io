---
title: Time.FromText
---

# Time.FromText


## Description

Veido Time no vietējiem, universālajiem un pielāgotajiem Time formātiem.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Izveido <code>time</code> vērtību no teksta atveidojuma, <code>text</code>. Neobligāts <code>record</code> parametrs, <code>options</code>, var tikt nodrošināts, lai precizētu papildu rekvizītus. <code>Ieraksts</code> var saturēt tālāk norādītos laukus:<ul>   <li><code>Format</code>: <code>text</code> vērtība, kas norāda uz izmantojamo formātu. Dodieties uz https://go.microsoft.com/fwlink/?linkid=2180104 un https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas vai <code>null</code> vērtības norādīšanas rezultātā notiks datuma parsēšana, izmantojot labākos rezultātus.</li>   <li><code>Culture</code>: kad <code>Format</code> vērtība nav null, <code>Culture</code> kontrolē atsevišķus formāta apzīmētājus. Piemēram, <code>"en-US"</code> <code>"tt"</code> ir <code>"AM" vai "PM"</code>, bet <code>"ar-EG"</code> <code>"tt"</code> ir <code>"ص" vai "م"</code>. Kad <code>Format</code> ir <code>null</code>, <code>Culture</code> kontrolē noklusējuma formāta izmantošanu. Kad <code>Culture</code> ir <code>null</code> vai izlaists, tiek izmantots <code>Culture.Current</code>.</li></ul>Lai atbalstītu mantotās darbplūsmas, <code>options</code> var būt arī teksta vērtības. Tam ir tāda pati uzvedība kā tad, ja <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Pārvērtiet &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; par Time vērtību.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Konvertēt &lt;code&gt;&#34;1012&#34;&lt;/code&gt; uz Time vērtību.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Konvertēt &lt;code&gt;&#34;10&#34;&lt;/code&gt; uz Time vērtību.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
