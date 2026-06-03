---
title: Snowflake.Databases
---

# Snowflake.Databases


Импорт данных из хранилища вычислений Snowflake.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу со списком таблиц в `хранилище` вычислительных ресурсов Snowflake, расположенном на `сервере`. Необязательный параметр записи `options` можно указать для управления следующими параметрами:

-   `Role` — текстовое значения для использования в качестве имени роли для подключения.
-   `CreateNavigationProperties` — логическое значение (true/false), указывающее, следует ли создавать свойства навигации по возвращенным значениям (значение по умолчанию — true)
-   `ConnectionTimeout` — число секунд ожидания ответа по сети от Snowflake.
-   `CommandTimeout` — число секунд ожидания выполнения запроса.


## Examples

### Example #1
Перечисление таблиц в хранилище Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



