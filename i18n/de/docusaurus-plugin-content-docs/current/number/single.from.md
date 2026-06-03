---
title: Single.From
---

# Single.From


Erstellt einen Single-Wert aus dem angegebenen Wert.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Gibt einen Single-`number`\-Wert aus dem angegebenen `value`\-Wert zurück. Wenn der angegebene `value`\-Wert `null` ist, gibt `Single.From` `null` zurück. Wenn der angegebene `value`\-Wert `number` im Bereich von „Single“ liegt, wird „`value`“ zurückgegeben. Andernfalls wird ein Fehler zurückgegeben. Wenn der `value`\-Wert einen anderen Typ aufweist, wird er erst mit `Number.FromText` in einen `number`\-Wert konvertiert. Optional kann auch ein Element vom Typ „`culture`“ angegeben werden (Beispiel: „de-DE“).


## Examples

### Example #1
Ruft den Single-`number`\-Wert `"1,5"` ab.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
