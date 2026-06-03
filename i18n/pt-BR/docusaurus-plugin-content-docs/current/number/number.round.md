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

Retorna o resultado do arredondamento `number` até o número mais próximo. Se `number` for nulo, `Number.Round` retornará nulo.  
  
Por padrão, `number` é arredondado para o número inteiro mais próximo e os empates são quebrados arredondando para o número par mais próximo (usando `RoundingMode.ToEven`, também conhecido como "arredondamento bancário").  
  
No entanto, esses padrões podem ser substituídos pelos parâmetros opcionais a seguir.

-   `digits`: faz com que `number` seja arredondado para o número de dígitos decimais especificado.
-   `roundingMode`: substitui o comportamento de desempate padrão quando `number` está no ponto médio entre dois valores arredondados potenciais (confira `RoundingMode.Type` para possíveis valores).


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
