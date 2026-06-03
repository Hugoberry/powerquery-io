---
title: Date.ToText
---

# Date.ToText


Возвращает текстовое представление значения даты.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Возвращает текстовое представление `date`. Необязательный параметр `record`, `options` может быть указан для задания дополнительных свойств. `culture` используется только для устаревших рабочих процессов. В состав `record` могут входить следующие поля:

-   `Format`: значение `text`, указывающее используемый формат. Для получения более дополнительных сведений перейдите по ссылкам https://go.microsoft.com/fwlink/?linkid=2180104 и https://go.microsoft.com/fwlink/?linkid=2180105. Если опустить это поле или указать значение `null`, дата будет отформатирована с использованием параметров по умолчанию, определенных параметром `Culture`.
-   `Culture`: Если `Format` не равен null, параметр `Culture` управляет некоторыми спецификаторами формата. Например, в `"en-US"` `"MMM"` — это `"Jan", "Feb", "Mar", ...`, тогда как в `"ru-RU"` `"MMM"` — это `"янв", "фев", "мар", ...`. Если `Format` имеет значение `null`, параметр `Culture` определяет используемый формат по умолчанию. Если значение `Culture` равно `null` или пропущено, используется `Culture.Current`.

Для поддержки прежних версий рабочих процессов `options` и `culture` также могут быть текстовыми значениями. Это ведет себя так же, как если бы `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Преобразование `#date(2010, 12, 31)` в значение `text`. *Результат может зависеть от текущего языка и региональных параметров.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Преобразование с помощью пользовательского формата и м формате и немецкого языка и региональных параметров.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Поиск года в календаре Хиджра, который соответствует 1 января 2000 года в григорианском календаре.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
