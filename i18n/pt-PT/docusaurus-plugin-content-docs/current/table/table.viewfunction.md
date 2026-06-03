---
title: Table.ViewFunction
---

# Table.ViewFunction


Cria uma função que pode ser intercionada por um processador definido numa visualização (através de Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Cria uma função de visualização baseada em `function` que pode ser processada numa visualização criada por `Table.View`.

O processador de `OnInvoke` `Table.View` pode ser utilizado para definir um processador para função de visualização.

Tal como acontece com os processadores para operações incorporadas, se não houver nenhum processador `OnInvoke` especificado, se o mesmo não processar a função de visualização, ou se for gerado um erro pelo processador, `function` será aplicado sobre a visualização.

Consulte a documentação publicada sobre o conector personalizado do Power Query para obter uma descrição mais completa de `Table.View` e das funções de visualização personalizadas.



## Category
Table.Table construction
