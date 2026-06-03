---
title: Byte.From
---

# Byte.From


Erstellt einen ganzzahligen 8-Bit-Wert aus dem angegebenen Wert.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Gibt einen ganzzahligen 8-Bit-`number`\-Wert aus dem angegebenen `value`\-Wert zurück. Wenn der angegebene `value`\-Wert `null` ist, gibt `Byte.From` `null` zurück. Wenn der angegebene `value`\-Wert ein `number`\-Wert aus dem 8-Bit-Ganzzahlbereich ohne Bruchteil ist, wird „`value`“ zurückgegeben. Wenn ein Bruchteil vorhanden ist, wird der Wert mit dem angegebenen Rundungsmodus gerundet. Der Standardrundungsmodus ist `RoundingMode.ToEven`. Wenn „`value`“ einen anderen Typ aufweist, wird der Wert erst mit `Number.FromText` in einen `number`\-Wert konvertiert. Die verfügbaren Rundungsmodi finden Sie unter `Number.Round`. Optional kann auch ein Element vom Typ „`culture`“ angegeben werden (Beispiel: „de-DE“).


## Examples

### Example #1
Ruft den ganzzahligen 8-Bit-`number`\-Wert `"4"` ab.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Ruft den ganzzahligen 8-Bit-`number`\-Wert `"4,5"` mithilfe von `RoundingMode.AwayFromZero` ab.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
