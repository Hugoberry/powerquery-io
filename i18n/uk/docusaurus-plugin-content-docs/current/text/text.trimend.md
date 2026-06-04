---
title: Text.TrimEnd
---

# Text.TrimEnd


Видаляє всі вказані символи у кінці.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Повертає результат видалення всіх непотрібних у кінці символів з указаного `text`. За замовчуванням видаляються всі непотрібні в кінці символи пробілів.

-   `text`: текст, з якого потрібно видалити непотрібні в кінці символи.
-   `trim`: замінює пробіли, які обрізаються за замовчуванням. Цей параметр може містити один символ або список окремих символів. Кожна операція видалення непотрібних у кінці символів припиняється, коли виявлено не видалений символ.


## Examples

### Example #1
Вилучити кінцеві пробіли з " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Вилучіть непотрібні в кінці нулі з текстового представлення числа з рухомою комою.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Видаліть символи заповнення з імені облікового запису з фіксованою шириною.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
