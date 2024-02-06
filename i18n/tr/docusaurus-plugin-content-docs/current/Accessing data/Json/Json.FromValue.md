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

<code>encoding</code> tarafından belirtilen bir metin kodlaması ile birlikte belirtilen <code>value</code> değerinin JSON gösterimini oluşturur. <code>encoding</code> atlandıysa UTF8 kullanılır. Değerler şu şekilde gösterilmektedir:<br /> <ul>        <li>Null değerler, metin değerleri ve mantıksal değerler karşılık gelen JSON türleri ile gösterilir</li>        <li><code>#infinity</code> hariç olmak üzere sayılar JSON'da sayı olarak gösterilir, <code>-#infinity</code> ve <code>#nan</code> null'a dönüştürülür</li>        <li>Listeler JSON dizileri olarak gösterilir</li>        <li>Kayıtlar JSON nesneleri olarak gösterilir</li>        <li>Tablolar nesne dizisi olarak gösterilir</li>        <li>Tarihler, saatler, tarih saatler, tarih saat dilimleri ve süreler ISO-8601 metni olarak gösterilir</li>        <li>İkili değerler Base 64 kodlu metin olarak gösterilir</li>        <li>Türlerde ve işlevlerde hata oluşur</li> </ul>    


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
