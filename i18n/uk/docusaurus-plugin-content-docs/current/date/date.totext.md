---
title: Date.ToText
---

# Date.ToText


Повертає текстове представлення значення дати.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Повертає текстове представлення `date`. Можна вказати необов’язковий параметр `record`, `options`, щоб зазначити додаткові властивості. `culture` використовується лише для застарілих робочих циклів. Параметр типу `record` може містити такі поля:

-   `Format`: значення `text`, яке вказує формат, який потрібно використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або вказати `Null`\-значення, дата форматуватиметься за стандартним значенням, визначеним за полем `Culture`.
-   `Culture` – якщо `Format` не має Null-значення, `Culture` керує деякими специфікаторами формату. Наприклад, для `"en-US"` параметр `"MMM"` виглядатиме так: `"Jan", "Feb", "Mar"...`. Тоді як для `"uk-UK"` параметр `"MMM"` виглядатиме так: `"січ", "лют", "бер"...`. Якщо параметру `Format` задано значення `null`, параметр `Culture` визначає стандартний формат. Якщо `Culture` опущено або має `Null`\-значення, використовується `Culture.Current`.

Щоб забезпечити підтримку застарілих робочих циклів, для параметрів `options` і `culture` також можна задавати текстові значення. Така сама поведінка, як у випадку, якщо `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Перетворення `#date(2010, 12, 31)` на значення `text`. *Результат може залежати від поточної культури.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Перетворення з використанням настроюваного формату та німецької культури.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Пошук у календарі Хиджра року, який відповідає 1 січня 2000 р. за григоріанським календарем.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
