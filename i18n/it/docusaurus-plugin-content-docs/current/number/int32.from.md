---
title: Int32.From
---

# Int32.From


Crea un valore Integer a 32 bit dal valore specificato.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Restituisce un valore `numerico` integer a 32 bit del dato `value`. Se il dato `value` è `null`, `Int32.From` restituisce `null`. Se il dato `value` è un `numero` all'interno dell'intervallo di un integer a 32 bit senza una parte frazionaria, viene restituito `value`. Se ha una parte frazionaria, il numero viene arrotondato con la modalità di arrotondamento specificata. La modalità di arrotondamento predefinita è `RoundingMode.ToEven`. Se `value` è di qualsiasi altro tipo, verrà prima convertito in `numero` usando `Number.FromText`. Per le modalità di arrotondamento disponibili, vedere `Number.Round`. È anche possibile specificare un valore `culture` opzionale (per esempio, "en-US").


## Examples

### Example #1
Ottenere il valore `number` Integer a 32 bit di `"4"`.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Ottenere il valore `number` Integer a 32 bit di `"4.5"` usando `RoundingMode.AwayFromZero`.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
