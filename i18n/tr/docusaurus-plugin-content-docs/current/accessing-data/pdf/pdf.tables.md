---
title: Pdf.Tables
---

# Pdf.Tables


Bir PDF dosyasında bulunan tüm tabloları döndürür.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

`pdf` 'da bulunan tüm tabloları döndürür. Ek özellikleri belirtmek için isteğe bağlı bir kayıt parametresi `options` sağlanabilir. Kayıt aşağıdaki alanları içerebilir:

-   `Implementation` : Tabloları tanımlarken kullanılacak algoritma sürümü. Eski sürümler, algoritma güncelleştirmelerinin eski sorguları bozmasını önlemek için yalnızca geriye dönük uyumluluk için kullanılabilir. En yeni sürüm her zaman en iyi sonuçları vermelidir. Geçerli değerler: "1.3", "1.2", "1.1" veya null.
-   `StartPage` : İncelenecek sayfalar arasından ilk sayfayı belirtir. Varsayılan: 1.
-   `EndPage` : İncelenecek sayfalar arasından son sayfayı belirtir. Varsayılan: belgenin son sayfası.
-   `MultiPageTables` : Art arda gelen sayfalardaki benzer tabloların otomatik olarak tek bir tabloda birleştirilip birleştirilmeyeceğini denetler. Varsayılan: true.
-   `EnforceBorderLines` : Kenarlık çizgilerinin her zaman hücre sınırı olarak zorunlu mu kılınacağını (true olduğunda), yoksa hücre sınırlarını belirlemek için pek çok ipucundan biri olarak mı kullanılacağını (false olduğunda) denetler. Varsayılan: false.


## Examples

### Example #1
sample.pdf içinde yer alan tabloları döndürür.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"},...)
```




## Category
Verilere erişiliyor
