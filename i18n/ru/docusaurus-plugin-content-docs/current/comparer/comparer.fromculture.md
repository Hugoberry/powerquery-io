---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Возвращает функцию сравнения с учетом указанных региональных параметров и регистра.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Возвращает функцию сравнения, использующую `culture` с учетом регистра с настройкой посредством `ignoreCase` для выполнения сравнения.  
  
Функция сравнения принимает два аргумента и возвращает –1, 0 или 1, если первое значение соответственно меньше второго, равно ему или больше него.  
  
Значение по умолчанию для `ignoreCase` равно false. `culture` должен быть одним из языковых стандартов, поддерживаемых платформой .NET Framework (например, "ru-RU").


## Examples

### Example #1
Сравнение "a" и "A" с использованием языка "en-US" для определения того, равны ли значения.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Сравнение "a" и "A" с использованием языка "en-US" без учета регистра для определения того, равны ли значения.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
