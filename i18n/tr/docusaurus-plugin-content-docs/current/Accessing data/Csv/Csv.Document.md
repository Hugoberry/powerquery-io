---
title: Csv.Document
---

# Csv.Document


## Description

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


## Details

CSV belgesinin içeriklerini tablo olarak döndürür.    <ul>      <li>        <code>columns</code> değeri null, sütun sayısı, sütun adlarının listesi, bir tablo türü veya bir seçenekler kaydı olabilir.      </li>      <li>        <code>delimiter</code>, tek bir karakter veya bir karakter listesi veya satırların ardışık boşluk karakteri ile bölünmesi gerektiğini belirten <code>""</code> değeri olabilir. Varsayılan: <code>","</code>.      </li>      <li>        Desteklenen <code>extraValues</code> değerleri için bkz. <code>ExtraValues.Type</code>.      </li>      <li>        <code>encoding</code>, metin kodlama türünü belirtir.      </li>    </ul>    <code>columns</code> için bir kayıt belirtilirse (ve <code>delimiter</code>, <code>extraValues</code>, <code>encoding</code> değerleri null olursa) şu kayıt alanları sağlanabilir:    <ul>      <li>        <code>Delimiter</code>: Sütun sınırlayıcısı. Varsayılan: <code>","</code>.      </li>      <li>        <code>Columns</code>: Null, sütun sayısı, sütun adlarının listesi veya bir tablo türü olabilir. Sütun sayısı girişte bulunan sayıdan düşükse ek sütunlar yoksayılır. Sütun sayısı girişte bulunan sayıdan yüksekse ek sütunlar null olur. Belirtilmezse sütun sayısı girişte bulunan sayıya göre belirlenir.      </li>      <li>        <code>Encoding</code>: Dosyanın metin kodlaması. Varsayılan: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: Alıntıların nasıl işleneceğini belirtir.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (varsayılan): Bir alandaki alıntılar yalnızca sınırlayıcıdan hemen sonra geliyorsa dikkate alınır.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: Bir alandaki alıntılar, nerede göründüklerinden bağımsız olarak her zaman dikkate alınır.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Alıntılanan satır sonlarının nasıl işleneceğini belirtir.        <ul>          <li>            <code>QuoteStyle.Csv</code> (varsayılan): Alıntılanan satır sonları verilerin bir parçası olarak değerlendirilir. Geçerli satırın sonu olarak değerlendirilmezler.          </li>          <li>            <code>QuoteStyle.None</code>: Tüm satır sonları, alıntılanan bir değerde olduklarında bile geçerli satırın sonu olarak değerlendirilirler.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
CSV metnini sütun başlıkları ile birlikte işle
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




## Category
Accessing data
