---
title: Int8.From
---

# Int8.From


## Description

Membuat bilangan bulat 8 bit yang ditandatangani dari nilai yang diberikan.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Menghasilkan nilai <code>number</code> bilangan bulat 8 bit yang ditandai dari <code>value</code> tertentu. Jika<code>value</code> tertentu adalah <code>null</code>, <code>Int8.From</code> menghasilkan <code>null</code>.  Jika <code>value</code> tertentu adalah <code>number</code> dalam rentang bilangan bulat 8 bit yang ditandai tanpa bagian pecahan, dihasilkan <code>value</code>. Jika memiliki bagian pecahan, bilangan akan dibulatkan dengan modus pembulatan yang ditentukan. Modus pembulatan default adalah <code>RoundingMode.ToEven</code>. Jika <code>value</code> adalah tipe lain, akan terlebih dahulu dikonversi ke <code>number</code>menggunakan <code>Number.FromText</code>. Lihat <code>Number.Round</code> untuk modus pembulatan yang tersedia. <code>culture</code> opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; bulat 8 bit &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; bulat 8 bit &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; menggunakan &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
