---
title: Number.Round
---

# Number.Round


Restituisce il numero arrotondato. È possibile specificare il numero di cifre e la modalità di arrotondamento.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Restituisce il risultato dell'arrotondamento di <code>number</code> al numero più vicino. Se <code>number</code> è Null, <code>Number.Round</code> restituisce Null.<br />      <br />      Per impostazione predefinita, <code>number</code> viene arrotondato all'intero più vicino e i legami vengono interrotti mediante l'arrotondamento al numero pari più vicino con <code>RoundingMode.ToEven</code>.<br />      <br />      È tuttavia possibile eseguire l'override di queste impostazioni predefinite con i parametri facoltativi seguenti.      <ul>        <li><code>digits</code>: fa in modo che <code>number</code> venga arrotondato al numero specificato di cifre decimali.</li>        <li><code>roundingMode</code>: esegue l'override del comportamento predefinito di interruzione dei legami quando <code>number</code> si trova in corrispondenza del punto intermedio tra due potenziali valori arrotondati.      (Per i possibili valori, vedere <code>RoundingMode.Type</code>).</li>      </ul>


## Examples

### Example #1 
Arrotondare 1,234 all&#39;intero più vicino.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Arrotondare 1,56 all&#39;intero più vicino.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Arrotondare 1,2345 a due posizioni decimali.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Arrotondare 1,2345 a tre posizioni decimali (arrotondamento per eccesso).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Arrotondare 1,2345 a tre posizioni decimali (arrotondamento per difetto).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
