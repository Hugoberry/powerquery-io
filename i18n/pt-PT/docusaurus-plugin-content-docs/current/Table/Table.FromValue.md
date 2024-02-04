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

Cria uma tabela com uma coluna que contém o valor ou a lista de valores fornecida, <code>value</code>. Um parâmetro de registo opcional, <code>options</code>, pode ser especificado para controlar as seguintes opções:     <ul>    <li> <code>DefaultColumnName</code> : o nome da coluna utilizado ao construir uma tabela a partir de uma lista ou valor escalar. </li>    </ul>.    


## Examples

### Example #1 
Criar uma tabela a partir do valor 1.
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
Crie uma tabela a partir do valor 1, com um nome de coluna personalizado.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
