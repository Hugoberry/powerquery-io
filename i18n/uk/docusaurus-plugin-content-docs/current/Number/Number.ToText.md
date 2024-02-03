---
title: Number.ToText
---

# Number.ToText


## Description

Перетворює задане число на текст.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Перетворює числове значення <code>number</code> на текстове відповідно до формату, визначеного <code>format</code>.<br />    <br />    Формат – це текстове значення, що вказує на спосіб перетворення числа. Щоб дізнатися більше про підтримувані значення формату, перейдіть на сторінку https://go.microsoft.com/fwlink/?linkid=2241210 та https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Крім того, можна додаткового вказати <code>culture</code> (наприклад, "uk-UA"), щоб керувати залежною від культури поведінкою <code>format</code>.


## Examples

### Example #1 
Перетворення числа на текст без визначення формату.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Перетворення числа на експонентний формат.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Перетворення числа у відсотковий формат лише з одним десятковим розрядом.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
