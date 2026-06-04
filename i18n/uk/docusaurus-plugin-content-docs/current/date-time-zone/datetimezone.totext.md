---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Повертає текстове представлення значення дати та часу з часовим поясом.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Повертає текстове представлення `dateTimeZone`. Можна вказати необов’язковий параметр `record`, `options`, щоб зазначити додаткові властивості. `culture` використовується лише для застарілих робочих циклів. Параметр типу `record` може містити такі поля:

-   `Format`: значення `text`, яке вказує формат, який потрібно використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або вказати `Null`\-значення, дата форматуватиметься за стандартним значенням, визначеним за полем `Culture`.
-   `Culture` – якщо `Format` не має Null-значення, `Culture` керує деякими специфікаторами формату. Наприклад, для `"en-US"` параметр `"MMM"` виглядатиме так: `"Jan", "Feb", "Mar"...`. Тоді як для `"uk-UK"` параметр `"MMM"` виглядатиме так: `"січ", "лют", "бер"...`. Якщо параметру `Format` задано значення `null`, параметр `Culture` визначає стандартний формат. Якщо `Culture` опущено або має `Null`\-значення, використовується `Culture.Current`.

Щоб забезпечити підтримку застарілих робочих циклів, для параметрів `options` і `culture` також можна задавати текстові значення. Така сама поведінка, як у випадку, якщо `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Перетворення `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` на значення `text`. *Результат може залежати від поточної культури.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Перетворення з використанням настроюваного формату та німецької культури.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Перетворення з використанням шаблону ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
