---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Retorna a lista de chaves possivelmente vazias do tipo de tabela especificado.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Retorna a lista de chaves possivelmente vazia para o tipo de tabela fornecido.<br />    <br />    Cada chave é definida usando um registro no seguinte formato:    <ul>      <li>        <code>Colunas</code>: uma lista dos nomes das colunas que definem a chave      </li>      <li>        <code>Primary</code>: <code>true</code> se a chave for a chave primária da tabela; caso contrário, <code>false</code>      </li>    </ul>    


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
