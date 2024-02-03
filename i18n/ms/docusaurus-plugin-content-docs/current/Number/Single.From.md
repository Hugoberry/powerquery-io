---
title: Single.From
---

# Single.From


## Description

Mencipta Tunggal daripada nilai yang diberikan.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Mengembalikan nilai <code>nombor</code> Tunggal daripada <code>value</code> yang ditentukan. Jika <code>value</code> yang ditentukan adalah <code>nol</code>, <code>Single.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan adalah <code>nombor</code> dalam julat Tunggal, <code>value</code> dikembalikan, jika tidak, ralat dikembalikan. Jika <code>value</code> adalah daripada apa-apa jenis lain, ia terlebih dahulu akan ditukarkan kepada <code>nombor</code> menggunakan <code>Number.FromText</code>. <code>culture</code> pilihan juga mungkin diberikan (sebagai contoh, "en-US").


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; Tunggal daripada &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
