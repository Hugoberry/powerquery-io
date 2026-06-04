---
title: Int8.From
---

# Int8.From


Crea un número enteiro de 8 bits asinado a partir do valor facilitado.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Devolve un valor asinado `number` enteiro de 8 bits a partir do `value` indicado. Se o `value` indicado é `null`, `Int8.From` devolve `null`. Se o `value` indicado é `number` dentro do intervalo dun enteiro asinado de 8 bits sen unha parte fraccionaria, `value` devólvese. Se ten parte fraccionaria, entón o número arredondarase co modo de redondeo especificado. O modo de redondeo predeterminado é `RoundingMode.ToEven`. Se `value` é doutro tipo, primeiro converterase nun `number` usando `Number.FromText`. Consulta `Number.Round` para coñecer os modos de redondeo dispoñibles. Tamén se pode fornecer un `culture` opcional (por exemplo, "gl-ES").


## Examples

### Example #1
Obteña o valor `number` enteiro de 8 bits asinado de `"4"`.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obteña o valor `number` enteiro de 8 bits asinado de `"4.5"` mediante `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
