---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

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


## Details

Zaten kullanılan bir değere dayalı olan bir sonraki ikili biçimi seçen bir ikili biçimi döndürür.  Bu işlev tarafından oluşturulan ikili biçim değeri şu aşamalarda çalışır:<ul><li> <code>binaryFormat</code> parametresi tarafından belirtilen ikili biçimi bir değer okumak için kullanılır.</li><li>Değer <code>chooseFunction</code> parametresi tarafından belirtilen seçim işlevine geçirilir.</li><li>Seçim işlevi değeri denetler ve ikinci bir ikili biçimi döndürür.</li><li>İkinci ikili biçimi ikinci bir değeri okumak için kullanılır.</li><li>Birleştirme işlevi belirtilirse, birinci ve ikinci değerler birleştirme işlevine geçirilir ve sonuç değeri döndürülür.</li><li>Birleştirme işlevi belirtilmezse, ikinci değer döndürülür.</li><li>İkinci değer döndürülür.</li></ul>İsteğe bağlı <code>type</code> parametresi, seçim işlevi tarafından döndürülecek ikili biçiminin türünü belirtir.  <code>type any</code>, <code>type list</code> veya <code>type binary</code> belirtilebilir.  <code>type</code> parametresi belirtilmezse, <code>type any</code> kullanılır.   <code>type list</code> veya <code>type binary</code> kullanılırsa, sistem arabelleğe alınan bir değer yerine akış yapan bir <code>binary</code> veya <code>list</code> değeri döndürebilir; bu, biçimi okumak için gerekli bellek miktarını azaltabilir.


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
