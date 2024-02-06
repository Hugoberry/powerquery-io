---
title: Stripe.Contents
---

# Stripe.Contents


Efetua uma chamada à API do Stripe, com a opção de limitar o número de chamadas à API.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Efetua uma chamada à API do Stripe em https://api.stripe.com/v1/<code>method</code>, com <code>query</code> de registo opcional transmitido como parâmetros adicionais e <code>pageLimit</code> opcional como um limite do número de pedidos da API. Os dados mais recentes são devolvidos em primeiro lugar. Se <code>pageLimit</code> não for especificado, todos os dados são devolvidos. É utilizada a versão do Stripe de 2015-10-16.


## Examples

### Example #1 
Devolve todos os dados de taxas
```powerquery
Stripe.Contents("taxas")
```

Result: 
```powerquery
Uma tabela com todos os dados de taxas para a conta do Stripe atual
```


### Example #2 
Devolve uma página de dados de taxas
```powerquery
Stripe.Contents("taxas", [], 1)
```

Result: 
```powerquery
Uma tabela com os dados de taxas mais recentes para a conta do Stripe atual
```



