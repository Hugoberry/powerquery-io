---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Импорт данных из базы данных Google BigQuery с помощью Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу со списком доступных проектов в Google BigQuery с использованием Microsoft Entra ID для `ИД проекта выставления счетов`. Необязательный параметр записи (`options`) может быть указан для управления следующими параметрами:

-   `ConnectionTimeout`: время ожидания до отмены попытки подключения к серверу. Значение по умолчанию — значение времени ожидания подключения ODBC.
-   `CommandTimeout`: длительность, определяющая время выполнения запроса на стороне сервера до его отмены.
-   `UseStorageApi`: указывает, следует ли использовать API хранилища BigQuery для больших наборов результатов. Значение по умолчанию — true, чтобы использовать API хранилища. Настройте значение false, чтобы не использовать API хранилища
-   `AudienceUri`: это URI аудитории, который драйвер ODBC может использовать для своих запросов на обмен маркерами. Это поле должно быть полным URI (например, //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), где pool\_id — глобально уникальное имя для идентификации пула рабочих ресурсов.

Параметр записи указывается как \[параметр1 = значение1, параметр2 = значение2...\].


## Examples

### Example #1
Перечисление доступных проектов в Google BigQuery с помощью Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



