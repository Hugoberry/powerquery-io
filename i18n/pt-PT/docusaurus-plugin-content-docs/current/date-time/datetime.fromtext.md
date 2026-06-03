---
title: DateTime.FromText
---

# DateTime.FromText


Cria um datetimezone a partir dos formatos datetime local e universal.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Cria um valor `datetime` a partir de uma representação textual, `text`. Poderá ser fornecido um parâmetro `record` opcional, `options`, para especificar propriedades adicionais. O `record` pode conter os seguintes campos:

-   `Format`: um valor `text` que indica o formato a utilizar. Para obter mais detalhes, aceda a https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. A omissão deste campo ou o fornecimento de `null` resultará na análise da data da melhor forma possível.
-   `Culture`: quando `Format` não é nulo, `Culture` controla alguns especificadores de formato. Por exemplo, em `"en-US"` `"MMM"` é `"Jan", "Feb", "Mar", ...`, enquanto em `"ru-RU"` `"MMM"` é `"янв", "фев", "мар", ...`. Quando `Format` é `null`, `Culture` controla o formato predefinido a utilizar. Quando `Culture` é `null` ou é omitido, é utilizado `Culture.Current`.

Para suportar fluxos de trabalho legados, `options` também poderá ser um valor de texto. Tem o mesmo comportamento que `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Converter `"2010-12-31T01:30:00"` num valor datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Converter `"2010-12-31T01:30:00.121212"` num valor datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Converter `"2010-12-31T01:30:00"` num valor datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Converter `"20101231T013000"` num valor datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
