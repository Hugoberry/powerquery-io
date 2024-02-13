---
title: Date.FromText
---

# Date.FromText


Skapar ett datum från lokala, universella och anpassade datumformat.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Skapar ett <code>date</code> värde från en textrepresentation av <code>text</code>. En valfri <code>post</code> parameter, <code>options</code>, kan tillhandahållas för att ange ytterligare egenskaper. Den <code>posten</code> kan innehålla följande fält: <ul>   <li><code>Format-</code>: Ett <code>textvärde</code> som anger vilket format som ska användas. Gå Mer information finns på https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar detta fält eller anger <code>null</code> kommer det att resultera i att datumet analyseras med bästa möjliga ansträngning.</li>   <li><code>Culture</code>: Om <code>Format</code> inte är null styr <code>Culture</code> vissa formatspecificerare. Exempel: i <code>"en-US"</code> <code>"MMM"</code> är <code>"Jan", "Feb", "Mar", ...</code>, while in <code>"ru-RU"</code> <code>"MMM"</code> is <code>"ннв", "фев", "мар", ...</code>. När <code>Format</code> är <code>null</code> styr <code>Culture</code> standardformatet som ska användas. När <code>Culture</code> är <code>null</code> eller omitteras används <code>Culture.Nuvarande</code>.</li></ul>Om du vill stödja äldre arbetsflöden kan <code>options</code> också vara textvärden. Detta har samma beteende som om <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertera &lt;code&gt;2010-12-31&lt;/code&gt; till ett &lt;code&gt;datum&lt;/code&gt;-värde.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Konvertera med ett anpassat format och den tyska kulturen.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Hitta datumet i den gregorianska kalendern som motsvarar början av 1400 i Hijri-kalendern.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
