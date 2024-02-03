---
title: Int64.From
---

# Int64.From


## Description

Wujudkan integer 64 bit dari nilai yang diberi.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Mengembalikan nilai <code>nombor</code> integer 64-bit daripada <code>value</code> yang ditentukan. Jika <code>value</code> yang ditentukan adalah <code>nol</code>, <code>Int64.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan ialah <code>nombor</code> dalam julat integer 64-bit tanpa bahagian pecahan, <code>value</code> jika dikembalikan. Jika ia mempunyai bahagian pecahan, maka nombor dibundarkan dengan mod pembundaran yang ditentukan. Mod pembundaran lalai ialah <code>RoundingMode.ToEven</code>. Jika <code>value</code> adalah daripada apa-apa jenis lain, ia terlebih dahulu akan ditukarkan kepada <code>nombor</code> menggunakan <code>Number.FromText</code>. Rujuk <code>Number.Round</code> untuk mod pembundaran yang tersedia. <code>culture</code> pilihan juga mungkin diberikan (untuk contoh, "en-US").


## Examples

### Example #1 
Dapatkan integer 64 bit &lt;code&gt;number&lt;/code&gt; nilai &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; integer 64 bit daripada &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; dengan menggunakan &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
