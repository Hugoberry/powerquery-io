---
title: Binary.From
---

# Binary.From


## Description

Verilen değerden ikili oluşturur


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Verilen <code>value</code> değerinden bir <code>binary</code> değeri döndürür. Verilen <code>value</code> <code>null</code> olduğunda <code>Binary.From</code> <code>null</code> döndürür. Verilen <code>value</code> <code>binary</code> olduğunda <code>value</code> döndürülür. Aşağıdaki türde olan değerler bir <code>binary</code> değerine dönüştürülebilir:      <ul>        <li><code>text</code>: Metin gösteriminden bir <code>binary</code> değeri. Ayrıntılar için bkz. <code>Binary.FromText</code>.</li>      </ul><code>value</code> başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1 
&lt;code&gt;&#34;1011&#34;&lt;/code&gt; öğesinin &lt;code&gt;binary&lt;/code&gt; değerini alır.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
