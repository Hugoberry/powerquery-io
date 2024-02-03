---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Retorna uma função de comparador que usa regras do Ordinal para comparar valores.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Retorna uma função de comparador que usa regras Ordinais para comparar os valores <code>x</code> e <code>y</code> fornecidos.<br />      <br />      Uma função de comparador aceita dois argumentos e retorna -1, 0 ou 1 se o primeiro valor for menor, igual ou maior que o segundo.    


## Examples

### Example #1 
Usando regras do Ordinal, compare se “encyclopædia” e “encyclopaedia” são equivalentes. Observe que são equivalentes usando &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
