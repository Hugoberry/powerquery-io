---
title: DateTime.FromText
---

# DateTime.FromText


Створює дату й час із часовим поясом із місцевого та всесвітнього форматів дати й часу.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Створює значення типу `datetime` із текстового подання `text`. Можна вказати необов’язковий параметр `options` типу `record`, щоб зазначити додаткові властивості. Параметр типу `record` може містити такі поля:

-   `Format`: значення `text`, яке вказує формат, який потрібно використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або вказати значення `null`, час аналізуватиметься за найкращим варіантом.
-   `Culture` – якщо `Format` не має Null-значення, `Culture` керує деякими специфікаторами формату. Наприклад, для `"en-US"` параметр `"MMM"` виглядатиме так: `"Jan", "Feb", "Mar"...`. Тоді як для `"uk-UK"` параметр `"MMM"` виглядатиме так: `"січ", "лют", "бер"...`. Якщо параметру `Format` задано значення `null`, параметр `Culture` визначає стандартний формат. Якщо `Culture` опущено або має `Null`\-значення, використовується `Culture.Current`.

Щоб забезпечити підтримку застарілих робочих циклів, для `options` також можна задавати текстове значення. Така сама поведінка, як у випадку, якщо `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Перетворення `"2010-12-31T01:30:00"` на значення дати й часу.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Перетворення `"2010-12-31T01:30:00.121212"` на значення дати й часу.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Перетворення `"2010-12-31T01:30:00"` на значення дати й часу.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Перетворення `"20101231T013000"` на значення дати й часу.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
