---
title: BinaryFormat.List
---

# BinaryFormat.List


Возвращает двоичный формат, который считывает последовательность элементов и возвращает список.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Возвращает двоичный формат, который считывает последовательность элементов и возвращает <code>список</code>. Параметр <code>binaryFormat</code> указывает двоичный формат каждого элемента.  Определить число считанных элементов можно тремя способами. <ul><li>Если параметр <code>countOrCondition</code> не указан, то двоичный формат будет считываться, пока не будут обработаны все элементы.</li><li>Если <code>countOrCondition</code> — это число, то двоичный формат будет считывать только указанное число элементов.</li><li>Если <code>countOrCondition</code> — это функция, она будет вызвана для чтения каждого элемента. Функция возвращает значение true для продолжения и значение false для остановки считывания элементов. Последний элемент включается в список.</li><li>Если <code>countOrCondition</code> — это двоичный формат, ожидается, что указанное количество элементов будет предшествовать списку, а указанный формат будет использоваться для чтения этого количества.</li></ul>


## Examples

### Example #1 
Считывает байты до конца данных.
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
Считывает 2 байта.
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
Считывает байты, пока байтовое значение меньше 2.
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
