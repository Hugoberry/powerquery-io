---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Возвращает двоичный формат, который выбирает следующий двоичный формат в зависимости от значения, которое уже было считано.


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

Возвращает двоичный формат, который выбирает следующий двоичный формат в зависимости от значения, которое уже было считано.  Значение двоичного формата, сформированного этой функцией, обрабатывается в два этапа:<ul><li>Двоичный формат, указанный параметром <code>binaryFormat</code>, используется для считывания значения.</li><li>Значение передается функции выбора, заданной параметром <code>chooseFunction</code>.</li><li>Функция выбора проверяет значение и возвращает второй двоичный формат.</li><li>Второй двоичный формат используется для чтения второго значения.</li><li>Если указана функция объединения, то первое и второе значения передаются в эту функцию, а возвращается значение результата.</li><li>Если функция объединения не указана, возвращается второе значение.</li><li>Возвращается второе значение.</li></ul>Необязательный параметр <code>type</code> указывает тип двоичного формата, который возвращается функцией выбора.  Допустимые значения: <code>type any</code>, <code>type list</code> или <code>type binary</code>.  Если параметр <code>type</code> не указан, то используется <code>type any</code>.   Если используется параметр <code>type list</code> или <code>type binary</code>, система может вернуть значение <code>binary</code> или <code>list</code> из потока вместо значения из буфера, что может сократить объем памяти, необходимый для чтения формата.


## Examples

### Example #1 
Считывает список байтов, где число элементов определяется первым байтом.
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
Считывает список байтов, где число элементов определяется первым байтом, а первый считанный байт сохраняется.
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
Считывает список байтов, где число элементов определяется первым байтом с использованием списка потоков.
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
