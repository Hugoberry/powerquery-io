---
title: Time.FromText
---

# Time.FromText


Crea una hora a partir de formatos de hora locales y universales y personalizados.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Crea un valor `time` a partir de una representación textual, `text`. Un parámetro opcional `record`, `options`, puede ser proporcionado para especificar propiedades adicionales. El `record` puede contener los siguientes campos:

-   `Format`: un valor de `text` que indica el formato que se va a usar. Para obtener más información, vaya a https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105 para obtener más detalles. Si se omite este campo o se proporciona `null`, se analizará la hora con el mejor esfuerzo.
-   `Culture`: cuando `Format` no es null, `Culture` controla algunos especificadores de formato. Por ejemplo, en `"en-US"` `"tt"` es `"AM" o "PM"`.mientras que en `"ar-EG"` `"tt"` es `"ص" o "م"`. Cuando `Format` es `null`, `Culture` controla el formato predeterminado que se va a usar. Cuando `Cultura` es `nulo` o se omite, se utiliza `Culture.Current`.

Para admitir flujos de trabajo heredados, `options` también puede ser un valor de texto. Tiene el mismo comportamiento que si `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Convertir `"10:12:31am"` en un valor Time.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Convertir `"1012"` en un valor de hora.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Convertir `"10"` en un valor de hora.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
