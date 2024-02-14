---
title: Time.ToText
---

# Time.ToText


Returnerar en textrepresentation av tidsvärdet.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returnerar en textrepresentation av <code>time</code>. En valfri <code>post</code> parameter, <code>options</code>, kan tillhandahållas för att ange ytterligare egenskaper. <code>culture</code> används endast för äldre arbetsflöden. Den <code>posten</code> kan innehålla följande fält: <ul>   <li><code>Format-</code>: Ett <code>textvärde</code> som anger vilket format som ska användas. Mer information finns på https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar det här fältet eller anger <code>1 null-</code> formateras datumet med standardvärdet som definieras i <code>Culture</code>.</li>   <li><code>Culture</code>: Om <code>Format</code> inte är null styr <code>Culture</code> vissa formatspecificerare. Exempel: I <code>"en-US"</code> <code>"tt"</code> <code>"AM" eller "PM"</code>, i <code>"ar-EG"</code> <code>"tt"</code> är <code>"ص" eller "Wb"</code> När <code>Format</code> är <code>null</code> styr <code>Culture</code> standardformatet som ska användas. När <code>Culture</code> är <code>null</code> eller omitteras används <code>Culture.Nuvarande</code>.</li></ul>Om du vill stödja äldre arbetsflöden kan <code>options</code> och <code>culture</code> också vara textvärden. Detta har samma beteende som om <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertera &lt;code&gt;#tid(01, 30, 25)&lt;/code&gt; till ett &lt;code&gt;text&lt;/code&gt; värde. &lt;i&gt;Resultatresultatet kan variera beroende på aktuell kultur.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Konvertera med ett anpassat format och den tyska kulturen.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Konvertera med standardtidsformat.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
