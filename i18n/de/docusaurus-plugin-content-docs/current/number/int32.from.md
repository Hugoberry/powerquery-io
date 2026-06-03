---
title: Int32.From
---

# Int32.From


Erstellt einen ganzzahligen 32-Bit-Wert aus dem angegebenen Wert.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Gibt einen ganzzahligen 32-Bit-`number`\-Wert aus dem angegebenen `value`\-Wert zurück. Wenn der angegebene `value`\-Wert `null` ist, gibt `Int32.From` `null` zurück. Wenn der angegebene `value`\-Wert ein `number`\-Wert aus dem 32-Bit-Ganzzahlbereich ohne Bruchteil ist, wird `value` zurückgegeben. Wenn ein Bruchteil vorhanden ist, wird der Wert mit dem angegebenen Rundungsmodus gerundet. Der Standardrundungsmodus ist `RoundingMode.ToEven`. Wenn der `value`\-Wert einen anderen Typ aufweist, wird er erst mit `Number.FromText` in einen `number`\-Wert konvertiert. Die verfügbaren Rundungsmodi finden Sie unter `Number.Round`. Optional kann auch ein Element vom Typ „`culture`“ angegeben werden (Beispiel: „de-DE“).


## Examples

### Example #1
Ruft den ganzzahligen 32-Bit-`number`\-Wert `"4"` ab.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Ruft den ganzzahligen 32-Bit-`number`\-Wert `"4,5"` mithilfe von `RoundingMode.AwayFromZero` ab.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
