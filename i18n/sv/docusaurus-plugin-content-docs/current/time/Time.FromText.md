---
title: Time.FromText
---

# Time.FromText


Skapar en tid från lokala och universella och anpassade tidsformat.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Skapar ett <code>time</code> värde från en textrepresentation av <code>text</code>. En valfri <code>post</code> parameter, <code>options</code>, kan tillhandahållas för att ange ytterligare egenskaper. Den <code>posten</code> kan innehålla följande fält: <ul>   <li><code>Format-</code>: Ett <code>textvärde</code> som anger vilket format som ska användas. Gå till https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar detta fält eller anger <code>null</code> kommer det att resultera i att tiden analyseras med bästa möjliga ansträngning.</li>   <li><code>Culture</code>: Om <code>Format</code> inte är null styr <code>Culture</code> vissa formatspecificerare. Exempel: I <code>"en-US"</code> <code>"tt"</code> <code>"AM" eller "PM"</code>, i <code>"ar-EG"</code> <code>"tt"</code> är <code>"ص" eller "Wb"</code>. När <code>Format</code> är <code>null</code> styr <code>Culture</code> standardformatet som ska användas. När <code>Culture</code> är <code>null</code> eller omitteras används <code>Culture.Nuvarande</code>.</li></ul>Om du vill stödja äldre arbetsflöden kan <code>options</code> också vara textvärden. Detta har samma beteende som om <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertera &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; till ett tidsvärde.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Konvertera &lt;code&gt;&#34;1012&#34;&lt;/code&gt; till ett tidsvärde.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Konvertera &lt;code&gt;&#34;10&#34;&lt;/code&gt; till ett tidsvärde.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
