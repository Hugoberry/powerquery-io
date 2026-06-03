---
title: Number.Round
---

# Number.Round


Returnerar det avrundade talet. Antalet siffror och avrundningsläget kan anges.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerar resultatet av avrundning av `number` till närmsta tal. Om `number` är null, `Number. Round` returneras null.  
  
Som standard avrundas `number` till närmsta heltal och bindningarna bryts genom avrundning till närmaste jämna tal (med `att RoundingMode.ToEven`, även känt som "banker's rounding").  
  
Dessa standardvärden kan dock åsidosättas via följande valfria parametrar.

-   `digits`: Orsakar att `number` avrundas till det angivna antalet decimaler.
-   `roundingMode`: Åsidosätter standardbeteendet för återkoppling när `number` är på mitt punkten mellan två möjliga avrundade värden (Mer information finns under `RoundingMode.Type` för möjliga värden).


## Examples

### Example #1
Avrunda 1,234 till närmaste heltal.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Avrunda 1,56 till närmaste heltal.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Avrunda 1,2345 till två decimaler.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Avrunda 1,2345 till tre decimaler (avrunda uppåt).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Avrunda 1,2345 till tre decimaler (avrunda nedåt).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
