---
title: Time.ToText
---

# Time.ToText


## Description

Atgriež laiks vērtības teksta attēlojumu.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Atgriež <code>time</code> teksta atveidojumu. Neobligāts <code>record</code> parametrs, <code>options</code>, var tikt nodrošināts, lai precizētu papildu rekvizītus. <code>culture</code> tiek izmantots tikai mantotās darbplūsmās. <code>record</code> var saturēt tālāk norādītos laukus:<ul>   <li><code>Format</code>: <code>text</code> vērtība, kas norāda uz izmantojamo formātu. Papildinformācijai dodieties uz https://go.microsoft.com/fwlink/?linkid=2180104 un https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas vai <code>null</code> vērtības norādīšanas rezultātā tiks izmantots noklusējuma datuma noformējums, ko nosaka <code>Culture</code>.</li>   <li><code>Culture</code>: kad <code>Format</code> vērtība nav null, <code>Culture</code> kontrolē atsevišķus formāta apzīmētājus. Piemēram, <code>"en-US"</code> <code>"tt"</code> ir <code>"AM" vai "PM"</code>, bet <code>"ar-EG"</code> <code>"tt"</code> ir <code>"ص" vai "م"</code>. Kad <code>Format</code> ir <code>null</code>, <code>Culture</code> kontrolē noklusējuma formāta izmantošanu. Kad <code>Culture</code> ir <code>null</code> vai izlaists, tiek izmantots <code>Culture.Current</code>.</li></ul>Lai atbalstītu mantotās darbplūsmas, <code>options</code> un <code>culture</code> var būt arī teksta vērtības. Tam ir tāda pati uzvedība kā tad, ja <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertēt &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; par &lt;code&gt;text&lt;/code&gt; vērtību. &lt;i&gt;Rezultāts var atšķirties atkarībā no pašreizējās kultūras.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Konvertēt, izmantojot pielāgotu formātu un vācu kultūru.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Konvertēt, izmantojot standarta laika formātu.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
