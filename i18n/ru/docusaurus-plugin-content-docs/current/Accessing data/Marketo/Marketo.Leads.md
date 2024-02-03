---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Возвращает таблицу с ведущими сведениями.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Вызывает конечную точку Marketo REST API по адресу <code>url</code>/rest/v1/leads.json. Возвращаются все ведущие элементы в списке <code>leadIds</code>.


## Examples

### Example #1 
Извлекает сведения для трех ведущих элементов.
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Таблица со сведениями для предоставленных ведущих элементов
```



