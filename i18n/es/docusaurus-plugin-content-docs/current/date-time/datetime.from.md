---
title: DateTime.From
---

# DateTime.From


Crea un datetime a partir del valor dado.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Devuelve un valor `datetime` del `value`especificado. También se puede proporcionar un `culture` opcional (por ejemplo, "en-US"). Si el `value` especificado es `null`, `DateTime.From` devuelve `null`. Si el `value` especificado es `datetime`, se devuelve `value`. Los valores de los tipos siguientes se pueden convertir en un valor `datetime`:

-   `text`: un valor `datetime` de la representación textual. Consulte `DateTime.FromText` para obtener más información.
-   `date`: un `datetime` con `value` como componente de fecha y `12:00:00 AM` como componente de hora.
-   `datetimezone` : el `datetime` equivalente local de `value`.
-   `time`: Un `datetime` con la fecha equivalente a la fecha de automatización OLE de `0` como componente de fecha y `value` como componente de hora.
-   `number`: un `datetime` equivalente de la fecha de automatización OLE expresada por `value`.

Si `value` es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1
Convertir `#time(06, 45, 12)` en un valor `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Convertir `#date(1975, 4, 4)` en un valor `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
