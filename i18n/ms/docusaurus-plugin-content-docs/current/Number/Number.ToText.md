---
title: Number.ToText
---

# Number.ToText


## Description

Menukarkan nombor yang ditentukan kepada teks.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Menukar nilai angka <code>number</code> kepada nilai teks mengikut format yang ditentukan oleh <code>format</code>.<br />    <br />    Format ialah nilai teks yang menunjukkan cara nombor harus ditukar. Untuk butiran lanjut tentang nilai format yang disokong, pergi ke https://go.microsoft.com/fwlink/?linkid=2241210 dan https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    <code>culture</code> pilihan juga mungkin diberikan (contohnya, "en-US") untuk mengawal tingkah laku bergantung budaya <code>format</code>.


## Examples

### Example #1 
Tukar nombor kepada teks tanpa menentukan format.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Tukar nombor kepada format eksponen.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Tukarkan format nombor kepada format peratusan dengan hanya satu tempat perpuluhan.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
