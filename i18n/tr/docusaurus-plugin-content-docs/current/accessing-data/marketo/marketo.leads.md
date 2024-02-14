---
title: Marketo.Leads
---

# Marketo.Leads


Müşteri adaylarına ilişkin ayrıntılı bilgilerin yer aldığı bir tablo döndürür.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

<code>url</code>/rest/v1/leads.json üzerinde yer alan Marketo REST API uç noktasına çağrıda bulunur. <code>leadIds</code> listesindeki tüm müşteri adayları döndürülür.


## Examples

### Example #1 
Üç müşteri adayına ilişkin ayrıntılı bilgileri çeker
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Tedarik sağlanan müşteri adaylarına ilişkin ayrıntılı bilgilerin yer aldığı bir tablo
```



