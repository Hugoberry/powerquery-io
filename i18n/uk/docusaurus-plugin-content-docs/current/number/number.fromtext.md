---
title: Number.FromText
---

# Number.FromText


Створює числа з поширених текстових форматів ("15", "3 423,10", "5,0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Повертає `число` із заданого текстового значення параметра `text`.

-   `text`: текстове представлення числового значення. Представлення має бути в типовому числовому форматі: "15", "3 423,10", "5.0E-10".
-   `culture`: необов‘язкова культура, що контролює, як інтерпретується параметр `text` (наприклад, "uk-UA").


## Examples

### Example #1
Отримати числове значення від `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Отримати числове значення від `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
