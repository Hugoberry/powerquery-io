---
title: Duration.From
---

# Duration.From


## Description

Skapar en varaktighet från det angivna värdet.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Returnerar ett <code>duration</code>-värde från angiven <code>value</code>. Om <code>value</code> är <code>null</code> returnerar <code>Duration.From</code> <code>null</code>. Om <code>value</code> är <code>duration</code> returneras <code>value</code>. Värden av följande typer kan konverteras till ett <code>duration</code>-värde:      <ul>        <li><code>text</code>: Ett <code>duration</code>-värde från förfluten tid i textformat (d.h:m:s). Mer information finns under <code>Duration.FromText</code>.</li>        <li><code>number</code>: Ett <code>duration</code>-värde som motsvarar antalet hela och fraktionella dagar uttryckt med <code>value</code>.</li>      </ul>Om <code>value</code> hör till en annan typ returneras ett fel.


## Examples

### Example #1 
Konvertera &lt;code&gt;2.525&lt;/code&gt; till ett &lt;code&gt;duration&lt;/code&gt;-värde.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
