---
title: Number.Round
---

# Number.Round


## Description

Devolve o número arredondado. É possível especificar o número de dígitos e o modo de arredondamento.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Devolve o resultado do arredondamento <code>number</code> para o número mais próximo. Se <code>number</code> for nulo, <code>Number.Round</code> devolve null.<br />      <br />      Por predefinição, <code>number</code> é arredondado para o número inteiro mais próximo e o critério de decisão efetua o arredondamento para o número par mais próximo (utilizando <code>RoundingMode.ToEven</code>, também conhecido como "arredondamento bancário").<br />      <br />      No entanto, estas predefinições podem ser substituídas através dos seguintes parâmetros opcionais.      <ul>        <li><code>digits</code>: Faz com que <code>number</code> seja arredondado para o número de dígitos decimais especificado.</li>        <li><code>roundingMode</code>: Substitui o comportamento do critério de decisão predefinido quando <code>number</code> estiver no ponto intermédio entre dois valores potencialmente arredondados      (consulte <code>RoundingMode.Type</code> para saber possíveis valores).</li>      </ul>


## Examples

### Example #1 
Arredondar 1,234 para o número inteiro mais próximo.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Arredondar 1,56 para o número inteiro mais próximo.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Arredondar 1,2345 para duas casas decimais.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Arredondar 1,2345 para três casas decimais (por excesso).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Arredondar 1,2345 para três casas decimais (por defeito).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
