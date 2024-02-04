---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Cria uma função que pode ser intercetada por um processador definido numa vista (através de Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Cria uma função de visualização baseada em <code>function</code> que pode ser processada numa visualização criada por <code>Binary.View</code>.<br />O processador de <code>OnInvoke</code> <code>Binary.View</code> pode ser utilizado para definir um processador para função de visualização.<br />Tal como acontece com os processadores para operações incorporadas, se não houver nenhum processador <code>OnInvoke</code> especificado, se o mesmo não processar a função de visualização, ou se for gerado um erro pelo processador, <code>function</code> será aplicado sobre a visualização.<br />Consulte a documentação publicada sobre o conector personalizado do Power Query para obter uma descrição mais completa de <code>Binary.View</code> e das funções de visualização personalizadas.<br />



## Category
Binary
