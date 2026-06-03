---
title: Currency.From
---

# Currency.From


Devuelve un valor monetario para un valor dado.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Devuelve un valor `currency` del valor `value` dado. Si `value` es `null`, `Currency.From` devuelve `null`. Si `value` es `number` dentro del rango de moneda, la parte fraccionaria de `value` se redondea a 4 dígitos decimales y se devuelve. Si `value` es de otro tipo, se convertirá en un valor `number` con `Number.FromText`. El rango válido para la moneda es de `-922 337 203 685 477,5808` a `922 337 203 685 477,5807`. Vea `Number.Round` para los modos de redondeo disponibles. El modo de redondeo predeterminado es `RoundingMode.ToEven`. También se puede proporcionar un parámetro `culture` opcional (por ejemplo, "es-ES").


## Examples

### Example #1
Obtenga el valor `currency` de `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Obtenga el valor de `currency` de `"1.23455"` con `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
