---
title: Stripe.Method
---

# Stripe.Method


Efetua uma chamada à API do Stripe.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

Efetua uma chamada à API do Stripe em https://api.stripe.com/v1/<code>method</code>, com <code>additionalParameters</code> de registo transmitido como parâmetros adicionais e lista <code>ColumnNames</code> de nomes de colunas esperados. É utilizada a versão do Stripe de 2015-10-16.


## Examples

### Example #1 
Devolve uma tabela com eventos criados após 1 de novembro de 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Uma tabela com todos os eventos especificados para a conta do Stripe atual
```


### Example #2 
Devolve uma tabela com todos os SKUs
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Uma tabela com todos os SKUs para a conta do Stripe atual
```



