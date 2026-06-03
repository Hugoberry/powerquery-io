---
title: Excel.Workbook
---

# Excel.Workbook


Excel çalışma kitabının içeriğini döndürür.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Excel çalışma kitabının içeriğini döndürür.

-   `useHeaders` null veya döndürülen her tablonun ilk satırının bir üst bilgi veya seçenek kaydı olarak değerlendirilip değerlendirilmeyeceğini gösteren bir mantıksal (true/false) değer olabilir. Varsayılan: false.
-   `delayTypes` null olabilir veya döndürülen her tablonun sütunlarının türü belirlenmemiş olarak bırakılıp bırakılmayacağını gösteren bir mantıksal (true/false) değer olabilir. Varsayılan: false.

`useHeaders` için bir kayıt belirtilmişse (ve `delayTypes` null ise) şu kayıt alanları sağlanabilir:

-   `UseHeaders`: Null olabilir veya döndürülen her tablonun ilk satırının üst bilgi olarak değerlendirilip değerlendirilmeyeceğini gösteren bir mantıksal (true/false) değer olabilir. Varsayılan: false.
-   `DelayTypes`: Null olabilir veya döndürülen her tablonun sütunlarının türü belirlenmemiş olarak bırakılıp bırakılmayacağını gösteren bir mantıksal (true/false) değer olabilir. Varsayılan: false.
-   `InferSheetDimensions`: Null olabilir veya veri içeren çalışma sayfası alanının dosyadaki boyut meta verileri okunarak değil, çalışma sayfasının kendisi okunarak çıkarsanıp çıkarsanmadığını gösteren bir mantıksal (true/false) değer olabilir. Bu, boyut meta verilerinin yanlış olduğu durumlarda yarar olabilir. Bu seçeneğin eski Excel dosyaları için değil, yalnızca Open XML Excel dosyaları için desteklendiğini unutmayın. Varsayılan: false.


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
