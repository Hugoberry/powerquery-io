---
title: Time.ToText
---

# Time.ToText


## Description

Mengembalikan perwakilan teks bagi nilai masa.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Mengembalikan perwakilan teks bagi <code>time</code>. Parameter <code>record</code> pilihan, <code>options</code>, boleh diberikan untuk menentukan sifat tambahan. <code>culture</code> hanya digunakan untuk aliran kerja legasi. <code>record</code> boleh mengandungi medan berikut:<ul>   <li><code>Format</code>: Nilai <code>text</code> yang menunjukkan format untuk digunakan. Untuk butiran lanjut, pergi ke https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Mengabaikan medan ini atau memberikan <code>null</code> akan menyebabkan pemformatan tarikh menggunakan tetapan lalai yang ditentukan oleh <code>Culture</code>.</li>   <li><code>Culture</code>: Apabila <code>Format</code> bukan nol, <code>Culture</code> mengawal sesetengah penentu format. Contohnya, dalam <code>"en-US"</code> <code>"tt"</code> ialah <code>"AM" or "PM"</code>, sementara dalam <code>"ar-EG"</code> <code>"tt"</code> ialah <code>"ص" or "م"</code>. Apabila <code>Format</code> adalah <code>null</code>, <code>Culture</code> mengawal format lalai untuk digunakan. Apabila <code>Culture</code> adalah <code>null</code> atau diabaikan, <code>Culture.Current</code> digunakan.</li></ul>Untuk menyokong aliran kerja legasi, <code>options</code> dan <code>culture</code> boleh juga merupakan nilai teks. Ini mempunyai tingkah laku yang sama seperti jika <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Tukar &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; menjadi nilai &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Output hasil mungkin berbeza bergantung pada budaya semasa.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Tukar menggunakan format tersuai dan budaya Jerman.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Tukar menggunakan format masa standard.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
