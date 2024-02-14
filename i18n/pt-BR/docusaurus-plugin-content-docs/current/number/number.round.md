---
title: Number.Round
---

# Number.Round


Retorna o número arredondado. O número de dígitos e o modo de arredondamento podem ser especificados.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Retorna o resultado do arredondamento <code>number</code> até o número mais próximo. Se <code>number</code> for nulo, <code>Number.Round</code> retornará nulo.<br />      <br />      Por padrão, <code>number</code> é arredondado para o número inteiro mais próximo e os empates são quebrados arredondando para o número par mais próximo (usando <code>RoundingMode.ToEven</code>, também conhecido como "arredondamento bancário").<br />      <br />      No entanto, esses padrões podem ser substituídos pelos parâmetros opcionais a seguir.      <ul>        <li><code>digits</code>: faz com que <code>number</code> seja arredondado para o número de dígitos decimais especificado.</li>        <li><code>roundingMode</code>: substitui o comportamento de desempate padrão quando <code>number</code> está no ponto médio entre dois valores arredondados potenciais      (confira <code>RoundingMode.Type</code> para possíveis valores).</li>      </ul>


## Examples

### Example #1 
Arredonde 1,234 para o próximo número inteiro.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Arredonde 1,56 para o próximo número inteiro.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Arredonde 1,2345 para duas casas decimais.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Arredonde 1,2345 para três casas decimais (arredondamento para cima).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Arredonde 1,2345 para três casas decimais (arredondamento para baixo).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
