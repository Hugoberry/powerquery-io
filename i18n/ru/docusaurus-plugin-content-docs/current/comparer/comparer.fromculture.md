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

Возвращает функцию сравнения, использующую <code>culture</code> с учетом регистра с настройкой посредством <code>ignoreCase</code> для выполнения сравнения.<br />      <br />      Функция сравнения принимает два аргумента и возвращает –1, 0 или 1, если первое значение соответственно меньше второго, равно ему или больше него.<br />      <br />      Значение по умолчанию для <code>ignoreCase</code> равно false. <code>culture</code> должен быть одним из языковых стандартов, поддерживаемых платформой .NET Framework (например, "ru-RU").    


## Examples

### Example #1 
Сравнение &#34;a&#34; и &#34;A&#34; с использованием языка &#34;en-US&#34; для определения того, равны ли значения.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Сравнение &#34;a&#34; и &#34;A&#34; с использованием языка &#34;en-US&#34; без учета регистра для определения того, равны ли значения.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
