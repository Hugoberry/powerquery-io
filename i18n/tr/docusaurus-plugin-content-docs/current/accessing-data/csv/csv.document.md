---
title: Csv.Document
---

# Csv.Document


CSV belgesinin içeriğini tablo olarak döndürür.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

CSV belgesinin içeriğini tablo olarak döndürür.

-   `columns` null, sütun sayısı, sütun adları listesi, tablo türü veya seçenekler kaydı olabilir.
-   `delimiter` tek bir karakter, bir karakter listesi veya satırların ardışık boşluk karakterleriyle bölünmesi gerektiğini belirten `""` değeri olabilir. Varsayılan: `","`.
-   Desteklenen `extraValues` değerleri için `ExtraValues.Type`'a başvurun.
-   `encoding` metin kodlama türünü belirtir.

`columns` için bir kayıt belirtilirse (ve `delimiter`, `extraValues` ve `encoding` değerleri null olursa) şu kayıt alanları sağlanabilir:

-   `Delimiter`: Tek karakterli sütun sınırlayıcısı. Varsayılan: `","`.
-   `Columns`: Null, sütun sayısı, sütun adlarının listesi veya bir tablo türü olabilir. Sütun sayısı girişte bulunan sayıdan düşükse ek sütunlar yok sayılır. Sütun sayısı girişte bulunan sayıdan yüksekse ek sütunlar null olur. Belirtilmezse, sütun sayısı girişte bulunan sütun sayısına göre belirlenir.
-   `Encoding`: Dosyanın metin kodlaması. Varsayılan: 65001 (UTF-8).
-   `CsvStyle`: Tekliflerin nasıl işleneceğini belirtir.
    -   `CsvStyle.QuoteAfterDelimiter` (varsayılan): Bir alandaki alıntılar yalnızca sınırlayıcıdan hemen sonra geliyorsa dikkate alınır.
    -   `CsvStyle.QuoteAlways`: Bir alandaki alıntılar, nerede göründüklerinden bağımsız olarak her zaman dikkate alınır.
-   `QuoteStyle`: Alıntılanan satır sonlarının nasıl işleneceğini belirtir.
    -   `QuoteStyle.Csv`: Alıntılanan satır sonları geçerli satırın sonu olarak değil, verilerin bir parçası olarak değerlendirilir.
    -   `QuoteStyle.None` (varsayılan): Alıntılanan bir değer içerisinde yer alsalar bile tüm satır sonları, geçerli satırın sonu olarak değerlendirilir.
-   `IncludeByteOrderMark`: CSV çıktısının başına bir Bayt Sırası İşareti (BOM) eklenip eklenmeyeceğini belirten mantıksal bir değer. Doğru olarak ayarlandığında, BOM yazılır (örneğin, UTF-8 BOM: `0xEF 0xBB 0xBF`); Yanlış olarak ayarlandığında ise herhangi bir BOM eklenmeyecektir. Bu seçenek yalnızca çıkış senaryolarında geçerlidir. Varsayılan değer: `false`.
-   `ExtraValues`: ExtraValues’ın desteklenen değerleri için bkz. `ExtraValues.Type`.


## Examples

### Example #1
CSV metnini sütun başlıkları ile birlikte işle.
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
