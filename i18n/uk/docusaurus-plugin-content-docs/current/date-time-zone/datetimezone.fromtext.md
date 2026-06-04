---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Створює дату й час із місцевого, всесвітнього та настроюваного форматів дати й часу з часовим поясом.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Створює значення типу `datetimezone` із текстового представлення `text`. Можна вказати необов’язковий параметр `options` типу `record`, щоб зазначити додаткові властивості. Параметр типу `record` може містити такі поля:

-   `Format`: значення `text`, яке вказує формат, який потрібно використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або вказати значення `null`, час аналізуватиметься за найкращим варіантом.
-   `Culture` – якщо `Format` не має Null-значення, `Culture` керує деякими специфікаторами формату. Наприклад, для `"en-US"` параметр `"MMM"` виглядатиме так: `"Jan", "Feb", "Mar"...`. Тоді як для `"uk-UK"` параметр `"MMM"` виглядатиме так: `"січ", "лют", "бер"...`. Якщо параметру `Format` задано значення `null`, параметр `Culture` визначає стандартний формат. Якщо `Culture` опущено або має `Null`\-значення, використовується `Culture.Current`.

Щоб забезпечити підтримку застарілих робочих циклів, для `options` також можна задавати текстове значення. Така сама поведінка, як у випадку, якщо `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Перетворення `"2010-12-31T01:30:00-08:00"` на значення `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Перетворення з використанням настроюваного формату та німецької культури.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Перетворення з використанням ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
