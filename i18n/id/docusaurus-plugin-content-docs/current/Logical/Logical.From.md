---
title: Logical.From
---

# Logical.From


## Description

Membuat logika dari nilai tertentu.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Menghasilkan nilai <code>logical</code> dari <code>value</code> tertentu. Jika <code>value</code> tertentu adalah <code>null</code>, <code>Logical.From</code> menghasilkan <code>null</code>.  Jika <code>value</code> tertentu adalah <code>logika</code>, dihasilkan <code>value</code>. Nilai tipe berikut dapat dikonversi ke nilai <code>logical</code>:      <ul>        <li><code>text</code>: Nilai <code>logical</code> dari nilai teks, baik <code>"true"</code> maupun <code>"false"</code>. Untuk info selengkapnya, lihat <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>false</code> jika <code>value</code> sama dengan <code>0</code>, <code>true</code> jika sebaliknya.</li>      </ul>Jika <code>value</code> termasuk dalam tipe lain,kesalahan dihasilkan.


## Examples

### Example #1 
Mengkonversi &lt;code&gt;2&lt;/code&gt; ke nilai &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
