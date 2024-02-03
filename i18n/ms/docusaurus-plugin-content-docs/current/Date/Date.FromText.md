---
title: Date.FromText
---

# Date.FromText


## Description

Mencipta Tarikh daripada format Tarikh setempat, universal dan tersuai.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Mencipta nilai <code>date</code> daripada perwakilan teks, <code>text</code>. Parameter <code>record</code> pilihan, <code>options</code>, boleh diberikan untuk menentukan sifat tambahan. <code>record</code> boleh mengandungi medan berikut:<ul>   <li><code>Format</code>: Nilai <code>text</code> yang menunjukkan format untuk digunakan. Untuk butiran lanjut, pergi ke https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Mengabaikan medan ini atau memberikan <code>null</code> akan menyebabkan penghuraian tarikh menggunakan usaha terbaik.</li>   <li><code>Culture</code>: Apabila <code>Format</code> bukan nol, <code>Culture</code> mengawal sesetengah penentu format. Contohnya, dalam <code>"en-US"</code> <code>"MMM"</code> ialah <code>"Jan", "Feb", "Mar", ...</code>, sementara dalam <code>"ru-RU"</code> <code>"MMM"</code> ialah <code>"янв", "фев", "мар", ...</code>. Apabila <code>Format</code> adalah <code>null</code>, <code>Culture</code> mengawal format lalai untuk digunakan. Apabila <code>Culture</code> adalah <code>null</code> atau diabaikan, <code>Culture.Current</code> digunakan.</li></ul>Untuk menyokong aliran kerja legasi, <code>options</code> boleh juga merupakan nilai teks. Ini mempunyai tingkah laku yang sama seperti jika <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Tukar &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; menjadi nilai &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Tukar menggunakan format tersuai dan budaya Jerman.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Cari tarikh dalam kalendar Gregorian yang sepadan dengan permulaan 1400 dalam kalendar Hijrah.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
