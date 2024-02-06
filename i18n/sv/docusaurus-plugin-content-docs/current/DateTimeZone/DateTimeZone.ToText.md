---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Returnerar en textrepresentation av datetimezone-värdet.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returnerar en textrepresentation av <code>dateTimeZone</code>. En valfri <code>post</code> parameter, <code>options</code>, kan tillhandahållas för att ange ytterligare egenskaper. <code>culture</code> används endast för äldre arbetsflöden. Den <code>posten</code> kan innehålla följande fält: <ul>   <li><code>Format-</code>: Ett <code>textvärde</code> som anger vilket format som ska användas. Mer information finns på https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar det här fältet eller anger <code>1 null-</code> formateras datumet med standardvärdet som definieras i <code>Culture</code>.</li>   <li><code>Culture</code>: Om <code>Format</code> inte är null styr <code>Culture</code> vissa formatspecificerare. Exempel: i <code>"en-US"</code> <code>"MMM"</code> är <code>"Jan", "Feb", "Mar", ...</code>, while in <code>"ru-RU"</code> <code>"MMM"</code> is <code>"ннв", "фев", "мар", ...</code>. När <code>Format</code> är <code>null</code> styr <code>Culture</code> standardformatet som ska användas. När <code>Culture</code> är <code>null</code> eller omiteras används <code>Culture.Nuvarande</code>.</li></ul>Om du vill stödja äldre arbetsflöden kan <code>options</code> och <code>culture</code> också vara textvärden. Detta har samma beteende som om <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertera &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; till ett &lt;code&gt;text&lt;/code&gt; värde. &lt;i&gt;Resultatresultatet kan variera beroende på aktuell kultur.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Konvertera med ett anpassat format och den tyska kulturen.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Konvertera med iso 8601-mönstret.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
