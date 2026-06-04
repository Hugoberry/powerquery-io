---
title: Binary.FromText
---

# Binary.FromText


Розшифровує дані з текстового формату на двійковий.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Повертає результат перетворення текстового значення `text` на двійкове (список `number`). За допомогою `encoding` можна вказати кодування, яке використовується в текстовому значенні. Для `encoding` можна використовувати вказані нижче значення `BinaryEncoding`.

-   `BinaryEncoding.Base64`: кодування Base 64
-   `BinaryEncoding.Hex`: шістнадцяткове кодування


## Examples

### Example #1
Розшифрувати "1011" у двійковий формат.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Розшифрувати "1011" у двійковий формат із шістнадцятковим кодуванням.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
