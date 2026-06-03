---
title: Text.Split
---

# Text.Split


Разбивает текст на список текстовых значений на основе указанного разделителя.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Возвращает список текстовых значений, полученных в результате разбиения текстового значения на основе указанного разделителя.

-   `text`: текстовое значение, подлежащее разбиению.
-   `separator`: разделитель, используемый для разбиения текста. Разделитель может быть одиночным символом или последовательностью символов. Если используется последовательность символов, текст разбивается только в тех местах, где встречается точная последовательность.


## Examples

### Example #1
Создать список из текстового значения "Name|Address|PhoneNumber", разбитого с помощью разделителя "|".
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
Создать список на основе текстового значения, используя последовательность символов.
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
