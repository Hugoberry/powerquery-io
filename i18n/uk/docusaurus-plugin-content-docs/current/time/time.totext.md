---
title: Time.ToText
---

# Time.ToText


Повертає текстове представлення значення часу.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Повертає текстове представлення `time`. Можна вказати необов’язковий параметр `record`, `options`, щоб зазначити додаткові властивості. `culture` використовується лише для застарілих робочих циклів. Параметр типу `record` може містити такі поля:

-   `Format`: значення `text`, яке вказує формат, який потрібно використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або вказати `Null`\-значення, дата форматуватиметься за стандартним значенням, визначеним за полем `Culture`.
-   `Culture` – якщо `Format` не має Null-значення, `Culture` керує деякими специфікаторами формату. Зокрема в `"en-US"` `"tt"` передбачає значення `"AM" або "PM"`, а в `"ar-EG"` `"tt"` – `"ص" або "م"`. Якщо параметру `Format` задано значення `null`, параметр `Culture` визначає стандартний формат. Якщо `Culture` опущено або має `Null`\-значення, використовується `Culture.Current`.

Щоб забезпечити підтримку застарілих робочих циклів, для параметрів `options` і `culture` також можна задавати текстові значення. Така сама поведінка, як у випадку, якщо `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Перетворення `#time(01, 30, 25)` на значення `text`. *Результат може залежати від поточної культури.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Перетворення з використанням настроюваного формату та німецької культури.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Перетворення з використанням стандартного формату часу.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
