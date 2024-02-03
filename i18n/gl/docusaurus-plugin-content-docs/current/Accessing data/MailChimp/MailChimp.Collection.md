---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Devolve unha táboa con datos dun extremo de MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Realiza unha chamada á API de MailChimp e devolve o conxunto de datos resultante como unha táboa. Navega automaticamente por todos os resultados. Pódese usar o parámetro entityName opcional para extremos da API onde o extremo de raíz e o entityName principal non coincidan na resposta JSON.


## Examples

### Example #1 
Extrae unha táboa de datos do extremo de listas da API de MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Unha táboa con datos de lista.
```


### Example #2 
Extrae unha táboa de datos do extremo de cartafoles de campaña da API de MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Unha táboa con datos de cartafoles de campaña.
```



