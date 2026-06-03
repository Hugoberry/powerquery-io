---
title: Table.Buffer
---

# Table.Buffer


Bir tabloyu değerlendirme sırasındaki dış değişikliklerden yalıtarak arabelleğe alır.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Bir tabloyu değerlendirme sırasındaki dış değişikliklerden yalıtarak arabelleğe alır. Arabelleğe alma yüzeyseldir. Her skaler hücre değerinin değerlendirilmesini zorunlu kılar, ancak skaler olmayan değerleri (kayıtlar, listeler, tablolar vb.) olduğu gibi bırakır.

-   `table`: Bellekte arabelleğe alınacak tablo.
-   `options`: (İsteğe bağlı) Aşağıdaki seçenek kayıt değerleri kullanılabilir:
    -   `BufferMode`: Gerçekleştirilecek arabelleğe alma türünü tanımlayan arabellek modu. Bu seçenek ya `BufferMode.Eager` ya da `BufferMode.Delayed` olabilir.

Bu işlevin kullanımı sorgularınızın daha hızlı çalışmasına neden olabilir ya da olmayabilir. Bazı durumlarda, eklenen öğeler nedeniyle sorgularınızın daha yavaş çalışmasına neden olabilir ayrıca arabelleğe almanın aşağı akış katlamasını engellediği gerçeği nedeniyle sorgularınızın daha yavaş çalışmasına neden olabilir. Verilerin arabelleğe alınması gerekmiyorsa ancak sadece aşağı akış katlanmasını önlemek istiyorsanız, bunun yerine `Table.StopFolding` yöntemini kullanın.


## Examples

### Example #1
Bir SQL tablosunun tüm satırlarını belleğe yükleyin, böylece aşağı akıştaki işlemler artık SQL sunucusunu sorgulayamayacaklardır.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
