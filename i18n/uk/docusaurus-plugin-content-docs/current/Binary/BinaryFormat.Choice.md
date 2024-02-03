---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

Повертає двійковий формат, який вибирає наступний двійковий формат на основі значення, яке вже було прочитано.


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

Повертає двійковий формат, який вибирає наступний двійковий формат на основі значення, яке вже було прочитано.  Значення двійкового формату, яке повертається цією функцією, працює за такими етапами.<ul><li>Читається значення за допомогою двійкового формату, указаного параметром <code>binaryFormat</code>.</li><li>Значення передається функції вибору, указаній параметром <code>chooseFunction</code>.</li><li>Функція вибору перевіряє значення та повертає другий двійковий формат.</li><li>Другий двійковий формат використовується для читання другого значення.</li><li>Якщо вказано функцію групування, їй передаються перше та друге значення, після чого вона повертає значення результату.</li><li>Якщо функцію групування не вказано, повертається друге значення.</li><li>Повертається друге значення.</li></ul>Необов'язковий параметр <code>type</code> вказує тип двійкового формату, який поверне функція вибору.  Можна вказати <code>type any</code>, <code>type list</code> або <code>type binary</code>.  Якщо параметр <code>type</code> не вказано, використовується <code>type any</code>.   Якщо використовується <code>type list</code> або <code>type binary</code>, система може мати змогу повернути потокове передавання <code>binary</code> або значення <code>list</code> замість буферизованого, що може зменшити потребу в обсязі пам'яті, необхідної для читання формату.


## Examples

### Example #1 
Прочитати список байтів, де кількість елементів визначається першим байтом.
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
Прочитати список байтів, де кількість елементів визначається першим байтом, і зберегти перший прочитаний байт.
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
Прочитати список байтів, де кількість елементів визначається першим байтом, за допомогою списку потокового передавання.
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
