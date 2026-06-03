---
title: Json.FromValue
---

# Json.FromValue


Verilen değere göre bir JSON temsili üretir.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

`encoding` tarafından belirtilen bir metin kodlaması ile birlikte belirtilen `value` değerinin JSON gösterimini oluşturur. `encoding` atlandıysa UTF8 kullanılır. Değerler şu şekilde gösterilmektedir:

-   Null değerler, metin değerleri ve mantıksal değerler karşılık gelen JSON türleri ile gösterilir
-   `#infinity` hariç olmak üzere sayılar JSON'da sayı olarak gösterilir, `-#infinity` ve `#nan` null'a dönüştürülür
-   Listeler JSON dizileri olarak gösterilir
-   Kayıtlar JSON nesneleri olarak temsil edilir
-   Tablolar nesne dizisi olarak gösterilir
-   Tarihler, saatler, tarih saatler, tarih saat dilimleri ve süreler ISO-8601 metni olarak gösterilir
-   İkili değerler Base 64 kodlu metin olarak gösterilir
-   Türlerde ve işlevlerde hata oluşur


## Examples

### Example #1
Karmaşık bir değeri JSON biçimine dönüştür.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
