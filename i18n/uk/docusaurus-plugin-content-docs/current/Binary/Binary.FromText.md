---
title: Binary.FromText
---

# Binary.FromText


## Description

Розшифровує дані з текстового формату на двійковий.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Повертає результат перетворення текстового значення <code>text</code> на двійкове (список <code>number</code>). За допомогою <code>encoding</code> можна вказати кодування, яке використовується в текстовому значенні.      Для <code>encoding</code> можна використовувати вказані нижче значення <code>BinaryEncoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: кодування Base 64</li>        <li><code>BinaryEncoding.Hex</code>: шістнадцяткове кодування</li>      </ul>


## Examples

### Example #1 
Розшифрувати &#34;1011&#34; у двійковий формат.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Розшифрувати &#34;1011&#34; у двійковий формат із шістнадцятковим кодуванням.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
