---
title: Json.FromValue
---

# Json.FromValue


Создает представление JSON указанного значения.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Создает представление JSON заданного значения (`value`) с кодировкой текста, указанной параметром `encoding`. Если значение `encoding` не указано, используется UTF8. Значения представляются следующим образом:

-   Значения NULL, текстовые и логические значения представляются как соответствующие типы JSON.
-   Числа в JSON представляются в числовом формате, за исключением `#infinity`, `-#infinity` и `#nan`, которые преобразуются в NULL.
-   Списки представляются как массивы JSON.
-   Записи представляются как объекты JSON
-   Таблицы представляются в виде массива объектов.
-   Значения типа date, time, datetime, datetimezone и duration представляются в виде текста в соответствии с ISO-8601.
-   Двоичные значения представляются в виде текста в кодировке base-64.
-   Типы и функции генерируют ошибку.


## Examples

### Example #1
Преобразование сложного значения в JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
