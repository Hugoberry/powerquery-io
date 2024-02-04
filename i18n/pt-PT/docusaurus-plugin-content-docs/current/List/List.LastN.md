---
title: List.LastN
---

# List.LastN


## Description

Devolve o último valor da lista.  Opcionalmente, é possível especificar quantos valores devem ser devolvidos ou uma condição de qualificação.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Devolve o último item da lista <code>list</code>. Se a lista estiver vazia, é emitida uma exceção. Esta função utiliza um parâmetro opcional, <code>countOrCondition</code>, para suportar o agrupamento de vários itens ou itens de filtragem. <code>countOrCondition</code> pode ser especificado de três formas: <ul>  <li>Se for especificado um número, são devolvidos tantos itens quanto esse número. </li>  <li>Se for especificada uma condição, são devolvidos todos os itens que satisfizerem a condição inicialmente, a começar pelo fim da lista. Quando um item não satisfizer a condição, não serão considerados mais itens. </li>  <li>Se este parâmetro for nulo, será devolvido o último item existente na lista.</li> </ul>


## Examples

### Example #1 
Determinar o último valor na lista \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Determinar os últimos valores existentes na lista \{3, 4, 5, -1, 7, 8, 2} que são maiores que 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
