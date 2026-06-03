---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Создание datetimezone из локальных, универсальных и пользовательских форматов datetimezone.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Создает значение `datetimezone` из текстового представления, `text`. При необходимости можно задать необязательный параметр `options` типа `record` для указания дополнительных свойств. В состав `record` могут входить следующие поля:

-   `Format`: значение `text`, указывающее используемый формат. Дополнительные сведения: https://go.microsoft.com/fwlink/?linkid=2180104 и https://go.microsoft.com/fwlink/?linkid=2180105. Если это поле пропущено или указано значение `null`, распознавание времени будет выполняться по принципу наилучшего возможного варианта.
-   `Culture`: Если `Format` не равен null, параметр `Culture` управляет некоторыми спецификаторами формата. Например, в `"en-US"` `"MMM"` — это `"Jan", "Feb", "Mar", ...`, тогда как в `"ru-RU"` `"MMM"` — это `"янв", "фев", "мар", ...`. Если `Format` имеет значение `null`, параметр `Culture` определяет используемый формат по умолчанию. Если значение `Culture` равно `null` или пропущено, используется `Culture.Current`.

Для поддержки прежних версий рабочих процессов `options` также может быть текстовым значением. Это ведет себя так же, как если бы `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Преобразование `"2010-12-31T01:30:00-08:00"` в значение `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Преобразование с помощью пользовательского формата и м формате и немецкого языка и региональных параметров.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Преобразование с помощью ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
