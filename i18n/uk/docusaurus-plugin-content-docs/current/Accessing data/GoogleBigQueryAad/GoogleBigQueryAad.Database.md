---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Імпорт даних із бази даних Google BigQuery за допомогою Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Повертає таблицю зі списком доступних проектів у Google BigQuery за ідентифікатором проєкту виставлення рахунків <code>Billing Project ID</code> за допомогою Azure AD. Додатковий параметр запису <code>options</code> дає змогу керувати такими параметрами:      <ul>        <li><code>ConnectionTimeout</code> – тривалість, що слугує, щоб керувати часом очікування, після якого переривається спроба підключитися до сервера. Стандартне значення дорівнює часу очікування на підключення ODBC.</li>        <li><code>CommandTimeout</code> – тривалість, що дає змогу контролювати дозволений час виконання запиту на сервері, після якого запит скасовується.</li>        <li><code>UseStorageApi</code> – дає змогу вказати, чи слід використовувати API сховища BigQuery для великих наборів результатів. Стандартне значення для застосування – true. Щоб не використовувати API сховища, установіть значення false.</li>        <li><code>AudienceUri</code> – це універсальний ідентифікатор ресурсу аудиторії, який драйвер ODBC може застосовувати для запитів на обмін маркерами. У цьому полі має бути повний універсальний ідентифікатор ресурсу, як-от //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread, де pool_id – це глобально унікальне ім’я, за яким можна визначити пул робочої сили.</li>      </ul>    Параметр запису вказується в такому форматі: [параметр1 = значення1, параметр2 = значення2…].    


## Examples

### Example #1 
Створити список доступних проектів у Google BigQuery через Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



