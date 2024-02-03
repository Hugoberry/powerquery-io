---
title: Text.Combine
---

# Text.Combine


## Description

Merangkaikan senarai nilai teks menjadi satu nilai teks.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Mengembalikan hasil daripada menggabungkan senarai nilai teks, <code>texts</code> kepada nilai teks tunggal. Sebarang <code>nilai</code> nol yang terdapat dalam <code>texts</code> diabaikan.    Ralat <code>separator</code> digunakan dalam teks gabungan akhir boleh ditentukan.


## Examples

### Example #1 
Gabungkan nilai teks &#34;Seattle&#34; dan &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Gabungkan nilai teks &#34;Seattle&#34; dan &#34;WA&#34; dipisahkan oleh koman dan ruang.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Gabungkan nilai &#34;Seattle&#34;, &lt;code&gt;nol&lt;/code&gt; dan &#34;WA&#34;, dipisahkan oleh koma dan ruang. (Ambil perhatian bahawa &lt;code&gt;nol&lt;/code&gt; diabaikan.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
