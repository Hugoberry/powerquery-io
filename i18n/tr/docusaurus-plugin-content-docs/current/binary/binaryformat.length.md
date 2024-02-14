---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Okunabilecek veri miktarını sınırlayan bir ikili biçimi döndürür.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Okunabilecek veri miktarını sınırlayan bir ikili biçim döndürür. Verilerin sonuna kadar okumak için hem <code>BinaryFormat.List</code> hem de <code>BinaryFormat.Binary</code> kullanılabilir. <code>BinaryFormat.Length</code>, okunan bayt sayısını sınırlamak için kullanılabilir. <code>binaryFormat</code> parametresi, sınırlandırılacak ikili formatı belirtir. <code>length</code> parametresi okunacak bayt sayısını belirtir. <code>length</code> parametresi, bir sayı değeri veya okunan değerden önce görünen uzunluk değerinin biçimini belirten bir ikili biçim değeri olabilir.


## Examples

### Example #1 
Bir bayt listesini okurken okunan bayt sayısını 2 ile sınırlar.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Bir bayt listesini okurken okunan bayt sayısını listeden önceki bayt değeriyle sınırlayın.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
