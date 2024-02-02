---
title: Number.Round
---

# Number.Round


## Description

Retourne le nombre arrondi. Le nombre de chiffres et le mode d&#39;arrondi peut être spécifié.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Retourne le résultat de l’arrondi <code>number</code> au nombre le plus proche. Si <code>number</code> a la valeur null, <code>Number.Round</code> retourne null. <br />      <br /> Par défaut, <code>number</code> est arrondi à l’entier le plus proche, et les liens sont rompus en arrondissant au nombre pair le plus proche (à l’aide de <code>RoundingMode.ToEven</code>, également appelé "arrondi bancaire"). <br />      <br />      Toutefois, ces valeurs par défaut peuvent être remplacées par les paramètres facultatifs suivants.       <ul>        <li><code>digits</code>Causes<code>number</code>: entraîne l’arrondissement au nombre spécifié de chiffres décimaux. </li>        <li><code>roundingMode</code>: remplace le comportement de liaison par défaut lorsque <code>number</code> est au niveau du milieu entre deux valeurs arrondies potentielles      (référez-vous à<code>RoundingMode.Type</code> pour connaître les valeurs possibles). </li>      </ul>


## Examples

### Example #1 
Arrondit 1,234 à l&#39;entier le plus proche.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Arrondit 1,56 à l&#39;entier le plus proche.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Arrondit 1,2345 à deux décimales.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Arrondit 1,2345 à trois décimales (arrondi vers le chiffre supérieur).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Arrondit 1,2345 à trois décimales (arrondi vers le chiffre inférieur).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
