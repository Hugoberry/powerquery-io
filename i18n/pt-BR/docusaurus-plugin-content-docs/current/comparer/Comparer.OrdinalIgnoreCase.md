---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Retorna a função do comparador sem diferenciação de maiúsculas e minúsculas que utiliza as regras Ordinais para comparar valores.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Retorna uma função comparador sem diferenciação de maiúsculas e minúsculas que usa regras Ordinais para comparar os valores <code>x</code> e <code>y</code> fornecidos.<br />        <br />        Uma função de comparador aceita dois argumentos e retorna -1, 0 ou 1 se o primeiro valor for menor, igual ou maior que o segundo.    


## Examples

### Example #1 
Usando as regras Ordinais sem diferenciação de maiúsculas e minúsculas, compare &#34;Abc&#34; com &#34;abc&#34;. Observe que &#34;Abc&#34; é menor do que &#34;abc&#34; usando o &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
