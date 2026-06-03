---
title: Number.From
---

# Number.From


Crea un número a partir del valor dado.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devuelve un valor `number` a partir del valor `value` dado. También se puede proporcionar un parámetro `culture` opcional (por ejemplo, "es-ES"). Si `value` es `null`, `Number.From` devuelve `null`. Si `value` es `number`, se devuelve `value`. Los valores de los tipos siguientes se pueden convertir a un valor `number`:

-   `text`: valor `number` a partir de la representación de texto. Se usan los formatos de texto comunes ("15", "3423,10", "5.0E-10"). Para más información, vea `Number.FromText`.
-   `logical`: 1 para `true`, 0 para `false`.
-   `datetime`: número de punto flotante de doble precisión que contiene un equivalente de fecha de automatización OLE.
-   `datetimezone`: número de punto flotante de doble precisión que contiene un equivalente de fecha de automatización OLE de la fecha y hora locales `value`.
-   `date`: número de punto flotante de doble precisión que contiene un equivalente de fecha de automatización OLE.
-   `time`: expresado en días fraccionarios.
-   `duration`: expresado en días enteros y fraccionarios.

Si `value` es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1
Obtener el valor `number` de `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obtener el valor `number` de `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Obtenga el valor `numérico` de `"12,3 %"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
