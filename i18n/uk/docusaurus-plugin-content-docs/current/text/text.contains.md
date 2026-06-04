---
title: Text.Contains
---

# Text.Contains


Повертає, чи міститься підрядок у тексті.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Визначає, чи `text` містить значення `substring`. Повертає true, якщо значення знайдено. Ця функція не підтримує символи узагальнення або регулярні вирази.  
  
Необов’язковий аргумент `comparer` можна використовувати, щоб указати порівняння без урахування регістра або з урахуванням культури та локалізації. Мова формул передбачає такі вбудовані засоби порівняння:

-   `Comparer.Ordinal`: використовується для порівняння порядкових чисел з урахуванням регістра
-   `Comparer.OrdinalIgnoreCase`: використовується для порівняння порядкових чисел без урахування регістра
-   `Comparer.FromCulture`: використовується для порівняння з урахуванням культури

Якщо перший аргумент дорівнює нулю, ця функція повертає значення Null.  
  
Усі символи інтерпретуються буквально. Наприклад, вирази "DR", " DR", "DR " і " DR " не вважаються рівними один одному.


## Examples

### Example #1
Визначити, чи міститься текст "Hello" у тексті "Hello World".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Визначити, чи міститься текст "hello" у тексті "Hello World".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Пошук слова "hello" в тексті "Hello World" за допомогою засобу порівняння, що не враховує регістр.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Знаходить у таблиці рядки, які містять "A-" або "7" у коді облікового запису.
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
