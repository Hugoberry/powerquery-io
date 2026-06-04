---
title: Time.FromText
---

# Time.FromText


Crea unha hora a partir de formatos de hora locais e universais e personalizados.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Crea un valor de `tempo` a partir dunha representación textual, `text`. Pode proporcionarse un parámetro \``record`\` opcional, `options`, para especificar propiedades adicionais. O `record` pode conter os seguintes campos:

-   `format`: Un valor de `text` que indica o formato a usar. Para obter máis detalles, visite https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se omite este campo ou proporciona `null`, a análise da hora realizarase cun esforzo máximo.
-   `Culture`: Cando `Format` non é null, `Culture` controla algúns especificadores de formato. Por exemplo, en `"en-US"` `"tt"` é `"AM" ou "PM"`, mentres que en `"ar-EG"` `"tt"` é `" ص " ou " م "`. Cando `Format` é `null`, `Culture` controla o formato predeterminado que se usa. Cando `Culture` é `null` ou se omite, úsase `Culture.Current`.

Para soportar fluxos de traballo herdados, `options` tamén pode ser un valor de texto. Isto ten o mesmo comportamento que se `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Converter `"10:12:31am"` nun valor de hora.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Converte `"1012"` nun valor de Hora.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Converte `"10"` nun valor de Hora.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
