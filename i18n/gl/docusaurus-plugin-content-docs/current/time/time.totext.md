---
title: Time.ToText
---

# Time.ToText


Devolve unha representación textual do valor de hora.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devolve unha representación textual de `time`. Pode proporcionarse un parámetro \``record`\` opcional, `options`, para especificar propiedades adicionais. \``culture`\` só se usa para fluxos de traballo herdados. O `record` pode conter os seguintes campos:

-   `format`: Un valor de `text` que indica o formato a usar. Para obter máis detalles, visite https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se omite este campo ou proporciona `null`, a data formatarase co valor predeterminado definido por `Culture`.
-   `Culture`: Cando `Format` non é null, `Culture` controla algúns especificadores de formato. Por exemplo, en `"en-US"` `"tt"` é `"AM" ou "PM"`, mentres que en `"ar-EG"` `"tt"` é `" ص " ou " م "`. Cando `Format` é `null`, `Culture` controla o formato predeterminado que se usa. Cando `Culture` é `null` ou se omite, úsase `Culture.Current`.

Para soportar fluxos de traballo herdados, `options` e `culture` tamén poden ser valores de texto. Isto ten o mesmo comportamento que se `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Converter `#time(01, 30, 25)` nun valor de `text`. *O resultado pode variar dependendo da cultura actual.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Converter usando un formato personalizado e a cultura alemá.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Converter usando o formato de hora estándar.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
