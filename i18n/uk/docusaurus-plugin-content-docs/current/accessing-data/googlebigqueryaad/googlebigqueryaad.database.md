---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Імпорт даних із бази даних Google BigQuery за допомогою Ідентифікатора Microsoft Entra


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Повертає таблицю зі списком доступних проєктів у Google BigQuery за допомогою Ідентифікатора Microsoft Entra для `ідентифікатора проєкту для виставлення рахунків` . Можна вказати необов’язковий параметр запису `options`, щоб керувати вказаними нижче параметрами.

-   `ConnectionTimeout` – параметр тривалості, який визначає, як довго слід очікувати на підключення до сервера, перш ніж перервати спробу. Стандартне значення – час очікування підключення в ODBC.
-   `CommandTimeout` – параметр тривалості, який визначає, як довго може виконуватися запит на боці сервера, перш ніж його буде скасовано.
-   `UseStorageApi` – указує, чи слід використовувати API сховища BigQuery для великих наборів результатів. Стандартне значення – true, якщо API сховища потрібно використовувати. Установіть значення false, якщо API сховища не потрібно використовувати
-   `AudienceUri` – універсальний ідентифікатор ресурсу (URI), який драйвер ODBC може використовувати для запитів на обмін маркерами. У цьому полі має бути повний URI (наприклад, //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), де pool\_id – це глобально унікальне ім’я, за допомогою якого можна визначити пул працівників.

Параметр запису вказується так: \[параметр1 = значення1, параметр2 = значення2…\].


## Examples

### Example #1
Створіть список доступних проектів у Google BigQuery за допомогою Ідентифікатора Microsoft Entra
```powerquery
GoogleBigQueryAad.Database()
```



