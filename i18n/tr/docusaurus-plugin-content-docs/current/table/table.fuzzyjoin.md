---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Verilen anahtarlara göre benzer öğeleri eşleşen iki tablodaki satırları birleştirir.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

`key1` (`table1` için) ve `key2` (`table2` için) tarafından seçilen anahtar sütunlarının değerlerinin benzer öğe eşleştirmesini temel alarak `table1` satırlarını `table2` satırlarıyla birleştirir.

Benzer öğe eşleştirme, metnin eşitliğinden daha çok benzerliğini temel alan bir karşılaştırmadır.

Varsayılan olarak bir iç birleşim gerçekleştirilir ancak birleşim türünü belirtmek için isteğe bağlı olarak bir `joinKind` eklenebilir. Seçenekler şunlardır:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Anahtar sütunlarının nasıl karşılaştırılacağını belirtmek için isteğe bağlı olarak bir `joinOptions` kümesi eklenebilir. Seçenekler şunlardır:

-   `ConcurrentRequests` : Benzer öğe eşleştirme için kullanılacak paralel iş parçacıklarının sayısını belirten, 1 ile 8 arasında bir sayı. Varsayılan değer 1'dir.
-   `Culture` : Kayıtları kültüre özgü kurallara göre eşleştirmeye olanak tanır. Herhangi bir geçerli kültür adı olabilir. Örneğin, "ja-JP" Kültür seçeneği, kayıtları Japon kültürüne göre eşleştirir. Varsayılan değer: "". Bu değer, kayıtları Sabit İngiliz kültürüne göre eşleştirir.
-   `IgnoreCase` : Büyük/küçük harfe duyarsız anahtar eşleştirmesine olanak tanıyan mantıksal (true/false) değer. Örneğin, true olduğunda "Üzümler", "üzümler" ile eşleştirilir. Varsayılan değer true'dur.
-   `IgnoreSpace` : Eşleşmeleri bulmak için metin parçalarının birleştirilmesine olanak tanıyan mantıksal (true/false) değer. Örneğin, true olduğunda "Üz ümler" "Üzümler" ile eşleştirilir. Varsayılan değer true'dur.
-   `NumberOfMatches` : Her giriş satırı için döndürülebilecek maksimum eşleşen satır sayısını belirten tamsayı. Örneğin 1 değeri, her giriş satırı için en çok bir eşleşen satır döndürür. Bu seçenek sağlanmazsa eşleşen tüm satırlar döndürülür.
-   `SimilarityColumnName` : Bir giriş değeri ile o giriş için temsili değer arasındaki benzerliği gösteren sütun adı. Varsayılan değer null'dur, bu durumda benzerlikler için yeni bir sütun eklenmeyecektir.
-   `Threshold` : İki değerin eşleştirileceği benzerlik puanını belirten, 0,00 ile 1,00 arasında bir sayı. Örneğin, "Üzümler" ve "Üzüler" ("m" eksik), yalnızca bu seçenek 0,90'dan az olarak ayarlandıysa eşleştirilir. 1,00 eşiği, yalnızca tam eşleşmelere izin verir. (Benzer bir "tam eşleşmenin" büyük/küçük harf, sözcük sırası ve noktalama işaretleri gibi farklılıkları görmezden gelebileceğini unutmayın.) Varsayılan değer 0,80'dir.
-   `TransformationTable` : Kayıtları özel değer eşlemelerine göre eşleştirmeye olanak tanıyan tablo. "Kaynak" ve "Hedef" sütunlarını içermelidir. Örneğin, "Kaynak" sütununda "Üzümler", "Hedef" sütununda "Kuru üzümler" değerlerini içeren bir dönüşüm tablosu sağlanmışsa "Üzümler", "Kuru üzümler" ile eşleştirilir. Dönüşümün, dönüşüm tablosundaki metnin tüm oluşumlarına uygulanacağını unutmayın. Yukarıdaki dönüşüm tablosu ile "Üzümler tatlıdır" cümlesi de "Kuru üzümler tatlıdır" cümlesi ile eşleştirilir.


## Examples

### Example #1
\[FirstName\] temelinde iki tablonun sol iç benzer öğe birleşimi
```powerquery
Table.FuzzyJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 1,
        FirstName2 = "Bob",
        State = "TX"
    ],
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 2,
        FirstName2 = "bOB",
        State = "CA"
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        CustomerStateID = null,
        FirstName2 = null,
        State = null
    ]
})
```




## Category
Table.Transformation
