---
title: Stripe.Method
---

# Stripe.Method


Realiza uma chamada à API da Faixa.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Realiza uma chamada para a API da faixa em https://api.stripe.com/v1/<code>método</code>, com registro <code>additionalParameters</code> considerado como parâmetros aditcionais e lista <code>ColumnNames</code> de nomes de coluna esperados. A Versão da Faixa 2015-10-16 é usada.


## Examples

### Example #1 
Retorna uma tabela de eventos criados após 1º de novembro de 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Uma tabeta com os eventos especificados para a conta atual da Faixa
```


### Example #2 
Retorna uma tabela com todos os SKUs
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Uma tabela com todos os SKUs para a conta atual da Faixa
```



