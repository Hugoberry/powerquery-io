---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Cria um datetimezone a partir de formatos de datetimezone locais, universais e personalizados.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Cria um valor `datetimezone` a partir de uma representação textual, `text`. Poderá ser fornecido um parâmetro `record` opcional, `options`, para especificar propriedades adicionais. O `record` pode conter os seguintes campos:

-   `Format`: um valor `text` que indica o formato a utilizar. Para obter mais detalhes, aceda a https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. A omissão deste campo ou o fornecimento de `null` resultará na análise da data da melhor forma possível.
-   `Culture`: quando `Format` não é nulo, `Culture` controla alguns especificadores de formato. Por exemplo, em `"en-US"` `"MMM"` é `"Jan", "Feb", "Mar", ...`, enquanto em `"ru-RU"` `"MMM"` é `"янв", "фев", "мар", ...`. Quando `Format` é `null`, `Culture` controla o formato predefinido a utilizar. Quando `Culture` é `null` ou é omitido, é utilizado `Culture.Current`.

Para suportar fluxos de trabalho legados, `options` também poderá ser um valor de texto. Tem o mesmo comportamento que `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Converter `"2010-12-31T01:30:00-08:00"` num valor `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Converter com um formato personalizado e a cultura alemã.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Converter com ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
