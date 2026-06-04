---
title: Marketo.Leads
---

# Marketo.Leads


Повертає таблицю з докладними відомостями про потенційних клієнтів.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Викликає кінцеву точку Marketo REST API за адресою `url`/rest/v1/leads.json. Повертаються всі потенційні клієнти в списку `leadIds`.


## Examples

### Example #1
Отримує докладні відомості про трьох потенційних клієнтів.
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Таблиця з докладними відомостями про вказаних потенційних клієнтів
```



