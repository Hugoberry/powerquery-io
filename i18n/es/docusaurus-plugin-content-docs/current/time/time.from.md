---
title: Time.From
---

# Time.From


Crea una hora a partir del valor dado.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Devuelve un valor `time` a partir del valor `value` dado. También se puede proporcionar un parámetro `culture` opcional (por ejemplo, "es-ES"). Si `value` es `null`, `Time.From` devuelve `null`. Si `value` es `time`, se devuelve `value`. Los valores de los tipos siguientes se pueden convertir a un valor `time`:

-   `text`: valor `time` a partir de la representación de texto. Para más información, vea `Time.FromText`.
-   `datetime`: componente de hora de `value`.
-   `datetimezone`: componente de hora del equivalente datetime local de `value`.
-   `number`: valor de `time` equivalente al número de días fraccionarios expresados por `value`. Si `value` es negativo o mayor o igual que 1, se devuelve un error.

Si `value` es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1
Convertir `0.7575` en un valor `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Convertir `#datetime(1899, 12, 30, 06, 45, 12)` en un valor `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
