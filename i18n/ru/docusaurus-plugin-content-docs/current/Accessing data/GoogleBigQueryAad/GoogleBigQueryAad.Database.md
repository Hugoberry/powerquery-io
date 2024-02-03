---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Импорт данных из базы данных Google BigQuery с помощью Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Возвращает таблицу со списком доступных проектов в Google BigQuery с использованием Azure AD для <code>ID платежного проекта</code> . Необязательный параметр записи, <code>options</code>, может быть указан для управления следующими параметрами:      <ul>        <li><code>ConnectionTimeout</code>: продолжительность, определяющая время ожидания перед отказом от попытки установить соединение с сервером. Значение по умолчанию – значение времени ожидания соединения ODBC.</li>        <li><code>CommandTimeout</code>: Длительность, определяющая, как долго может выполняться запрос на стороне сервера, прежде чем он будет отменен.</li>        <li><code>UseStorageApi</code>: Указывает, следует ли использовать BigQuery Storage API для больших наборов результатов. Значение по умолчанию — ИСТИНА, чтобы использовать Storage API. Установите значение ЛОЖЬ, чтобы не использовать Storage API.</li>        <li><code>AudienceUri</code>: Это URI аудитории, который драйвер ODBC может использовать для своих запросов на обмен маркерами. Это поле должно быть полным URI. (i.e. //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread) где pool_id — глобально уникальное имя для идентификации пула рабочей силы.</li>      </ul>    Параметр записи указывается как [значение1 = значение1, значение2 = значение2...].    


## Examples

### Example #1 
Перечисление доступных проектов в Google BigQuery с помощью Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



