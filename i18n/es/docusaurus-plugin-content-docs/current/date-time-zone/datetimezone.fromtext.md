---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Crea una datetimezone a partir de formatos datetimezone locales, universales y personalizados.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Crea un valor `datetimezone` a partir de una representación textual, `text`. Un parámetro opcional `record`, `options`, puede ser proporcionado para especificar propiedades adicionales. El `record` puede contener los siguientes campos:

-   `Format`: un valor de `text` que indica el formato que se va a usar. Para obtener más información, vaya a https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105. Si se omite este campo o se proporciona `null` se analizará la fecha con el mejor esfuerzo.
-   `Culture`: cuando `Format` no es null, `Culture` controla algunos especificadores de formato. Por ejemplo, en `"en-US"` `"MMM"` es `"Jan", "Feb", "Mar", ...`, mientras que en `"ru-RU"` `"MMM"` es `"янв", "фев", "мар", ...`. Cuando `Format` es `null`, `Culture` controla el formato predeterminado que se va a usar. Cuando `Cultura` es `nulo` o se omite, se utiliza `Culture.Current`.

Para admitir flujos de trabajo heredados, `options` también puede ser un valor de texto. Tiene el mismo comportamiento que si `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Convertir `"2010-12-31T01:30:00-08:00"` en un valor `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Convertir con un formato personalizado y la referencia cultural alemana.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Convertir con ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
