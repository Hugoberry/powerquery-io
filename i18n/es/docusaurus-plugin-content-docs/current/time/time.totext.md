---
title: Time.ToText
---

# Time.ToText


Devuelve una representación de texto del valor de hora.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devuelve una representación textual de `time`. Se puede proporcionar un parámetro `options`opcional `record` para especificar propiedades adicionales. `culture` Solo se usa para flujos de trabajo heredados. El `record` puede contener los siguientes campos:

-   `Format`: un valor de `text` que indica el formato que se va a usar. Para obtener más información, vaya a https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105. Si se omite este campo o se proporciona `null` se da formato a la fecha con el valor predeterminado definido por `Culture`.
-   `Culture`: cuando `Format` no es null, `Culture` controla algunos especificadores de formato. Por ejemplo, en `"en-US"` `"tt"` es `"AM" o "PM"`.mientras que en `"ar-EG"` `"tt"` es `"ص" o "م"`. Cuando `Format` es `null`, `Culture` controla el formato predeterminado que se va a usar. Cuando `Cultura` es `nulo` o se omite, se utiliza `Culture.Current`.

Para soportar los flujos de trabajo heredados, `options` y `culture` también pueden ser valores de texto. Esto tiene el mismo comportamiento que si `opciones = [Formato = opciones, Cultura = cultura]`.


## Examples

### Example #1
Convertir `#time(01, 30, 25)` en un valor `text`. *La salida del resultado puede variar en función de la referencia cultural actual.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Convertir con un formato personalizado y la referencia cultural alemana.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Convertir con formato de hora estándar.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
