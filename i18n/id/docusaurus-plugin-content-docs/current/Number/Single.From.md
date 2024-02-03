---
title: Single.From
---

# Single.From


## Description

Membuat Tunggal dari nilai yang diberikan.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Menghasilkan nilai <code>number</code> Tunggal dari <code>value</code> tertentu. Jika <code>value</code> tertentu adalah <code>null</code>, <code>Single.From</code> menghasilkan <code>null</code>.  Jika <code>value</code> tertentu adalah <code>number</code> dalam rentang Tunggal, dihasilkan <code>value</code>, jika tidak akan dihasilkan kesalahan. Jika <code>value</code> adalah tipe lain, akan terlebih dahulu dikonversi ke <code>number</code> menggunakan <code>Number.FromText</code>.<code>culture</code> opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; Tunggal &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
