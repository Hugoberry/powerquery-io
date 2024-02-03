---
title: Int8.From
---

# Int8.From


## Description

Mencipta integer 8 bit bertanda daripada nilai yang ditentukan.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Mengembalikan nilai <code>nombor</code> integer 8-bit yang bertandatangan daripada <code>value</code> yang ditentukan. Jika <code>value</code> yang ditentukan adalah <code>nol</code>, <code>Int8.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan ialah <code>nombor</code> dalam julat integer 8-bit yang bertandatangan tanpa bahagian pecahan, <code>value</code> dikembalikan. Jika ia mempunyai bahagian pecahan, maka nombor tersebut dibundarkan dengan mod pembundaran yang ditentukan. Mod pembundaran lalai ialah <code>RoundingMode.ToEven</code>. Jika <code>value</code> daripada apa-apa jenis yang lain, ia terlebih dahulu akan ditukarkankan kepada <code>nombor</code> menggunakan <code>Number.FromText</code>. Rujuk <code>Number.Round</code> untuk mod pembundaran yang tersedia. <code>culture</code> pilihan juga mungkin diberikan (sebagai contoh, "en-US").


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; integer 8 bit bertanda daripada &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; integer 8 bit bertanda daripada &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; menggunakan &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
