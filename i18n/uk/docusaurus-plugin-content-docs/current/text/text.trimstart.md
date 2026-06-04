---
title: Text.TrimStart
---

# Text.TrimStart


Видаляє всі вказані символи на початку.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Повертає результат видалення всіх непотрібних на початку символів з указаного `text`. За замовчуванням видаляються всі непотрібні на початку символи пробілів.

-   `text`: текст, з якого потрібно видалити непотрібні на початку символи.
-   `trim`: замінює пробіли, які обрізаються за замовчуванням. Цей параметр може містити один символ або список окремих символів. Кожна операція видалення непотрібних на початку символів припиняється, коли виявлено не видалений символ.


## Examples

### Example #1
Вилучити початкові пробіли з " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Вилучіть непотрібні на початку нулі з текстового представлення числа.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Видаліть непотрібні на початку символи заповнення з імені облікового запису з фіксованою шириною.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
