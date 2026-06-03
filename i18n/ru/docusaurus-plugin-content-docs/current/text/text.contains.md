---
title: Text.Contains
---

# Text.Contains


Определяет, содержит ли текст подстроку.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Определяет, содержит ли `text` значение `substring`. Возвращает значение true, если значение найдено. Эта функция не поддерживает подстановочные знаки и регулярные выражения.  
  
Необязательный аргумент `comparer` можно использовать для указания сравнений без учета регистра или с учетом культуры и языковых стандартов. В языке формул доступны следующие встроенные средства сравнения:

-   `Comparer.Ordinal`: используется для выполнения порядкового сравнения с учетом регистра
-   `Comparer.OrdinalIgnoreCase`: используется для выполнения порядкового сравнения без учета регистра
-   `Comparer.OrdinalIgnoreCase`: Uиспользуется для выполнения порядкового сравнения без учета регистра

Если первый аргумент имеет значение null, эта функция возвращает значение null.  
  
Все персонажи трактуются буквально. Например, "DR", "DR", "DR" и "DR" не считаются равными друг другу.


## Examples

### Example #1
Найти, содержит ли текст "Hello World" подстроку "Hello".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Найти, содержит ли текст "Hello World" подстроку "hello".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Узнайте, содержится ли слово "hello" в тексте "Hello World" с помощью функции сравнения, не учитывающей регистр.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Найдите в таблице строки, содержащие "A-" или "7" в коде учетной записи.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
