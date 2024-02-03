---
title: Currency.From
---

# Currency.From


## Description

Mengembalikan nilai mata uang dari nilai yang ditentukan.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Menghasilkan nilai <code>currency</code> dari <code>value</code> yang ditentukan. Jika <code>value</code> yang ditentukan adalah <code>null</code>, <code>Currency.From</code> menghasilkan <code>null</code>.  Jika <code>value</code> yang ditentukan adalah <code>number</code> dalam rentang mata uang, bagian pecahan dari <code>value</code> dibulatkan ke 4 digit desimal dan dihasilkan. Jika <code>value</code> adalah tipe lain, akan dikonversi terlebih dahulu ke <code>number</code> menggunakan <code>Number.FromText</code>. Rentang yang valid untuk mata uang adalah <code>-922,337,203,685,477,5808</code> hingga <code>922,337,203,685,477,5807</code>. Lihat <code>Number.Round</code> untuk mode pembulatan yang tersedia. Defaultnya adalah <code>RoundingMode.ToEven</code>. <code>culture</code> opsional juga dapat diberikan (misalnya, "en-US")


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;currency&lt;/code&gt; sebesar &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Dapatkan nilai &lt;code&gt;currency&lt;/code&gt; sebesar &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; menggunakan &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
