---
title: DateTime.FromText
---

# DateTime.FromText


Создает значение datetimezone из локальных и всеобщих форматов даты и времени.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Создает значение `datetime` из текстового представления `text`. При необходимости можно задать необязательный параметр `options` типа `record` для указания дополнительных свойств. В состав `record` могут входить следующие поля:

-   `Format`: значение `text`, указывающее используемый формат. Дополнительные сведения: https://go.microsoft.com/fwlink/?linkid=2180104 и https://go.microsoft.com/fwlink/?linkid=2180105. Если это поле пропущено или указано значение `null`, распознавание времени будет выполняться по принципу наилучшего возможного варианта.
-   `Culture`: Если `Format` не равен null, параметр `Culture` управляет некоторыми спецификаторами формата. Например, в `"en-US"` `"MMM"` — это `"Jan", "Feb", "Mar", ...`, тогда как в `"ru-RU"` `"MMM"` — это `"янв", "фев", "мар", ...`. Если `Format` имеет значение `null`, параметр `Culture` определяет используемый формат по умолчанию. Если значение `Culture` равно `null` или пропущено, используется `Culture.Current`.

Для поддержки прежних версий рабочих процессов `options` также может быть текстовым значением. Это ведет себя так же, как если бы `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Преобразование `"2010-12-31T01:30:00"` в значение даты и времени.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Преобразование `"2010-12-31T01:30:00.121212"` в значение даты и времени.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Преобразование `"2010-12-31T01:30:00"` в значение даты и времени.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Преобразование `"20101231T013000"` в значение даты и времени.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
