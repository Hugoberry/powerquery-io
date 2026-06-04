---
title: Text.Trim
---

# Text.Trim


Видаляє всі вказані символи на початку та кінці.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Повертає результат видалення всіх непотрібних на початку та кінці символів з указаного `text`. За замовчуванням видаляються всі непотрібні на початку та кінці символи пробілів.

-   `text`: текст, з якого потрібно видалити непотрібні на початку і в кінці символи.
-   `trim`: замінює пробіли, які обрізаються за замовчуванням. Цей параметр може містити один символ або список окремих символів. Кожна операція видалення непотрібних символів припиняється, коли виявлено не видалений символ.


## Examples

### Example #1
Вилучити початкові й кінцеві пробіли з " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Вилучіть непотрібні на початку та кінці нулі з текстового представлення числа.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Видаліть непотрібні на початку та кінці дужки з тега HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Видаліть спеціальні символи, що використовуються для стану "продаж в очікуванні".
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
