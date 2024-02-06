---
title: Logical.From
---

# Logical.From


Skapar ett logiskt värde från det angivna värdet.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Returnerar ett <code>logical</code>-värde från angiven <code>value</code>. Om <code>value</code> är <code>null</code> returnerar <code>Logical.From</code> <code>null</code>. Om <code>value</code> är <code>logical</code> returneras <code>value</code>. Värden av följande typer kan konverteras till ett <code>logical</code>-värde:      <ul>        <li><code>text</code>: Ett <code>logical</code>-värde från textvärdet, antingen <code>"true"</code> eller <code>"false"</code>. Mer information finns under <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>false</code> om <code>value</code> är lika med <code>0</code>, annars <code>true</code>.</li>      </ul>Om <code>value</code> hör till en annan typ returneras ett fel.


## Examples

### Example #1 
Konvertera &lt;code&gt;2&lt;/code&gt; till ett &lt;code&gt;logical&lt;/code&gt;-värde.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
