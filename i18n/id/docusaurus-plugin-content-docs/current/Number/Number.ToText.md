---
title: Number.ToText
---

# Number.ToText


## Description

Mengonversi angka yang diberikan ke teks.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Mengonversi nilai numerik <code>number</code> ke nilai teks sesuai dengan format yang ditentukan oleh <code>format</code>.<br />    <br />    Formatnya adalah nilai teks yang menunjukkan bagaimana angka harus dikonversi. Untuk detail selengkapnya tentang nilai format yang didukung, buka https://go.microsoft.com/fwlink/?linkid=2241210 dan https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    <code>culture</code> opsional juga dapat diberikan (misalnya, "en-US") untuk mengontrol perilaku <code>format</code> yang bergantung pada kultur.


## Examples

### Example #1 
Mengonversi angka ke teks tanpa menentukan format.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Mengonversi angka ke format eksponensial.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Mengonversi angka ke format persentase dengan hanya satu tempat desimal.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
