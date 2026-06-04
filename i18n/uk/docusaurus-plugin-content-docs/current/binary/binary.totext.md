---
title: Binary.ToText
---

# Binary.ToText


Кодує двійкові дані в текстову форму.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Повертає результат перетворення двійкового списку чисел `binary` на текстове значення. За допомогою `encoding` можна також вказати кодування, яке використовуватиметься в отриманому текстовому значенні Для `encoding` можна використовувати вказані нижче значення `BinaryEncoding`.

-   `BinaryEncoding.Base64`: кодування Base 64
-   `BinaryEncoding.Hex`: шістнадцяткове кодування



## Category
Binary
