---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Skapar en datetimezone från lokala, universella och anpassade datetimezone-format.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Skapar ett <code>datetimezone</code> värde från en textrepresentation av <code>text</code>. En valfri <code>post</code> parameter, <code>options</code>, kan tillhandahållas för att ange ytterligare egenskaper. Den <code>posten</code> kan innehålla följande fält: <ul>   <li><code>Format-</code>: Ett <code>textvärde</code> som anger vilket format som ska användas. Gå Mer information finns på https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar detta fält eller anger <code>null</code> kommer det att resultera i att datumet analyseras med bästa möjliga ansträngning.</li>   <li><code>Culture</code>: Om <code>Format</code> inte är null styr <code>Culture</code> vissa formatspecificerare. Exempel: i <code>"en-US"</code> <code>"MMM"</code> är <code>"Jan", "Feb", "Mar", ...</code>, while in <code>"ru-RU"</code> <code>"MMM"</code> is <code>"ннв", "фев", "мар", ...</code>. När <code>Format</code> är <code>null</code> styr <code>Culture</code> standardformatet som ska användas. När <code>Culture</code> är <code>null</code> eller omitteras används <code>Culture.Nuvarande</code>.</li></ul>Om du vill stödja äldre arbetsflöden kan <code>options</code> också vara textvärden. Detta har samma beteende som om <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertera &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; till ett &lt;code&gt;datetimezone&lt;/code&gt;-värde.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Konvertera med ett anpassat format och den tyska kulturen.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Konvertera med ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
