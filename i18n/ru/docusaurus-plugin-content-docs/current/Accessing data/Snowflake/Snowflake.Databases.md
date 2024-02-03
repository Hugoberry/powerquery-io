---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Импорт данных из хранилища вычислений Snowflake.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Возвращает таблицу со списком таблиц в <code>хранилище</code> вычислительных ресурсов Snowflake, расположенном на <code>сервере</code>. Необязательный параметр записи <code>options</code> можно указать для управления следующими параметрами:<ul><li><code>Role</code> — текстовое значения для использования в качестве имени роли для подключения.</li><li><code>CreateNavigationProperties</code> — логическое значение (true/false), указывающее, следует ли создавать свойства навигации по возвращенным значениям (значение по умолчанию — true)</li><li><code>ConnectionTimeout</code> — число секунд ожидания ответа по сети от Snowflake.</li><li><code>CommandTimeout</code> — число секунд ожидания выполнения запроса.</li></ul>    


## Examples

### Example #1 
Перечисление таблиц в хранилище Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



