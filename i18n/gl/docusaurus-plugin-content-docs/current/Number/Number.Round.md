---
title: Number.Round
---

# Number.Round


## Description

Devolve o número arredondado. O número de díxitos e o modo de arredondamento pódese especificar.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Devolve o resultado de arredondar <code>number</code> ao número máis próximo. Se <code>number</code> é nulo, <code>Number.Round</code> devolve nulo. <br />      <br />      Por defecto, <code>number</code> arredóndase ao enteiro máis próximo, e os valores equivalentes québranse arredondando ao número par máis próximo (mediante <code>RoundingMode.ToEven</code>, tamén coñecido como "arredondamento do banqueiro"). <br />      <br />      Non obstante, se pode invalidar estes valores predefinidos mediante os seguintes parámetros opcionais.       <ul>        <li><code>digits</code>: causa que <code>number</code> se arredondase ao número especificado de díxitos decimais. </li>        <li><code>roundingMode</code>: anula o comportamento de valor equivalente predefinido cando <code>number</code> é do punto medio entre dous valores potencialmente arredondados      (consulte <code>RoundingMode.Type</code> para posibles valores). </li>      </ul>


## Examples

### Example #1 
Arredondar 1,234 ao enteiro máis próximo.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Arredondar 1,56 ao enteiro máis próximo.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Arredondar 1,2345 a dúas posicións decimais.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Arredondar 1,2345 a tres posicións decimais (arredondamento para arriba).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Arredondar 1,2345 a tres posicións decimais (arredondamento para abaixo).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
