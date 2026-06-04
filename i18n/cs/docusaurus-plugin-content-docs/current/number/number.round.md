---
title: Number.Round
---

# Number.Round


Vrátí zaokrouhlené číslo. Lze zadat počet číslic a režim zaokrouhlení.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vrátí výsledek zaokrouhlení `number` na nejbližší číslo. Pokud `number` má hodnotu null, `Number.Round` vrátí hodnotu null.  
  
Ve výchozím nastavení se `number` zaokrouhlí na nejbližší celé číslo a vazby se rozdělí zaokrouhlením na nejbližší sudé číslo (pomocí `RoundingMode.ToEven`, který je známý také jako statistické zaokrouhlování“).  
  
Tyto výchozí hodnoty však mohou být přepsány pomocí následujících volitelných parametrů.

`digits`-   `number`: Způsobí, že se zaokrouhlí na zadaný počet desetinných míst.
`roundingMode`-   `number`: Přepíše výchozí chování při rušení vazeb, když je na středním bodu mezi dvěma možnými zaokrouhlenými hodnotami (možné hodnoty najdete u příkazu `RoundingMode.Type`).


## Examples

### Example #1
Zaokrouhlí číslo 1,234 na nejbližší celé číslo.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Zaokrouhlí číslo 1,56 na nejbližší celé číslo.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Zaokrouhlí číslo 1,2345 na číslo se dvěma desetinnými místy.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Zaokrouhlí číslo 1,2345 na číslo se třemi desetinnými místy (směrem nahoru).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Zaokrouhlí číslo 1,2345 na číslo se třemi desetinnými místy (směrem dolů.
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
