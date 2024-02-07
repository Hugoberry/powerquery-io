---
title: DateTime.FromText
---

# DateTime.FromText


Skapar ett datetimezone-värde från lokala och universella datetime-format.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Skapar ett <code>datetime</code> värde från en textrepresentation av <code>text</code>. En valfri <code>post</code> parameter, <code>options</code>, kan tillhandahållas för att ange ytterligare egenskaper. Den <code>posten</code> kan innehålla följande fält: <ul>   <li><code>Format-</code>: Ett <code>textvärde</code> som anger vilket format som ska användas. Gå Mer information finns på https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar detta fält eller anger <code>null</code> kommer det att resultera i att datumet analyseras med bästa möjliga ansträngning.</li>   <li><code>Culture</code>: Om <code>Format</code> inte är null styr <code>Culture</code> vissa formatspecificerare. Exempel: i <code>"en-US"</code> <code>"MMM"</code> är <code>"Jan", "Feb", "Mar", ...</code>, while in <code>"ru-RU"</code> <code>"MMM"</code> is <code>"ннв", "фев", "мар", ...</code>. När <code>Format</code> är <code>null</code> styr <code>Culture</code> standardformatet som ska användas. När <code>Culture</code> är <code>null</code> eller omitteras används <code>Culture.Nuvarande</code>.</li></ul>Om du vill stödja äldre arbetsflöden kan <code>options</code> också vara textvärden. Detta har samma beteende som om <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertera &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; till ett datetime-värde.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Konvertera &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; till ett datetime-värde.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Konvertera &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; till ett datetime-värde.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Konvertera &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; till ett datetime-värde.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
