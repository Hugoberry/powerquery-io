---
title: DateTime.ToText
---

# DateTime.ToText


Devuelve una representación de texto del valor datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devuelve una representación textual de `dateTime`. Se puede proporcionar un parámetro `options`opcional `record` para especificar propiedades adicionales. `culture` Solo se usa para flujos de trabajo heredados. El `record` puede contener los siguientes campos:

-   `Format`: un valor de `text` que indica el formato que se va a usar. Para obtener más información, vaya a https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105. Si se omite este campo o se proporciona `null` se da formato a la fecha con el valor predeterminado definido por `Culture`.
-   `Culture`: cuando `Format` no es null, `Culture` controla algunos especificadores de formato. Por ejemplo, en `"en-US"` `"MMM"` es `"Jan", "Feb", "Mar", ...`, mientras que en `"ru-RU"` `"MMM"` es `"янв", "фев", "мар", ...`. Cuando `Format` es `null`, `Culture` controla el formato predeterminado que se va a usar. Cuando `Cultura` es `nulo` o se omite, se utiliza `Culture.Current`.

Para soportar los flujos de trabajo heredados, `options` y `culture` también pueden ser valores de texto. Esto tiene el mismo comportamiento que si `opciones = [Formato = opciones, Cultura = cultura]`.


## Examples

### Example #1
Convertir `#datetime(2010, 12, 31, 01, 30, 25)` en un valor `text`. *La salida del resultado puede variar en función de la referencia cultural actual.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Convertir con un formato personalizado y la referencia cultural alemana.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Convertir con el patrón ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
