---
title: Percentage.From
---

# Percentage.From


Gibt einen Prozentwert aus dem angegebenen Wert zurück.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Gibt einen `Prozentwert` aus dem angegebenen `value`\-Wert zurück. Wenn der angegebene `value`\-Wert `NULL` lautet, gibt `Percentage.From` den Wert `NULL` zurück. Wenn der angegebene `value`\-Wert `Text` mit einem nachfolgenden Prozentzeichen ist, wird die konvertierte Dezimalzahl zurückgegeben. Andernfalls wird der Wert mit `Number.From` in einen `number`\-Wert konvertiert. Optional kann auch ein Element vom Typ „`culture`“ angegeben werden (Beispiel: „de-DE“).


## Examples

### Example #1
Hiermit rufen Sie den `Prozentwert` aus `"12,3 %"` ab.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
