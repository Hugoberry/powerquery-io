---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Zaten kullanılan bir değere dayalı olan bir sonraki ikili biçimi seçen bir ikili biçimi döndürür.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

Zaten kullanılan bir değere dayalı olan bir sonraki ikili biçimi seçen bir ikili biçimi döndürür. Bu işlev tarafından oluşturulan ikili biçim değeri şu aşamalarda çalışır:

-   `binaryFormat` parametresi tarafından belirtilen ikili biçimi bir değer okumak için kullanılır.
-   Değer `chooseFunction` parametresi tarafından belirtilen seçim işlevine geçirilir.
-   Seçim işlevi değeri denetler ve ikinci bir ikili biçimi döndürür.
-   İkinci ikili biçimi ikinci bir değeri okumak için kullanılır.
-   Birleştirme işlevi belirtilirse, birinci ve ikinci değerler birleştirme işlevine geçirilir ve sonuç değeri döndürülür.
-   Birleştirme işlevi belirtilmezse, ikinci değer döndürülür.
-   İkinci değer döndürülür.

İsteğe bağlı `type` parametresi, seçim işlevi tarafından döndürülecek ikili biçiminin türünü belirtir. `type any`, `type list` veya `type binary` belirtilebilir. `type` parametresi belirtilmezse, `type any` kullanılır. `type list` veya `type binary` kullanılırsa, sistem arabelleğe alınan bir değer yerine akış yapan bir `binary` veya `list` değeri döndürebilir; bu, biçimi okumak için gerekli bellek miktarını azaltabilir.


## Examples

### Example #1
Öğe sayısının ilk bayt tarafından belirlendiği bayt listesini okur.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2
Öğe sayısının ilk bayt tarafından belirlendiği bayt listesini okuyun ve okunan ilk baytı korur.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3
Akış yapan bir liste kullanarak öğe sayısının ilk bayt tarafından belirlendiği bayt listesini okur.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
