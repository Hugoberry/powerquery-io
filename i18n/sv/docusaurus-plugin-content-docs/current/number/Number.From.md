---
title: Number.From
---

# Number.From


Skapar ett tal från det angivna värdet.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerar ett <code>number</code>-värde från angiven <code>value</code>. En valfri <code>culture</code> kan även anges (till exempel, "en-US").Om <code>value</code> är <code>null</code> returnerar <code>Number.From</code> <code>null</code>. Om <code>value</code> är <code>number</code> returneras <code>value</code>. Värden med följande typer kan konverteras till ett <code>number</code>-värde:      <ul>        <li><code>text</code>: Ett <code>number</code>-värde från textrepresentationen. Vanliga textformat hanteras ("15", "3,423.10", "5.0E-10"). Mer information finns under <code>Number.FromText</code>.</li>        <li><code>logical</code>: 1 för <code>true</code>, 0 för <code>false</code>.</li>           <li><code>datetime</code>: Ett flyttal med dubbel precision som innehåller motsvarigheten till ett OLE-automationsdatum.</li>        <li><code>datetimezone</code>: Ett flyttal med dubbel precision som innehåller ett OLE-automationsdatum för det lokala datumet och tiden, <code>value</code>.</li>        <li><code>date</code>: Ett flyttal med dubbel precision som innehåller motsvarigheten till ett OLE-automationsdatum.</li>        <li><code>time</code>:  Uttrycks i fraktionella dagar.</li>        <li><code>duration</code>: Uttrycks i hela och fraktionella dagar.</li>      </ul>Om <code>value</code> hör till en annan typ returneras ett fel.


## Examples

### Example #1 
Hämta &lt;code&gt;number&lt;/code&gt;-värdet för &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Hämta &lt;code&gt;number&lt;/code&gt;-värdet för &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Hämta &lt;code&gt;tal&lt;/code&gt;värdet för &lt;code&gt;&#34;12,3 %&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
