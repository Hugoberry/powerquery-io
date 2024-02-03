---
title: Binary.From
---

# Binary.From


## Description

Membuat biner dari nilai tertentu


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Menghasilkan nilai <code>binary</code> dari <code>value</code> tertentu. Jika <code>value</code> tertentu adalah <code>null</code>, <code>Binary.From</code> mengembalikan <code>null</code>.  Jika <code>value</code> tertentu adalah <code>binary</code>, <code>value</code> akan dihasilkan. Nilai tipe berikut dapat dikonversi ke nilai <code>binary</code>:      <ul>        <li><code>text</code>: Nilai <code>binary</code> dari representasi teks. Untuk mengetahui detailnya, lihat <code>Binary.FromText</code>.</li>      </ul>Jika <code>value</code> adalah tipe lain, kesalahan akan dihasilkan.


## Examples

### Example #1 
Mengambil nilai &lt;code&gt;binary&lt;/code&gt; dari &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
