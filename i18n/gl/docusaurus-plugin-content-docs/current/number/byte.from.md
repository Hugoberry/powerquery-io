---
title: Byte.From
---

# Byte.From


Crea un enteiro de 8 bits a partir do valor fornecido.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Devolve un valor `number` enteiro de 8 bits a partir do `value` indicado. Se o `value` indicado é `null`, `Byte.From` devolve `null`. Se o `value` indicado é un `number` dentro do intervalo dun enteiro de 8 bits sen unha parte fraccionaria, `value` devólvese. Se ten parte fraccionaria, entón o número arredondarase co modo de redondeo especificado. O modo de redondeo predeterminado é `RoundingMode.ToEven`. Se `value` é doutro tipo, primeiro converterase nun `number` usando `Number.FromText`. Consulta `Number.Round` para coñecer os modos de redondeo dispoñibles. Tamén se pode fornecer un `culture` opcional (por exemplo, "gl-ES").


## Examples

### Example #1
Obteña o valor `number` enteiro de 8 bits de `"4"`.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obteña o valor `number` enteiro de 8 bits de `"4.5"` mediante `RoundingMode.AwayFromZero`.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
