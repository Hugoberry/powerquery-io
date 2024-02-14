---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Devolve uma função de comparação que utiliza regras Ordinais para comparar valores.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Devolve uma função de comparador que utiliza regras Ordinais para comparar os valores fornecidos <code>x</code> e <code>y</code>.<br />        <br />        Uma função de comparação aceita dois argumentos e devolve -1, 0 ou 1, com base no facto de o primeiro valor ser menor, igual ou superior ao segundo.    


## Examples

### Example #1 
Utilizando regras Ordinais, determine se &#34;encyclopædia&#34; e &#34;encyclopaedia&#34; são equivalentes. Tenha em conta que estes são equivalentes através da utilização de &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
