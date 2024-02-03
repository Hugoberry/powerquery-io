---
title: Double.From
---

# Double.From


## Description

Membuat Ganda dari nilai yang diberikan.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Mengembalikan nilai <code>number</code> Ganda dari <code>value</code> tertentu. Jika <code>value</code> tertentu adalah <code>null</code>, <code>Double.From</code> menghasilkan <code>null</code>.  Jika <code>value</code> tertentu adalah <code>number</code> dalam rentang Ganda, dihasilkan <code>value</code>, jika tidak akan dihasilkan kesalahan. Jika <code>value</code> adalah tipe lain, akan terlebih dahulu dikonversi ke <code>number</code> menggunakan <code>Number.FromText</code>.<code>culture</code> opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; Ganda &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
