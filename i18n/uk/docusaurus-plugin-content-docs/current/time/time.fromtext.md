---
title: Time.FromText
---

# Time.FromText


Створює час із місцевого, всесвітнього та настроюваного форматів часу.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Створює значення типу `time` із текстового представлення `text`. Можна вказати необов’язковий параметр `options` типу `record`, щоб зазначити додаткові властивості. Параметр типу `record` може містити такі поля:

-   `Format`: значення `text`, яке вказує формат, який потрібно використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або вказати `Null`\-значення, час аналізуватиметься за найкращим варіантом.
-   `Culture` – якщо `Format` не має Null-значення, `Culture` керує деякими специфікаторами формату. Зокрема в `"en-US"` `"tt"` передбачає значення `"AM" або "PM"`, а в `"ar-EG"` `"tt"` – `"ص" або "م"`. Якщо параметру `Format` задано значення `null`, параметр `Culture` визначає стандартний формат. Якщо `Culture` опущено або має `Null`\-значення, використовується `Culture.Current`.

Щоб забезпечити підтримку застарілих робочих циклів, для `options` також можна задавати текстове значення. Така сама поведінка, як у випадку, якщо `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Перетворити `"10:12:31am"` на значення часу.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Перетворіть значення `"1012"` на значення часу.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Перетворіть значення `"10"` на значення часу.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
