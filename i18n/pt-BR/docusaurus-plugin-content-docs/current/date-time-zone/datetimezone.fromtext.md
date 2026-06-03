---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Cria uma datetimezone a partir de Formatos datetimezone locais, universais e personalizados.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Cria um valor `datetimezone` a partir de uma representação textual, `text`. Um parâmetro opcional `record`, `options`, pode ser fornecido para especificar propriedades adicionais. O `record` pode conter os seguintes campos:

-   `Format`: um valor `text` que indica o formato a ser usado. Para mais detalhes, acesse https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer `null` resultará na análise da data usando o melhor esforço.
-   `Culture`: Quando `Format` não é nulo, `Culture` controla alguns especificadores de formato. Por exemplo, em `"en-US"` `"MMM"` é `"Jan", "Feb", "Mar", ...`, enquanto que em `"ru-RU"` `"MMM"` é `"янв", "фев", "мар", ...`. Quando `Format` é `null`, `Culture` controla o formato padrão a ser usado. Quando `Culture` é `null` ou omitido, `Culture.Current` é usado.

Para oferecer suporte a fluxos de trabalho herdados, `options` também pode ser um valor de texto. Isso tem o mesmo comportamento como se `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Converta `"2010-12-31T01:30:00-08:00"` em um valor `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Converta usando um formato personalizado e a cultura alemã.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Converter usando a ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
