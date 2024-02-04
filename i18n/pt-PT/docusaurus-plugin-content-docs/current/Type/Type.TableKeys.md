---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Devolve a lista de chaves possivelmente vazia para o tipo de tabela especificado.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Devolve a lista de chaves possivelmente vazia para o tipo de tabela especificado.<br />    <br />    Cada chave é definida através de um registo com o seguinte formato:    <ul>      <li>        <code>Colunas</code>: uma lista dos nomes das colunas que definem a chave      </li>      <li>        <code>Primária</code>: <code>verdadeiro</code> se a chave for a chave primária da tabela; caso contrário, <code>falso</code>      </li>    </ul>    


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
