---
title: Duration.From
---

# Duration.From


## Description

Membuat durasi dari nilai tertentu.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Menghasilkan nilai <code>duration</code> dari <code>value</code> tertentu. Jika <code>value</code> tertentu adalah <code>null</code>, <code>Duration.From</code> menghasilkan <code>null</code>.  Jika <code>value</code> tertentu adalah <code>duration</code>, <code>value</code> dihasilkan. Nilai tipe berikut dapat dikonversi ke nilai <code>duration</code>:      <ul>        <li><code>text</code>: Nilai <code>duration</code> dari format waktu berlalu tekstual (h.j:m:d). Lihat <code>Duration.FromText</code>untuk detailnya.</li>        <li><code>number</code>: <code>duration</code> setara dengan jumlah hari keseluruhan dan pecahan yang dinyatakan dengan <code>value</code>.</li>      </ul>Jika <code>value</code> adalah tipe lain, kesalahan akan dihasilkan.


## Examples

### Example #1 
Mengkonversi &lt;code&gt;2.525&lt;/code&gt; ke nilai &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
