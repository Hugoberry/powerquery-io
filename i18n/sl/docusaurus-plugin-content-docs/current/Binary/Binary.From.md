---
title: Binary.From
---

# Binary.From


## Description

Ustvari dvojiško vrednost iz dane vrednosti


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Iz dane vrednosti <code>value</code> vrne vrednost <code>binary</code>. Če je dana vrednost <code>value</code> <code>null</code>, <code>Binary.From</code> vrne <code>null</code>.  Če je dana vrednost <code>value</code> <code>binary</code>, je vrnjena vrednost <code>value</code>. V vrednost <code>binary</code> lahko pretvorite vrednosti teh vrst:      <ul>        <li><code>text</code>: vrednost <code>binary</code> iz predstavitve v obliki besedila. Za podrobnosti glejte <code>Binary.FromText</code>.</li>      </ul>Če je vrednost <code>value</code> katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1 
Poiščite vrednost &lt;code&gt;binary&lt;/code&gt; za &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
