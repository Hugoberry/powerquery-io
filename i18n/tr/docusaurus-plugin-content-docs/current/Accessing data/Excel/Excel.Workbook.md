---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Excel çalışma kitabının içeriğini döndürür.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Excel çalışma kitabının içeriğini döndürür.    <ul>     <li> <code>useHeaders</code> null veya döndürülen her tablonun ilk satırının bir üst bilgi veya seçenek kaydı olarak değerlendirilip değerlendirilmeyeceğini gösteren bir mantıksal (true/false) değer olabilir. Varsayılan: false.</li>     <li> <code>delayTypes</code> null olabilir veya döndürülen her tablonun sütunlarının türü belirlenmemiş olarak bırakılıp bırakılmayacağını gösteren bir mantıksal (true/false) değer olabilir. Varsayılan: false.</li>    </ul>    <code>useHeaders</code> için bir kayıt belirtilmişse (ve <code>delayTypes</code> null ise) şu kayıt alanları sağlanabilir:    <ul>     <li> <code>UseHeaders</code>: Null olabilir veya döndürülen her tablonun ilk satırının üst bilgi olarak değerlendirilip değerlendirilmeyeceğini gösteren bir mantıksal (true/false) değer olabilir. Varsayılan: false.</li>     <li> <code>DelayTypes</code>: Null olabilir veya döndürülen her tablonun sütunlarının türü belirlenmemiş olarak bırakılıp bırakılmayacağını gösteren bir mantıksal (true/false) değer olabilir. Varsayılan: false.</li>     <li> <code>InferSheetDimensions</code>: Null olabilir veya veri içeren çalışma sayfası alanının dosyadaki boyut meta verileri okunarak değil, çalışma sayfasının kendisi okunarak çıkarsanıp çıkarsanmadığını gösteren bir mantıksal (true/false) değer olabilir. Bu, boyut meta verilerinin yanlış olduğu durumlarda yarar olabilir. Bu seçeneğin eski Excel dosyaları için değil, yalnızca Open XML Excel dosyaları için desteklendiğini unutmayın. Varsayılan: false.</li>    </ul>    


## Examples

### Example #1 
Bir Excel çalışma kitabından Sheet1 içeriklerini döndürün.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
