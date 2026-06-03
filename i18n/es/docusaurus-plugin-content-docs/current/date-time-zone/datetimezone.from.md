---
title: DateTimeZone.From
---

# DateTimeZone.From


Crea un datetimezone a partir del valor dado.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Crea un `datetimezone` a partir del valor especificado.

-   `value`: El valor utilizado para crear un `datetimezone`.
-   `culture`: (opcional) la referencia cultural que se va a usar al transformar el valor (por ejemplo, "en-US").

Los valores de los tipos siguientes se pueden convertir en un valor de `datetimezone`:

-   `text`: devuelve un valor de `datetimezone` a partir de la representación textual. Consulte `DateTimeZone.FromText` para obtener más información.
-   `date`: Devuelve un `datetimezone` con `value` como componente de fecha, `12:00:00 AM` como componente de hora y el desplazamiento correspondiente a la zona horaria local.
-   `datetime`: Devuelve un `datetimezone` con `value` como datetime y el desplazamiento correspondiente a la zona horaria local.
-   `datetimezone`: devuelve `value`.
-   `time`: devuelve un `datetimezone` con el equivalente de fecha de la fecha de automatización OLE de `0` como componente de fecha, `value` como componente de hora y el desplazamiento correspondiente a la zona horaria local. La fecha de automatización OLE consiste en una fecha y hora representada por un número de punto flotante, cuyo componente entero es el número de días antes o después de la medianoche del 30 de diciembre de 1899, y cuyo componente fraccionario representa el tiempo en ese día dividido entre 24. Por ejemplo, la medianoche del 31 de diciembre de 1899 se representa como 1.0; las 6 a.m. del 1 de enero de 1900 se representan como 2.25; la medianoche del 29 de diciembre de 1899 se representa como -1.0; y las 6 a.m. del 29 de diciembre de 1899 se representan como -1.25. El valor base es la medianoche del 30 de diciembre de 1899. El valor mínimo es la medianoche del 1 de enero del año 0100. El valor máximo es el último instante del 31 de diciembre del año 9999.
-   `number`: devuelve un `datetimezone` con el equivalente de datetime de la fecha de automatización OLE expresada por `value` y el desplazamiento correspondiente a la zona horaria local.
-   `null`: devuelve `null`.

Si `value` es de cualquier otro tipo, se muestra un error.  
  
El valor del desplazamiento correspondiente a la zona horaria local es diferente al ejecutar esta función localmente en comparación con ejecutarla en línea. Cuando se ejecuta localmente, se devuelve la zona horaria local. Cuando se ejecuta en línea, se devuelve la zona horaria UTC (+00:00).


## Examples

### Example #1
Convierte la representación textual de la fecha, la hora y la zona horaria en un valor de `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Convierte la representación textual de la fecha, la hora y la zona horaria del portugués brasileño en un valor de `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Convierte un número que representa el 1 de enero de 2025 a las 12 p. m. en un valor `datetimezone`. La zona horaria del resultado depende de si el ejemplo se ejecuta localmente o en línea.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
