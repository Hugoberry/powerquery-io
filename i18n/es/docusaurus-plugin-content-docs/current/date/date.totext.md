---
title: Date.ToText
---

# Date.ToText


Devuelve una representación de texto del valor de fecha.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devuelve una representación textual de `date`. Se puede proporcionar un parámetro `options`opcional `record` para especificar propiedades adicionales. `culture` Solo se usa para flujos de trabajo heredados. El `record` puede contener los siguientes campos:

-   `Format`: un valor de `text` que indica el formato que se va a usar. Para obtener más información, vaya a https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105. Si se omite este campo o se proporciona `null` se da formato a la fecha con el valor predeterminado definido por `Culture`.
-   `Culture`: cuando `Format` no es null, `Culture` controla algunos especificadores de formato. Por ejemplo, en `"en-US"` `"MMM"` es `"Jan", "Feb", "Mar", ...`, mientras que en `"ru-RU"` `"MMM"` es `"янв", "фев", "мар", ...`. Cuando `Format` es `null`, `Culture` controla el formato predeterminado que se va a usar. Cuando `Cultura` es `nulo` o se omite, se utiliza `Culture.Current`.

Para soportar los flujos de trabajo heredados, `options` y `culture` también pueden ser valores de texto. Esto tiene el mismo comportamiento que si `opciones = [Formato = opciones, Cultura = cultura]`.


## Examples

### Example #1
Convertir `#date(2010, 12, 31)` en un valor `text`. *La salida del resultado puede variar en función de la referencia cultural actual.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Convertir con un formato personalizado y la referencia cultural alemana.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Busque el año en el calendario Hijri correspondiente al 1 de enero de 2000 en el calendario gregoriano.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
