---
title: Type.TableKeys
---

# Type.TableKeys


Devolve a lista de chaves possivelmente vazia para o tipo de tabela especificado.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Devolve a lista de chaves possivelmente vazia para o tipo de tabela especificado.  
  
Cada chave é definida através de um registo com o seguinte formato:

-   `Colunas`: uma lista dos nomes das colunas que definem a chave
-   `Primária`: `verdadeiro` se a chave for a chave primária da tabela; caso contrário, `falso`


## Examples

### Example #1
Devolva as informações de chave para um tipo de tabela.
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
