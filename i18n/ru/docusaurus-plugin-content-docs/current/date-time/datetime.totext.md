---
title: DateTime.ToText
---

# DateTime.ToText


Возвращает текстовое представление значения datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Возвращает текстовое представление `dateTime`. Необязательный параметр `record`, `options` может быть указан для задания дополнительных свойств. `culture` используется только для устаревших рабочих процессов. В состав `record` могут входить следующие поля:

-   `Format`: значение `text`, указывающее используемый формат. Для получения более дополнительных сведений перейдите по ссылкам https://go.microsoft.com/fwlink/?linkid=2180104 и https://go.microsoft.com/fwlink/?linkid=2180105. Если опустить это поле или указать значение `null`, дата будет отформатирована с использованием параметров по умолчанию, определенных параметром `Culture`.
-   `Culture`: Если `Format` не равен null, параметр `Culture` управляет некоторыми спецификаторами формата. Например, в `"en-US"` `"MMM"` — это `"Jan", "Feb", "Mar", ...`, тогда как в `"ru-RU"` `"MMM"` — это `"янв", "фев", "мар", ...`. Если `Format` имеет значение `null`, параметр `Culture` определяет используемый формат по умолчанию. Если значение `Culture` равно `null` или пропущено, используется `Culture.Current`.

Для поддержки прежних версий рабочих процессов `options` и `culture` также могут быть текстовыми значениями. Это ведет себя так же, как если бы `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Преобразование `#datetime(2010, 12, 31, 01, 30, 25)` в значение `text`. *Результат может зависеть от текущего языка и региональных параметров.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Преобразование с помощью пользовательского формата и м формате и немецкого языка и региональных параметров.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Преобразование с помощью шаблона ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
