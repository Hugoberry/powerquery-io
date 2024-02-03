---
title: Binary.From
---

# Binary.From


## Description

Mencipta perduaan daripada nilai yang ditentukan


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Mengembalikan nilai <code>binari</code> daripada <code>value</code> yang diberikan. Jika <code>value</code> yang diberikan adalah <code>nol</code>, <code>Binary.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan ialah <code>binari</code>, <code>value</code> dikembalikan. Nilai jenis berikut boleh ditukar kepada nilai <code>binari</code>:      <ul>        <li><code>teks</code>: Nilai <code>binari</code> daripada perwakilan teks. Rujuk <code>Binary.FromText</code> untuk butiran.</li>      </ul>Jika <code>value</code> adalah daripada apa-apa jenis lain, ralat dikembalikan.


## Examples

### Example #1 
Dapatkan &lt;code&gt;binary&lt;/code&gt; nilai bagi &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
