---
title: Binary.ToText
---

# Binary.ToText


## Description

Кодує двійкові дані в текстову форму.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Повертає результат перетворення двійкового списку чисел <code>binary</code> на текстове значення. За допомогою <code>encoding</code> можна також вказати кодування, яке використовуватиметься в отриманому текстовому значенні      Для <code>encoding</code> можна використовувати вказані нижче значення <code>BinaryEncoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: кодування Base 64</li>        <li><code>BinaryEncoding.Hex</code>: шістнадцяткове кодування</li>      </ul>



## Category
Binary
