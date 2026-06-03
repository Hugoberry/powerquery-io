---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Retorna um novo tipo de tabela com todas as chaves substituídas pela lista de chaves especificada.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Retorna um novo tipo de tabela com todas as chaves substituídas pela lista de chaves especificada.  
  
Cada chave é definida usando um registro no seguinte formato:

-   `Colunas`: uma lista dos nomes das colunas que definem a chave
-   `Primary`: `true` se a chave for a chave primária da tabela; caso contrário, `false`

A lista de chaves especificada é validada para garantir que não mais de uma chave primária seja definida e que todos os nomes de colunas de chave existam no tipo de tabela.


## Examples

### Example #1
Substitua as informações principais em um tipo de tabela.
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType,
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2
Limpe as principais informações definidas anteriormente em um tipo de tabela.
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
