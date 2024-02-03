---
title: Binary.From
---

# Binary.From


## Description

Bináris értéket hoz létre a megadott értékből.


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Egy <code>binary</code> típusú értéket ad vissza a megadott <code>value</code> értékből. Ha a megadott <code>value</code> érték <code>null</code>, a <code>Binary.From</code> függvény <code>null</code> értéket ad vissza. Ha a megadott <code>value</code> érték <code>binary</code>, a visszaadott érték <code>value</code>. A következő típusú értékek konvertálhatók <code>binary</code> értékre:      <ul>        <li><code>text</code>: Egy <code>binary</code> érték a szöveges alakból. További részletek: <code>Binary.FromText</code>.</li>      </ul>Ha a <code>value</code> más típusú, a függvény hibát ad vissza.


## Examples

### Example #1 
Az &lt;code&gt;&#34;1011&#34;&lt;/code&gt; &lt;code&gt;binary&lt;/code&gt; típusú értékének lekérése
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
