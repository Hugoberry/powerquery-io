---
title: Binary.From
---

# Binary.From


## Description

Maakt een binaire waarde van de opgegeven waarde


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Hiermee wordt een <code>binary</code>-waarde geretourneerd van de opgegeven waarde <code>value</code>. Als de opgegeven waarde <code>value</code> <code>null</code> is, retourneert <code>Binary.From</code> <code>null</code>. Als de opgegeven waarde <code>value</code> <code>binary</code> is, wordt <code>value</code> geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een <code>binary</code>-waarde: <ul> <li><code>text</code>: een <code>binary</code>-waarde van de tekstweergave. Raadpleeg <code>Binary.FromText</code> voor meer informatie.</li> </ul>Als <code>value</code> van een ander type is, wordt een fout geretourneerd.


## Examples

### Example #1 
De &lt;code&gt;binary&lt;/code&gt; waarde van &lt;code&gt;&#34;1011&#34;&lt;/code&gt; ophalen.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
