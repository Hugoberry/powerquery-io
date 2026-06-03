---
title: Time.FromText
---

# Time.FromText


Создает значение времени с применением локальных, универсальных и пользовательских форматов времени.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Создает значение `time` из текстового представления `text`. При необходимости можно задать необязательный параметр `options` типа `record` для указания дополнительных свойств. В состав `record` могут входить следующие поля:

-   `Format`: значение `text`, указывающее используемый формат. Дополнительные сведения: https://go.microsoft.com/fwlink/?linkid=2180104 и https://go.microsoft.com/fwlink/?linkid=2180105. Если пропустить это поле или указать `NULL`, распознавание времени будет выполняться по принципу наилучшего возможного варианта.
-   `Culture`: Если `Format` не равен null, параметр `Culture` управляет некоторыми спецификаторами формата. Например, при использовании `"en-US"` значение `"tt"` представляется как `"AM" или "PM"`, тогда как для `"ar-EG"` значение `"tt"` выглядит как `"ص" или "م"`. Если `Format` имеет значение `null`, параметр `Culture` определяет используемый формат по умолчанию. Если значение `Culture` равно `null` или пропущено, используется `Culture.Current`.

Для поддержки прежних версий рабочих процессов `options` также может быть текстовым значением. Это ведет себя так же, как если бы `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Преобразовать `"10:12:31am"` в значение времени.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Преобразование `"1012"` в значение Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Преобразование `"10"` в значение Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
