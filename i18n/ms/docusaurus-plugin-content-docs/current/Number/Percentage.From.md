---
title: Percentage.From
---

# Percentage.From


## Description

Mengembalikan nilai peratusan daripada nilai yang ditentukan.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Mengembalikan nilai <code>peratusan</code> daripada <code>value</code> yang ditentukan. Jika <code>value</code> yang ditentukan adalah <code>nol</code>, <code>Percentage.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan ialah <code>teks</code> dengan simbol peratus belakang, maka nombor perpuluhan yang ditukar akan dikembalikan. Jika tidak, nilai akan ditukar kepada <code>nombor</code> menggunakan <code>Number.From</code>. <code>culture</code> pilihan juga mungkin diberikan (sebagai contoh, "en-US").


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;percentage&lt;/code&gt; sebanyak &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
