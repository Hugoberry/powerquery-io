---
title: Decimal.From
---

# Decimal.From


## Description

Membuat Desimal dari nilai yang diberikan.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Menghasilkan nilai <code>number</code> Desimal dari <code>value</code> tertentu. Jika <code>value</code> tertentu adalah <code>null</code>, <code>Decimal.From</code> menghasilkan <code>null</code>.  Jika <code>value</code> tertentu adalah <code>number</code> dalam rentang Desimal, dihasilkan <code>value</code>, jika tidak dihasilkan kesalahan. Jika <code>value</code> adalah tipe lain, akan terlebih dahulu dikonversi ke <code>number</code> menggunakan <code>Number.FromText</code>.<code>culture</code> opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; Desimal &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
