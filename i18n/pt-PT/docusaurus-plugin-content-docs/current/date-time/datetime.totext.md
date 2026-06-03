---
title: DateTime.ToText
---

# DateTime.ToText


Devolve uma representação textual do valor datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devolve uma representação textual de `dateTime`. Poderá ser fornecido um parâmetro `record` opcional, `options`, para especificar propriedades adicionais. `culture` é utilizado apenas para fluxos de trabalho legados. O `record` pode conter os seguintes campos:

-   `Format`: um valor `text` que indica o formato a utilizar. Para obter mais detalhes, aceda a https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. A omissão deste campo ou o fornecimento de `null` resultará na formatação da data com o formato predefinido por `Culture`.
-   `Culture`: quando `Format` não é nulo, `Culture` controla alguns especificadores de formato. Por exemplo, em `"en-US"` `"MMM"` é `"Jan", "Feb", "Mar", ...`, enquanto em `"ru-RU"` `"MMM"` é `"янв", "фев", "мар", ...`. Quando `Format` é `null`, `Culture` controla o formato predefinido a utilizar. Quando `Culture` é `null` ou é omitido, é utilizado `Culture.Current`.

Para suportar fluxos de trabalho legados, `options` e `culture` também poderão ser valores de texto. Tem o mesmo comportamento que `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Converter `#datetime(2010, 12, 31, 01, 30, 25)` num valor de `text`. *O resultado pode variar dependendo da cultura atual.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Converter com um formato personalizado e a cultura alemã.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Converter com o padrão ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
