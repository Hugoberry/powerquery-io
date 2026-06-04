---
title: DateTime.FromText
---

# DateTime.FromText


Crea unha data, hora e fuso a partir de formatos de data e hora universal e local.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Crea un valor de `datetime` a partir dunha representación textual, `text`. Pode proporcionarse un parámetro \``record`\` opcional, `options`, para especificar propiedades adicionais. O `record` pode conter os seguintes campos:

-   `format`: Un valor de `text` que indica o formato a usar. Para obter máis detalles, visite https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se omite este campo ou proporciona `null`, a data analizarase facendo o mellor esforzo posible.
-   `Culture`: Cando `Format` non é null, `Culture` controla algúns especificadores de formato. Por exemplo, en `"en-US"` `"MMM"` é `"Xan", "Feb", "Mar", ...`, mentres que en `"ru-RU"` `"MMM"` é `"янв", "фев", "мар",...`. Cando `Format` é `null`, `Culture` controla o formato predeterminado que se usa. Cando `Culture` é `null` ou se omite, úsase `Culture.Current`.

Para soportar fluxos de traballo herdados, `options` tamén pode ser un valor de texto. Isto ten o mesmo comportamento que se `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Converter `"2010-12-31T01:30:00"` nun valor de data e hora.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Converter `"2010-12-31T01:30:00.121212"` nun valor de data e hora.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Converter `"2010-12-31T01:30:00"` nun valor de data e hora.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Converter `"20101231T013000"` nun valor de data e hora.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
