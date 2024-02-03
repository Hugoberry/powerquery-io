---
title: Json.FromValue
---

# Json.FromValue


## Description

Виражає задане значення у форматі JSON.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Виражає задане значення <code>value</code> у форматі JSON за допомогою кодування тексту, указаного параметром <code>encoding</code>. Якщо параметр <code>encoding</code> пропущено, використовується кодування UTF8. Значення виражаються, як описано нижче.<br /> <ul>        <li>Текстові, логічні й Null-значення виражаються як відповідні типи формату JSON.</li>        <li>Числа виражаються як числа у форматі JSON, за винятком значень <code>#infinity</code>, <code>-#infinity</code> та <code>#nan</code>, які перетворюються на Null-значення.</li>        <li>Списки виражаються як масиви формату JSON.</li>        <li>Записи виражаються як об’єкти формату JSON.</li>        <li>Таблиці виражаються як масив об’єктів.</li>        <li>Значення "Дата", "Час", "Дата й час", "Дата, час і часовий пояс", "Тривалість" виражаються як текст за стандартом ISO-8601.</li>        <li>Двійкові значення виражаються як текст у кодуванні Base 64.</li>        <li>Для типів і функцій повертається помилка.</li> </ul>    


## Examples

### Example #1 
Перетворити комплексне значення на формат JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
