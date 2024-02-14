---
title: BinaryFormat.Record
---

# BinaryFormat.Record


Возвращает двоичный формат, который считывает запись.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Remarks

Возвращает двоичный формат, который считывает запись.  Параметр <code>record</code> указывает формат записи.  Каждое поле записи может содержать различные двоичные форматы.  Если поле содержит значение, которое не является значением двоичного формата, то данные не для этого поля не считываются, а значение поля переносится в результат.


## Examples

### Example #1 
Считывает запись, содержащую одно 16-разрядное целое число и одно 32-разрядное целое число.
```powerquery
let
    binaryData = #binary({
        0x00, 0x01,
        0x00, 0x00, 0x00, 0x02
    }),
    recordFormat = BinaryFormat.Record([
        A = BinaryFormat.UnsignedInteger16,
        B = BinaryFormat.UnsignedInteger32
    ])
in
    recordFormat(binaryData)
```

Result: 
```powerquery
[A = 1, B = 2]
```




## Category
Binary Formats.Reading records
