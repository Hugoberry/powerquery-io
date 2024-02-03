---
title: Number.Round
---

# Number.Round


## Description

Vrátí zaokrouhlené číslo. Lze zadat počet číslic a režim zaokrouhlení.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Vrátí výsledek zaokrouhlení <code>number</code> na nejbližší číslo. Pokud <code>number</code> má hodnotu null, <code>Number.Round</code> vrátí hodnotu null.<br />      <br />      Ve výchozím nastavení se <code>number</code> zaokrouhlí na nejbližší celé číslo a vazby se rozdělí zaokrouhlením na nejbližší sudé číslo (pomocí <code>RoundingMode.ToEven</code>, který je známý také jako statistické zaokrouhlování“).<br />      <br />      Tyto výchozí hodnoty však mohou být přepsány pomocí následujících volitelných parametrů.      <ul><code>digits</code>        <li><code>number</code>: Způsobí, že se  zaokrouhlí na zadaný počet desetinných míst.</li><code>roundingMode</code>        <li><code>number</code>: Přepíše výchozí chování při rušení vazeb, když je  na středním bodu mezi dvěma možnými zaokrouhlenými hodnotami      (možné hodnoty najdete u příkazu <code>RoundingMode.Type</code>).</li>      </ul>


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
