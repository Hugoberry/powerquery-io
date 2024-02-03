---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Realiza uma chamada para a API da Faixa, com opção de limitar o número de chamadas realizadas à API.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Realiza uma chamada para a API da Faixa em https://api.stripe.com/v1/<code>método</code>, com o registro eficaz <code>consultar</code> considerado como parâmetros adicionais e <code>pageLimit</code> eficaz como um limite ao número de solicitações à API. Os dados mais recentes são retornados primeiro. Se <code>pageLimit</code> não for especificado, todos os dados serão retornados. A Versão da Faixa 2015-10-16 é usada.


## Examples

### Example #1 
Retorna todos os dados de encargos
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Uma tabela com todos os dados de encargos para a conta atual da Faixa
```


### Example #2 
Retorna uma página de dados de encargos
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Uma tabela com os dados de encargos mais recentes para a conta atual da Faixa
```



