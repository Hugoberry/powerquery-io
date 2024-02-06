---
title: Binary.From
---

# Binary.From


Skapar ett binärvärde från det angivna värdet


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Returnerar ett <code>binary</code>-värde från angiven <code>value</code>. Om <code>value</code> är <code>null</code> returnerar <code>Binary.From</code> <code>null</code>. Om <code>value</code> är <code>binary</code> returneras <code>value</code>. Värden av följande typer kan konverteras till ett <code>binary</code>-värde:      <ul>        <li><code>text</code>: Ett <code>binary</code>-värde från textrepresentationen. Mer information finns under <code>Binary.FromText</code>.</li>      </ul>Om <code>value</code> hör till en annan typ returneras ett fel.


## Examples

### Example #1 
Hämta &lt;code&gt;binary&lt;/code&gt;-värdet för &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
