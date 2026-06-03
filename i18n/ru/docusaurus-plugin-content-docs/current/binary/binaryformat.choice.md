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

Возвращает двоичный формат, который выбирает следующий двоичный формат в зависимости от значения, которое уже было считано. Значение двоичного формата, сформированного этой функцией, обрабатывается в два этапа:

-   Двоичный формат, указанный параметром `binaryFormat`, используется для считывания значения.
-   Значение передается функции выбора, заданной параметром `chooseFunction`.
-   Функция выбора проверяет значение и возвращает второй двоичный формат.
-   Второй двоичный формат используется для чтения второго значения.
-   Если указана функция объединения, то первое и второе значения передаются в эту функцию, а возвращается значение результата.
-   Если функция объединения не указана, возвращается второе значение.
-   Возвращается второе значение.

Необязательный параметр `type` указывает тип двоичного формата, который возвращается функцией выбора. Допустимые значения: `type any`, `type list` или `type binary`. Если параметр `type` не указан, то используется `type any`. Если используется параметр `type list` или `type binary`, система может вернуть значение `binary` или `list` из потока вместо значения из буфера, что может сократить объем памяти, необходимый для чтения формата.


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
