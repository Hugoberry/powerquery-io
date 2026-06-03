---
title: Currency.From
---

# Currency.From


Crea un valore di valuta dal valore specificato.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Restituisce un valore `valuta` dal dato `value`. Se il dato `value` è `null`, `Currency.From` restituisce `null`. Se il dato `value` è `numero` compreso nell'intervallo della valuta, la parte frazionaria di `value` viene arrotondata a 4 decimali e quindi viene restituito il valore. Se `value` è di qualsiasi altro tipo, verrà prima convertito in un `numero` usando `Number.FromText`. L'intervallo valido per la valuta è da `-922.337.203.685,477,5808` a `922.337.203.685.477,5807`. Per le modalità di arrotondamento disponibili, vedere `Number.Round`. L'impostazione predefinita è `RoundingMode.ToEven`. Può essere previsto anche un `culture` opzionale (per esempio, "it-IT").


## Examples

### Example #1
Ottiene il valore `currency` di `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Ottenere il `currency` valore di `"1.23455"` usando `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
