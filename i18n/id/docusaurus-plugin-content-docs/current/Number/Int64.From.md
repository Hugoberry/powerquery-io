---
title: Int64.From
---

# Int64.From


## Description

Membuat bilangan bulat 64 bit dari nilai yang diberikan.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Menghasilkan nilai <code>number</code> bilangan bulat 64 bit dari <code>value</code> tertentu. Jika <code>value</code> tertentu adalah <code>null</code>, <code>Int64.From</code> menghasilkan <code>null</code>. Jika <code>value</code> tertentu adalah <code>number</code> dalam rentang bilangan bulan 64 bit tanpa bagian pecahan, dihasilkan <code>value</code>. Jika memiliki bagian pecahan, bilangan akan dibulatkan dengan modus pembulatan yang ditentukan. Modus pembulatan default adalah <code>RoundingMode.ToEven</code>. Jika <code>value</code> dari tipe lain, akan dikonversi terlebih dahulu ke <code>number</code> menggunakan <code>Number.FromText</code>. Lihat <code>Number.Round</code> untuk mode pembulatan yang tersedia. <code>culture</code> opsional juga dapat diberikan (misalnya, "en-US").


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; bilangan bulat 64 bit dari &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Mendapatkan nilai &lt;code&gt;number&lt;/code&gt; bilangan bulat 64-bit sebesar &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; menggunakan &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
