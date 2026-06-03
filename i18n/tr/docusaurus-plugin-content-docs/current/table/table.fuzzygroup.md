---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Tablodaki satırları, anahtarların belirsiz eşleştirmesine bağlı olarak gruplandırır.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

`table` satırlarını, her satır için belirtilen `key` sütunundaki benzer şekilde eşleşen değerlere göre gruplar. Her grup için `aggregatedColumns` tarafından belirtilen tüm kümelenmiş sütunlarla birlikte anahtar sütunları (ve değerlerini) içeren bir kayıt oluşturulur. Bu işlev, sabit bir satır sırası döndürmeyi garanti edemez.

Anahtar sütunların nasıl karşılaştırılacağını belirtmek için isteğe bağlı bir `options` kümesi eklenebilir. Seçenekler şunlardır:

-   `Culture` : Kayıtları kültüre özgü kurallara göre gruplandırmaya olanak tanır. Herhangi bir geçerli kültür adı olabilir. Örneğin, "ja-JP" Kültür seçeneği, kayıtları Japon kültürüne göre gruplandırır. Varsayılan değer: "". Bu değer, kayıtları Sabit İngiliz kültürüne göre gruplandırır.
-   `IgnoreCase` : Büyük/küçük harfe duyarsız anahtar gruplandırmasına olanak tanıyan mantıksal (true/false) değer. Örneğin, true olduğunda "Üzümler", "üzümler" ile gruplandırılır. Varsayılan değer true'dur.
-   `IgnoreSpace` : Grupları bulmak için metin parçalarının birleştirilmesine olanak tanıyan mantıksal (true/false) değer. Örneğin, true olduğunda "Üz ümler", "Üzümler" ile gruplandırılır. Varsayılan değer true'dur.
-   `SimilarityColumnName` : Bir giriş değeri ile o giriş için temsili değer arasındaki benzerliği gösteren sütun adı. Varsayılan değer null'dur, bu durumda benzerlikler için yeni bir sütun eklenmeyecektir.
-   `Threshold` : İki değerin gruplandırılacağı benzerlik puanını belirten, 0,00 ile 1,00 arasında bir sayı. Örneğin, "Üzümler" ve "Üzüler" ("m" eksik), yalnızca bu seçenek 0,90'dan az olarak ayarlandıysa birlikte gruplandırılır. 1,00 eşiği, yalnızca tam eşleşmelere izin verir. (Benzer bir "tam eşleşmenin" büyük/küçük harf, sözcük sırası ve noktalama işaretleri gibi farklılıkları görmezden gelebileceğini unutmayın.) Varsayılan değer 0,80'dir.
-   `TransformationTable` : Kayıtları özel değer eşlemelerine göre gruplandırmaya olanak tanıyan tablo. "Kaynak" ve "Hedef" sütunlarını içermelidir. Örneğin, "Kaynak" sütununda "Üzümler", "Hedef" sütununda "Kuru üzümler" değerlerini içeren bir dönüşüm tablosu sağlanmışsa "Üzümler", "Kuru üzümler" ile gruplandırılır. Dönüşümün, dönüşüm tablosundaki metnin tüm oluşumlarına uygulanacağını unutmayın. Yukarıdaki dönüşüm tablosu ile "Üzümler tatlıdır" cümlesi de "Kuru üzümler tatlıdır" cümlesi ile gruplandırılır.


## Examples

### Example #1
Her konumdaki çalışan sayısını içeren bir toplama sütunu \[Count\] ekleyerek tabloyu gruplandırın (`each Table.RowCount(_)`).
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
