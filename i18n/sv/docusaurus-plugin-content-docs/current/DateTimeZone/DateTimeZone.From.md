---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Skapar ett datetimezone-värde från det angivna värdet.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Returnerar ett <code>datetimezone</code>-värde från angiven <code>value</code>. En valfri <code>culture</code> kan även anges (till exempel, "en-US").Om <code>value</code> är <code>null</code> returnerar <code>DateTimeZone.From</code> <code>null</code>. Om <code>value</code> är <code>datetimezone</code> returneras <code>value</code>. Värden av följande typer kan konverteras till ett <code>datetimezone</code>-värde:      <ul>        <li><code>text</code>: Ett <code>datetimezone</code>-värde från textrepresentationen. Mer information finns under <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: Ett <code>datetimezone</code>-värde med <code>value</code> som datumkomponent, <code>12:00:00 AM</code> som tidskomponent och förskjutningen enligt den lokala tidszonen.</li>        <li><code>datetime</code>: Ett <code>datetimezone</code>-värde med <code>value</code> som datetime och förskjutningen enligt den lokala tidszonen.</li>        <li><code>time</code>: Ett <code>datetimezone</code>-värde med datumvärdet motsvarande OLE-automationsdatumet <code>0</code> som datumkomponent, <code>value</code> som tidskomponent och förskjutningen enligt den lokala tidszonen.</li>        <li><code>number</code>: Ett <code>datetimezone</code>-värde med datetime-värdet motsvarande OLE-automationsdatumet uttryckt med <code>value</code> och förskjutningen enligt den lokala tidszonen.</li>      </ul>Om <code>value</code> hör till en annan typ returneras ett fel.


## Examples

### Example #1 
Konvertera &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; till ett &lt;code&gt;datetimezone&lt;/code&gt;-värde.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
