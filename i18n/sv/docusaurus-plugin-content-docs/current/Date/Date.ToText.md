---
title: Date.ToText
---

# Date.ToText


## Description

Returnerar en textrepresentation av datumvärdet.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Returnerar en textrepresentation av <code>date</code>. En valfri <code>post</code> parameter, <code>options</code>, kan tillhandahållas för att ange ytterligare egenskaper. <code>culture</code> används endast för äldre arbetsflöden. Den <code>posten</code> kan innehålla följande fält: <ul>   <li><code>Format-</code>: Ett <code>textvärde</code> som anger vilket format som ska användas. Mer information finns på https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar det här fältet eller anger <code>1 null-</code> formateras datumet med standardvärdet som definieras i <code>Culture</code>.</li>   <li><code>Culture</code>: Om <code>Format</code> inte är null styr <code>Culture</code> vissa formatspecificerare. Exempel: i <code>"en-US"</code> <code>"MMM"</code> är <code>"Jan", "Feb", "Mar", ...</code>, while in <code>"ru-RU"</code> <code>"MMM"</code> is <code>"ннв", "фев", "мар", ...</code>. När <code>Format</code> är <code>null</code> styr <code>Culture</code> standardformatet som ska användas. När <code>Culture</code> är <code>null</code> eller omiteras används <code>Culture.Nuvarande</code>.</li></ul>Om du vill stödja äldre arbetsflöden kan <code>options</code> och <code>culture</code> också vara textvärden. Detta har samma beteende som om <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertera &lt;code&gt;#datum(2010, 12, 31)&lt;/code&gt; till ett &lt;code&gt;text&lt;/code&gt; värde. &lt;i&gt;Resultatresultatet kan variera beroende på aktuell kultur.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Konvertera med ett anpassat format och den tyska kulturen.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Hitta året i Hijri-kalendern som motsvarar den 1 januari 2000 i den gregorianska kalendern.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
