---
title: Table.FromValue
---

# Table.FromValue


## Description

Cria uma tabela com uma coluna a partir dos valores fornecidos.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Cria uma tabela com uma coluna contendo o valor fornecido ou a lista de valores, <code>value</code>. Um parâmetro opcional de registro, <code>options</code>, especificado para controlar as seguintes opções:    <ul>    <li> <code>DefaultColumnName</code> : O nome da coluna usada ao criar uma tabela a partir de uma lista ou valor escalar.</li>    </ul>  


## Examples

### Example #1 
Crie uma tabela a partir do valor 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Criar uma tabela a partir da lista.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3 
Criar uma coluna do valor 1, com um nome de coluna personalizado.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
