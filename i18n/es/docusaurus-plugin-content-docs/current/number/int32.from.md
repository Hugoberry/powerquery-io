---
title: Int32.From
---

# Int32.From


Crea un entero de 32 bits a partir del valor proporcionado.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Devuelve un valor `number` entero de 32 bits a partir del valor `value` dado. Si `value` es `null`, `Int32.From` devuelve `null`. Si `value` es `number` en el rango de enteros de 32 bits sin una parte fraccionaria, se devuelve `value`. Si tiene una parte fraccionaria, el número se redondea con el modo de redondeo que se haya especificado. El modo de redondeo predeterminado es `RoundingMode.ToEven`. Si `value` es de otro tipo, se convertirá en un valor `number` con `Number.FromText`. Vea `Number.Round` para conocer los modos de redondeo disponibles. También se puede proporcionar un parámetro `culture` opcional (por ejemplo, "es-ES").


## Examples

### Example #1
Obtener el valor `number` entero de 32 bits de `"4"`.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obtener el valor `number` entero de 32 bits de `"4.5"` con `RoundingMode.AwayFromZero`.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
