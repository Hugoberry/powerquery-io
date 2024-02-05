---
title: DateTime.From
---

# DateTime.From


## Description

Skapar ett datetime-värde från det angivna värdet.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Returnerar ett <code>datetime</code>-värde från angiven <code>value</code>. En valfri <code>culture</code> kan även anges (till exempel, "en-US").Om <code>value</code> är <code>null</code> returnerar <code>DateTime.From</code> <code>null</code>. Om <code>value</code> är <code>datetime</code> returneras <code>value</code>. Värden av följande typer kan konverteras till ett <code>datetime</code>-värde:      <ul>        <li><code>text</code>: Ett <code>datetime</code>-värde från textrepresentationen. Mer information finns under <code>DateTime.FromText</code>.</li>        <li><code>date</code>: Ett <code>datetime</code>-värde med <code>value</code> som datumkomponent och <code>12:00:00 AM</code> som tidskomponent.</li>        <li><code>datetimezone</code>: Det lokala <code>datetime</code>-värdet som motsvarar <code>value</code>.</li>        <li><code>time</code>: Ett <code>datetime</code>-värde med datumvärdet för OLE-automationsdatumet <code>0</code> som datumkomponent och <code>value</code> som tidskomponent.</li>        <li><code>number</code>: Ett <code>datetime</code>-värde som motsvarar OLE-automationsdatumet uttryckt med <code>value</code>. </li>      </ul>Om <code>value</code> hör till en annan typ returneras ett fel.


## Examples

### Example #1 
Konvertera &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; till ett &lt;code&gt;datetime&lt;/code&gt;-värde.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Konvertera &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; till ett &lt;code&gt;datetime&lt;/code&gt;-värde.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
