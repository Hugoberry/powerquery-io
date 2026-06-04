---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Crea unha datetimezone a partir de formatos de datetimezone locais, universais e personalizados.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Crea un valor `datetimezone` a partir dunha representación textual, `text`. Pode proporcionarse un parámetro \``record`\` opcional, `options`, para especificar propiedades adicionais. O `record` pode conter os seguintes campos:

-   `format`: Un valor de `text` que indica o formato a usar. Para obter máis detalles, visite https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se omite este campo ou proporciona `null`, a data analizarase facendo o mellor esforzo posible.
-   `Culture`: Cando `Format` non é null, `Culture` controla algúns especificadores de formato. Por exemplo, en `"en-US"` `"MMM"` é `"Xan", "Feb", "Mar", ...`, mentres que en `"ru-RU"` `"MMM"` é `"янв", "фев", "мар",...`. Cando `Format` é `null`, `Culture` controla o formato predeterminado que se usa. Cando `Culture` é `null` ou se omite, úsase `Culture.Current`.

Para soportar fluxos de traballo herdados, `options` tamén pode ser un valor de texto. Isto ten o mesmo comportamento que se `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Converter `"2010-12-31T01:30:00-08:00"` nun valor `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Converter usando un formato personalizado e a cultura alemá.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Converter usando ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
