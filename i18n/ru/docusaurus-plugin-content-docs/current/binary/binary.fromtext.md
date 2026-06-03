---
title: Binary.FromText
---

# Binary.FromText


Декодирует данные из текстового формата форме в двоичный формат.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Возвращает результат преобразования текстового значения `text` в двоичное (список `number`). Можно задать параметр `encoding`, чтобы указать кодировку, используемую в текстовом значении. Следующие значения `BinaryEncoding` могут быть использованы для `encoding`.

-   `BinaryEncoding.Base64`: кодировка Base 64
-   `BinaryEncoding.Hex`: шестнадцатеричная кодировка


## Examples

### Example #1
Декодирование "1011" в двоичное значение.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Декодирование "1011" в двоичное значение с шестнадцатеричной кодировкой.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
