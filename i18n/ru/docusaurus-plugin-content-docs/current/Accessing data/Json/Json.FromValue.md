---
title: Json.FromValue
---

# Json.FromValue


## Description

Создает представление JSON указанного значения.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Создает представление JSON заданного значения (<code>value</code>) с кодировкой текста, указанной "<code>encoding</code>". Если "<code>encoding</code>" пропускается, используется UTF8. Значения представлены следующим образом:<br /> <ul>        <li>Значения NULL, текстовые и логические значения представлены как соответствующие типы JSON.</li>        <li>Числа представлены как числа в JSON, за исключением <code>#infinity</code>, <code>-#infinity</code> и <code>#nan</code>, которые преобразуются в NULL.</li>        <li>Списки представлены как массивы JSON.</li>        <li>Записи представлены как объекты JSON.</li>        <li>Таблицы представлены как массив объектов.</li>        <li>Значения date, time, datetime, datetimezone и duration представлены как текст ISO-8601.</li>        <li>Двоичные значения представлены как текст в кодировке base-64.</li>        <li>Типы и функции создают ошибку.</li> </ul>    


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
