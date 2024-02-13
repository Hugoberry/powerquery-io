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

Возвращает результат преобразования списка двоичных чисел <code>binary</code> в текстовое значение. При необходимости можно задать параметр <code>encoding</code>, чтобы указать кодировку, используемую в формируемом текстовом значении      Для <code>encoding</code> могут быть использованы следующие значения <code>BinaryEncoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: кодировка Base 64</li>        <li><code>BinaryEncoding.Hex</code>: шестнадцатеричная кодировка</li>      </ul>



## Category
Binary
