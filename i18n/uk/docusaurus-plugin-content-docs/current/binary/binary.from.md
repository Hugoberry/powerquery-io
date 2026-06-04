---
title: Binary.From
---

# Binary.From


Створює двійкове значення із заданого значення.


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Повертає значення `binary` із заданого `value`. Якщо задане значення `value` – `null`, `Binary.From` повертає значення `null`. Якщо задане значення `value` – `binary`, повертається значення `value`. На значення `binary` можуть перетворюватися значення вказаних нижче типів.

-   `text`: значення `binary` з текстової форми. Докладніші відомості див. в `Binary.FromText`.

Якщо `value` належить до будь-якого іншого типу, повертається помилка.


## Examples

### Example #1
Отримати `binary` значення `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
