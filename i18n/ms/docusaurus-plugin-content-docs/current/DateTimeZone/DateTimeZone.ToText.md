---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

Mengembalikan perwakilan teks bagi nilai datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

Mengembalikan perwakilan teks bagi <code>dateTimeZone</code>. Parameter <code>record</code> pilihan, <code>options</code>, boleh diberikan untuk menentukan sifat tambahan. <code>culture</code> hanya digunakan untuk aliran kerja legasi. <code>record</code> boleh mengandungi medan berikut:<ul>   <li><code>Format</code>: Nilai <code>text</code> yang menunjukkan format untuk digunakan. Untuk butiran lanjut, pergi ke https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Mengabaikan medan ini atau memberikan <code>null</code> akan menyebabkan pemformatan tarikh menggunakan tetapan lalai yang ditentukan oleh <code>Culture</code>.</li>   <li><code>Culture</code>: Apabila <code>Format</code> bukan nol, <code>Culture</code> mengawal sesetengah penentu format. Contohnya, dalam <code>"en-US"</code> <code>"MMM"</code> ialah <code>"Jan", "Feb", "Mar", ...</code>, sementara dalam <code>"ru-RU"</code> <code>"MMM"</code> ialah <code>"янв", "фев", "мар", ...</code>. Apabila <code>Format</code> adalah <code>null</code>, <code>Culture</code> mengawal format lalai untuk digunakan. Apabila <code>Culture</code> adalah <code>null</code> atau diabaikan, <code>Culture.Current</code> digunakan.</li></ul>Untuk menyokong aliran kerja legasi, <code>options</code> dan <code>culture</code> boleh juga merupakan nilai teks. Ini mempunyai tingkah laku yang sama seperti jika <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Tukar &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; kepada nilai &lt;code&gt;teks&lt;/code&gt;. &lt;i&gt;Output hasil mungkin berbeza bergantung pada budaya semasa.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Tukar menggunakan format tersuai dan budaya Jerman.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Tukar menggunakan corak ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
