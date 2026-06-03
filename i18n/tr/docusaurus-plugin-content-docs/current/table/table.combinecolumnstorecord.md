---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Belirtilen sütunları yeni kayıt değerine sahip sütunla birleştirir. Burada her kayıt, birleştirilen sütun adlarına ve sütun değerlerine karşılık gelen alan adlarına ve değerlerine sahiptir.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Belirtilen `table` sütunlarını `newColumnName` adlı yeni bir kayıt değerli sütunda birleştirir. Burada, her kaydın alan adları ve değerleri, birleştirilen sütunların sütun adlarına ve değerlerine karşılık gelir. `options` için kayıt belirtilirse şu seçenekler sağlanabilir:

-   `DisplayNameColumn`: Metin olarak belirtildiğinde, verilen sütun adı, kaydın görünen adı olarak değerlendirilmelidir. Bunun, kayıttaki sütunlardan biri olması gerekmez.
-   `TypeName`: Metin olarak belirtildiğinde, elde edilen kayıt için mantıksal bir tür adı sağlar ve yükleme ortamı tarafından davranışı yönlendirmek için veri yükleme sırasında kullanılır.



## Category
Table.Transformation
