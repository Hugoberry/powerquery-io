---
title: Date.From
---

# Date.From


Skapar ett datumvärde från det angivna värdet.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Returnerar ett <code>date</code>-värde från angiven <code>value</code>. En valfri <code>culture</code> kan även anges (till exempel, "en-US").Om <code>value</code> är <code>null</code> returnerar <code>Date.From</code> <code>null</code>. Om <code>value</code> är <code>date</code> returneras <code>value</code>. Värden av följande typer kan konverteras till ett <code>date</code>-värde:      <ul>        <li><code>text</code>: Ett <code>date</code>-värde från textrepresentationen. Mer information finns under <code>Date.FromText</code>.</li>        <li><code>datetime</code>: Datumkomponenten för <code>value</code>.</li>        <li><code>datetimezone</code>: Datumkomponenten för det lokala datetime-värdet som motsvarar <code>value</code>.</li>        <li><code>number</code>: Datumkomponenten för datetime-värdet motsvarande OLE-automationsdatumet uttryckt med <code>value</code>.</li>      </ul>Om <code>value</code> hör till en annan typ returneras ett fel.


## Examples

### Example #1 
Konvertera &lt;code&gt;43910&lt;/code&gt; till ett &lt;code&gt;date&lt;/code&gt;-värde.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Konvertera &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; till ett &lt;code&gt;date&lt;/code&gt;-värde.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
