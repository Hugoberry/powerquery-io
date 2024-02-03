---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Devolve o enteiro maior seguinte. Pode especificarse o número de díxitos.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Devolve o resultado de arredondar <code>number</code> para arriba ata o seguinte enteiro maior. Se <code>number</code> é nulo, esta función devolve nulo.    Se se especifica <code>digits</code>, <code>number</code> arredóndase ao número de díxitos decimais especificados.  


## Examples

### Example #1 
Arredondar 1,234 para arriba ao enteiro.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Arredondar 1,999 para arriba ao enteiro.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Arredondar 1,234 para arriba a dous decimais.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
