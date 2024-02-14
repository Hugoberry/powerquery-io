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

Cria uma função de visualização baseada em <code>function</code> que pode ser processada numa visualização criada por <code>Table.View</code>.<br />O processador de <code>OnInvoke</code> <code>Table.View</code> pode ser utilizado para definir um processador para função de visualização.<br />Tal como acontece com os processadores para operações incorporadas, se não houver nenhum processador <code>OnInvoke</code> especificado, se o mesmo não processar a função de visualização, ou se for gerado um erro pelo processador, <code>function</code> será aplicado sobre a visualização.<br />Consulte a documentação publicada sobre o conector personalizado do Power Query para obter uma descrição mais completa de <code>Table.View</code> e das funções de visualização personalizadas.<br />



## Category
Table.Table construction
