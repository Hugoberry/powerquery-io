---
title: Time.From
---

# Time.From


## Description

Skapar en tid från det angivna värdet.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Returnerar ett <code>time</code>-värde från angiven <code>value</code>. En valfri <code>culture</code> kan även anges (till exempel, "en-US").Om <code>value</code> är <code>null</code>, returnerar <code>Time.From</code> <code>null</code>. Om <code>value</code> är <code>time</code>, returneras <code>value</code>. Värden av följande typer kan konverteras till ett <code>time</code>-värde:      <ul>        <li><code>text</code>: Ett <code>time</code>-värde från textrepresentationen. Mer information finns under <code>Time.FromText</code>.</li>        <li><code>datetime</code>: Tidskomponenten för <code>value</code>.</li>        <li><code>datetimezone</code>: Tidskomponenten för det lokala datetime-värdet som motsvarar <code>value</code>.</li>        <li><code>number</code>: Ett <code>time</code>-värde som motsvarar antalet hela och fraktionella dagar uttryckt med <code>value</code>. Om <code>value</code> är negativt eller större än eller lika med 1 returneras ett fel.</li>      </ul>Om <code>value</code> hör till en annan typ returneras ett fel.


## Examples

### Example #1 
Konvertera &lt;code&gt;0.7575&lt;/code&gt; till ett &lt;code&gt;time&lt;/code&gt;-värde.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Konvertera &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; till ett &lt;code&gt;time&lt;/code&gt;-värde.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
