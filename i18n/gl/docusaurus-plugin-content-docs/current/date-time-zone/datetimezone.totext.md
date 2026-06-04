---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Devolve unha representación textual do valor de data, hora e fuso.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devolve unha representación textual de `dateTimeZone`. Pode proporcionarse un parámetro \``record`\` opcional, `options`, para especificar propiedades adicionais. \``culture`\` só se usa para fluxos de traballo herdados. O `record` pode conter os seguintes campos:

-   `format`: Un valor de `text` que indica o formato a usar. Para obter máis detalles, visite https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se omite este campo ou proporciona `null`, a data formatarase co valor predeterminado definido por `Culture`.
-   `Culture`: Cando `Format` non é null, `Culture` controla algúns especificadores de formato. Por exemplo, en `"en-US"` `"MMM"` é `"Xan", "Feb", "Mar", ...`, mentres que en `"ru-RU"` `"MMM"` é `"янв", "фев", "мар",...`. Cando `Format` é `null`, `Culture` controla o formato predeterminado que se usa. Cando `Culture` é `null` ou se omite, úsase `Culture.Current`.

Para soportar fluxos de traballo herdados, `options` e `culture` tamén poden ser valores de texto. Isto ten o mesmo comportamento que se `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Converter `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` nun valor de `text`. *O resultado pode variar dependendo da cultura actual.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Converter usando un formato personalizado e a cultura alemá.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Converter usando o padrón ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
