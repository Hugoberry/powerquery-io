---
title: Binary.From
---

# Binary.From


Opretter en binær ud fra den angivne værdi


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Returnerer en <code>binary</code> værdi fra den angivne <code>value</code>.  Hvis den angivne <code>value</code> er <code>null</code>, returnerer <code>Binary.From</code> <code>null</code>.  Hvis den angivne <code>value</code> er <code>binary</code>, returneres <code>value</code>. Værdier af følgende typer kan konverteres til en <code>binary</code> værdi:        <ul>        <li><code>text</code>: En <code>binary</code> værdi fra tekstrepræsentationen. Se <code>Binary.FromText</code> for details.</li> </ul>Hvis <code>value</code> er af en anden type, returneres der en fejl.


## Examples

### Example #1 
Hent &lt;code&gt;&#34;1011&#34;&lt;/code&gt; for værdien &lt;code&gt;binary&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
