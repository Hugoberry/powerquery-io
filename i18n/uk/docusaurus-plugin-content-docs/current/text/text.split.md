---
title: Text.Split
---

# Text.Split


Розділяє текст на список текстових значень на основі вказаного роздільника.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Повертає список текстових значень, отриманих внаслідок розділення текстового значення на основі вказаного роздільника.

-   `text`: текстове значення, яке потрібно розділити.
-   `separator`: роздільник, який використовується для розділення тексту. Роздільник може бути одним символом або послідовністю символів. Якщо використовується послідовність символів, текст розділяється лише там, де знаходиться точна послідовність.


## Examples

### Example #1
Створити список з розділеного символом "|" текстового значення "Ім'я|Адреса|Номер телефону".
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
Створіть список з текстового значення, використовуючи послідовність символів.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
