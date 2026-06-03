---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Tabloda belirtilen sütunun benzer gruplandırma değerleriyle elde edilen temsili değerleri içeren yeni bir sütun ekler.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

`table` tablosuna `columnName` temsili değerlerine sahip yeni bir `newColumnName` sütunu ekler. Temsilciler, her satır için `columnName` içindeki değerleri benzer şekilde eşleştirerek elde edilir.

Anahtar sütunların nasıl karşılaştırılacağını belirtmek için isteğe bağlı bir `options` kümesi eklenebilir. Seçenekler şunlardır:

-   `Culture` : Kayıtları kültüre özgü kurallara göre gruplandırmaya olanak tanır. Herhangi bir geçerli kültür adı olabilir. Örneğin, "ja-JP" Kültür seçeneği, kayıtları Japon kültürüne göre gruplandırır. Varsayılan değer: "". Bu değer, kayıtları Sabit İngiliz kültürüne göre gruplandırır.
-   `IgnoreCase` : Büyük/küçük harfe duyarsız anahtar gruplandırmasına olanak tanıyan mantıksal (true/false) değer. Örneğin, true olduğunda "Üzümler", "üzümler" ile gruplandırılır. Varsayılan değer true'dur.
-   `IgnoreSpace` : Grupları bulmak için metin parçalarının birleştirilmesine olanak tanıyan mantıksal (true/false) değer. Örneğin, true olduğunda "Üz ümler", "Üzümler" ile gruplandırılır. Varsayılan değer true'dur.
-   `SimilarityColumnName` : Bir giriş değeri ile o giriş için temsili değer arasındaki benzerliği gösteren sütun adı. Varsayılan değer null'dur, bu durumda benzerlikler için yeni bir sütun eklenmeyecektir.
-   `Threshold` : İki değerin gruplandırılacağı benzerlik puanını belirten, 0,00 ile 1,00 arasında bir sayı. Örneğin, "Üzümler" ve "Üzüler" ("m" eksik), yalnızca bu seçenek 0,90'dan az olarak ayarlandıysa birlikte gruplandırılır. 1,00 eşiği, yalnızca tam eşleşmelere izin verir. (Benzer bir "tam eşleşmenin" büyük/küçük harf, sözcük sırası ve noktalama işaretleri gibi farklılıkları görmezden gelebileceğini unutmayın.) Varsayılan değer 0,80'dir.
-   `TransformationTable` : Kayıtları özel değer eşlemelerine göre gruplandırmaya olanak tanıyan tablo. "Kaynak" ve "Hedef" sütunlarını içermelidir. Örneğin, "Kaynak" sütununda "Üzümler", "Hedef" sütununda "Kuru üzümler" değerlerini içeren bir dönüşüm tablosu sağlanmışsa "Üzümler", "Kuru üzümler" ile gruplandırılır. Dönüşümün, dönüşüm tablosundaki metnin tüm oluşumlarına uygulanacağını unutmayın. Yukarıdaki dönüşüm tablosu ile "Üzümler tatlıdır" cümlesi de "Kuru üzümler tatlıdır" cümlesi ile gruplandırılır.


## Examples

### Example #1
Çalışanların konumuyla ilgili temsili değerleri bulun.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
