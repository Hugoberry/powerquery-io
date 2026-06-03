---
title: Double.From
---

# Double.From


Erstellt einen Double-Wert aus dem angegebenen Wert.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Gibt einen Double-`number`\-Wert aus dem angegebenen `value`\-Wert zurück. Wenn der angegebene `value`\-Wert `null` ist, gibt `Double.From` `null` zurück. Wenn der angegebene `value`\-Wert `number` im Bereich von „Double“ liegt, wird „`value`“ zurückgegeben. Andernfalls wird ein Fehler zurückgegeben. Wenn der `value`\-Wert einen anderen Typ aufweist, wird er erst mit `Number.FromText` in einen `number`\-Wert konvertiert. Optional kann auch ein Element vom Typ „`culture`“ angegeben werden (Beispiel: „de-DE“).


## Examples

### Example #1
Ruft den Double-`number`\-Wert `"4"` ab.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
