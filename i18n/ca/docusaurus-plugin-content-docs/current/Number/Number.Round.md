---
title: Number.Round
---

# Number.Round


## Description

Retorna el nombre arrodonit. Es pot especificar el nombre de dígits i el mode d&#39;arrodoniment.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Retorna els resultats de l'arrodoniment de <code>number</code> al nombre més proper. Si <code>number</code> és nul, <code>Number.Round</code> retorna un valor nul.<br />      <br />      De manera predeterminada, <code>number</code> s'arrodoneix a l'enter més proper, i els vincles es trenquen mitjançant l'arrodoniment al nombre parell més proper (amb <code>RoundingMode.ToEven</code>, també conegut com a "arrodoniment bancari").<br />      <br />      No obstant això, aquests valors predeterminats es poden substituir mitjançant els paràmetres opcionals que s'indiquen a continuació.      <ul>        <li><code>digits</code>: fa que <code>number</code> s'arrodoneixi al número especificat de dígits decimals.</li>        <li><code>roundingMode</code>: substitueix el comportament de trencament de vincles predeterminat quan <code>number</code> se situa al punt intermedi entre dos valors arrodonits potencials      (consulteu <code>RoundingMode.Type</code> per veure els valors possibles).</li>      </ul>


## Examples

### Example #1 
Arrodoneix 1,234 a l&#39;enter més proper.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Arrodoneix 1,56 a l&#39;enter més proper.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Arrodoneix 1,2345 a dues posicions decimals.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Arrodoneix 1,2345 a tres posicions decimals (arrodoniment cap amunt).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Arrodoneix 1,2345 a tres posicions decimals (arrodoniment cap avall).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
