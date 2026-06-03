---
title: Type.TableKeys
---

# Type.TableKeys


Retorna a lista de chaves possivelmente vazias do tipo de tabela especificado.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Retorna a lista de chaves possivelmente vazia para o tipo de tabela fornecido.  
  
Cada chave é definida usando um registro no seguinte formato:

-   `Colunas`: uma lista dos nomes das colunas que definem a chave
-   `Primary`: `true` se a chave for a chave primária da tabela; caso contrário, `false`


## Examples

### Example #1
Retorne as principais informações de um tipo de tabela.
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
