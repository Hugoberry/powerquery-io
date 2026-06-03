---
title: Currency.From
---

# Currency.From


Gibt einen currency-Wert aus dem angegebenen Wert zurück.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Gibt einen `currency`\-Wert aus dem angegebenen `value`\-Wert zurück. Wenn der angegebene `value`\-Wert `null` ist, gibt `Currency.From` `null` zurück. Wenn der angegebene `value`\-Wert `number` innerhalb des Währungsbereichs ist, wird der Bruchteil von „`value`“ auf 4 Dezimalstellen gerundet und zurückgegeben. Wenn der angegebene `value`\-Wert einen anderen Typ aufweist, wird er erst mit `Number.FromText` in einen `number`\-Wert konvertiert. Der gültige Währungsbereich ist `-922.337.203.685.477,5808` bis `922.337.203.685.477,5807`. Die verfügbaren Rundungsmodi finden Sie unter `Number.Round`. Die Standardeinstellung lautet `RoundingMode.ToEven`. Optional kann auch ein Element vom Typ „`culture`“ angegeben werden (Beispiel: „de-DE“).


## Examples

### Example #1
`currency`\-Wert von `"1,23455"` abrufen.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Rufen Sie den `currency`\-Wert von `"1,23455"` mithilfe von `RoundingMode.Down` ab.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
