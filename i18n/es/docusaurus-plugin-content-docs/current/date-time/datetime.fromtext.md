---
title: DateTime.FromText
---

# DateTime.FromText


Crea un datetimezone a partir de formatos de fecha y hora local y universal.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Crea un valor `datetime` a partir de una representación textual, `text`. Un parámetro opcional `record`, `options`, puede ser proporcionado para especificar propiedades adicionales. El `record` puede contener los siguientes campos:

-   `Format`: un valor de `text` que indica el formato que se va a usar. Para obtener más información, vaya a https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105. Si se omite este campo o se proporciona `null` se analizará la fecha con el mejor esfuerzo.
-   `Culture`: cuando `Format` no es null, `Culture` controla algunos especificadores de formato. Por ejemplo, en `"en-US"` `"MMM"` es `"Jan", "Feb", "Mar", ...`, mientras que en `"ru-RU"` `"MMM"` es `"янв", "фев", "мар", ...`. Cuando `Format` es `null`, `Culture` controla el formato predeterminado que se va a usar. Cuando `Cultura` es `nulo` o se omite, se utiliza `Culture.Current`.

Para admitir flujos de trabajo heredados, `options` también puede ser un valor de texto. Tiene el mismo comportamiento que si `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Convierta `"2010-12-31T01:30:00"` en un valor datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Convertir `"2010-12-31T01:30:00.121212"` en un valor datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Convierta `"2010-12-31T01:30:00"` en un valor datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Convertir `"20101231T013000"` en un valor datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
