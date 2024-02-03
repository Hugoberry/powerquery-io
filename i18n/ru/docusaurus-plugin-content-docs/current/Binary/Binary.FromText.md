---
title: Binary.FromText
---

# Binary.FromText


## Description

Декодирует данные из текстового формата форме в двоичный формат.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Возвращает результат преобразования текстового значения <code>text</code> в двоичное (список <code>number</code>). Можно задать параметр <code>encoding</code>, чтобы указать кодировку, используемую в текстовом значении.      Следующие значения <code>BinaryEncoding</code> могут быть использованы для <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: кодировка Base 64</li>        <li><code>BinaryEncoding.Hex</code>: шестнадцатеричная кодировка</li>      </ul>


## Examples

### Example #1 
Декодирование &#34;1011&#34; в двоичное значение.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Декодирование &#34;1011&#34; в двоичное значение с шестнадцатеричной кодировкой.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
