---
title: Binary.ToText
---

# Binary.ToText


Кодирует двоичные данные в текстовом формате.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Возвращает результат преобразования списка двоичных чисел `binary` в текстовое значение. При необходимости можно задать параметр `encoding`, чтобы указать кодировку, используемую в формируемом текстовом значении Для `encoding` могут быть использованы следующие значения `BinaryEncoding`.

-   `BinaryEncoding.Base64`: кодировка Base 64
-   `BinaryEncoding.Hex`: шестнадцатеричная кодировка



## Category
Binary
