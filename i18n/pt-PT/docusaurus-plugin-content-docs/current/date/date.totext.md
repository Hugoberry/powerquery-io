---
title: Date.ToText
---

# Date.ToText


Devolve uma representação textual do valor de data.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devolve uma representação textual de `date`. Poderá ser fornecido um parâmetro `record` opcional, `options`, para especificar propriedades adicionais. `culture` é utilizado apenas para fluxos de trabalho legados. O `record` pode conter os seguintes campos:

-   `Format`: um valor `text` que indica o formato a utilizar. Para obter mais detalhes, aceda a https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. A omissão deste campo ou o fornecimento de `null` resultará na formatação da data com o formato predefinido por `Culture`.
-   `Culture`: quando `Format` não é nulo, `Culture` controla alguns especificadores de formato. Por exemplo, em `"en-US"` `"MMM"` é `"Jan", "Feb", "Mar", ...`, enquanto em `"ru-RU"` `"MMM"` é `"янв", "фев", "мар", ...`. Quando `Format` é `null`, `Culture` controla o formato predefinido a utilizar. Quando `Culture` é `null` ou é omitido, é utilizado `Culture.Current`.

Para suportar fluxos de trabalho legados, `options` e `culture` também poderão ser valores de texto. Tem o mesmo comportamento que `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Converter `#date(2010, 12, 31)` num valor de `text`. *O resultado pode variar dependendo da cultura atual.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Converter com um formato personalizado e a cultura alemã.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Encontrar o ano no calendário hijri que corresponde a 1 de janeiro de 2000 no calendário gregoriano.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
