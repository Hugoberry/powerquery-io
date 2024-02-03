---
title: Decimal.From
---

# Decimal.From


## Description

Mencipta Perpuluhan daripada nilai yang ditentukan.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Mengembalikan nilai <code>nombor</code> Perpuluhan daripada <code>value</code> yang ditentukan. Jika <code>value</code> yang ditentukan adalah <code>nol</code>, <code>Decimal.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan ialah <code>nombor</code> dalam julat Perpuluhan, <code>value</code> dikembalikan, jika tidak, ralat dikembalikan. Jika <code>value</code> adalah daripada apa-apa jenis lain, ia terlebih dahulu akan ditukarkan kepada <code>nombor</code> menggunakan <code>Number.FromText</code>. <code>culture</code> pilihan juga mungkin diberikan (sebagai contoh, "en-US").


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;number&lt;/code&gt; Perpuluhan daripada &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
