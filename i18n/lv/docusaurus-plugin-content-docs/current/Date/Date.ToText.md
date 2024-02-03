---
title: Date.ToText
---

# Date.ToText


## Description

Atgriež datuma vērtības teksta attēlojumu.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Atgriež <code>date</code> teksta atveidojumu. Neobligāts <code>record</code> parametrs, <code>options</code>, var tikt nodrošināts, lai precizētu papildu rekvizītus. <code>culture</code> tiek izmantots tikai mantotās darbplūsmās. <code>record</code> var saturēt tālāk norādītos laukus:<ul>   <li><code>Format</code>: <code>text</code> vērtība, kas norāda uz izmantojamo formātu. Dodieties uz https://go.microsoft.com/fwlink/?linkid=2180104 un https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas vai <code>null</code> vērtības norādīšanas rezultātā tiks izmantots noklusējuma datuma noformējums, ko nosaka <code>Culture</code>.</li>   <li><code>Culture</code>: kad <code>Format</code> vērtība nav null, <code>Culture</code> kontrolē atsevišķus formāta apzīmētājus. Piemēram, <code>"en-US"</code> <code>"MMM"</code> ir <code>"Jan", "Feb", "Mar", ...</code>, bet <code>"ru-RU"</code> <code>"MMM"</code> ir <code>"янв", "фев", "мар", ...</code>. Kad <code>Format</code> ir <code>null</code>, <code>Culture</code> kontrolē noklusējuma formāta izmantošanu. Kad <code>Culture</code> ir <code>null</code> vai izlaists, tiek izmantots <code>Culture.Current</code>.</li></ul>Lai atbalstītu mantotās darbplūsmas, <code>options</code> un <code>culture</code> var būt arī teksta vērtības. Tam ir tāda pati uzvedība kā tad, ja <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertēt &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; par &lt;code&gt;text&lt;/code&gt; vērtību. &lt;i&gt;Rezultāts var atšķirties atkarībā no pašreizējās kultūras.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Konvertēt, izmantojot pielāgotu formātu un vācu kultūru.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Atrodiet gadu Hidžras kalendārā, kas atbilst 2000. gada 1. janvārim pēc Gregora kalendāra.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
