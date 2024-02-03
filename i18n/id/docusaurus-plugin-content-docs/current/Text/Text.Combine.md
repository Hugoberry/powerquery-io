---
title: Text.Combine
---

# Text.Combine


## Description

Menggabungkan daftar nilai teks ke satu nilai teks.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Mengembalikan hasil dari menggabungkan daftar nilai teks, <code>texts</code>, menjadi nilai teks tunggal. Setiap nilai <code>null</code> yang ada di <code>texts</code> diabaikan. 
    <code>separator</code> opsional yang digunakan dalam teks gabungan akhir dapat ditentukan.


## Examples

### Example #1 
Mengkombinasikan nilai teks &#34;Seattle&#34; dan &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Menggabungkan nilai teks &#34;Seattle&#34; dan &#34;WA&#34;, dipisahkan oleh koma dan spasi.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Gabungkan nilai &#34;Seattle&#34;, &lt;code&gt;&lt;/code&gt; null, dan &#34;WA&#34;, dipisahkan dengan koma dan spasi. (Perhatikan bahwa &lt;code&gt;null&lt;/code&gt; diabaikan.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
