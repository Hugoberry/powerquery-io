---
title: BinaryFormat.List
---

# BinaryFormat.List


Bir öğe sırasını okuyan ikili biçimi döndürür ve bir liste döndürür.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Bir öğe sırasını okuyan ikili biçimi döndürür ve bir <code>list</code> döndürür.  <code>binaryFormat</code> parametresi, her öğenin ikili biçimini belirtir.  Okunan öğe sayısını belirlemenin üç yolu vardır: <ul><li><code>countOrCondition</code> belirtilmezse, ikili biçimi öğe kalmayana kadar okur.</li><li><code>countOrCondition</code> bir sayıysa, ikili biçimi aynı miktarda öğeyi okur.</li><li><code>countOrCondition</code> bir işlevse, bu işlev okunan her öğe için çağrılır.  İşlev devam etmek için true değerini, öğeleri okumayı durdurmak için false değerini döndürür.  Son öğe listeye dahil edilir.</li><li><code>countOrCondition</code> bir ikili biçimi ise, öğe sayısının listeden önce gelmesi beklenir ve belirtilen biçim sayıyı okumak için kullanılır.</li></ul>


## Examples

### Example #1 
Verilerin sonuna kadar baytları okur.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
İki baytı okur.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3 
Bayt değeri ikiden büyük veya buna eşit olana kadar baytları okur.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
