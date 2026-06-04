---
title: Html.Table
---

# Html.Table


Devolve unha táboa que contén os resultados de executar os selectores de CSS especificados no HTML proporcionado.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa cos resultados da execución dos selectores de CSS especificados no `html` que se forneceu. Pode fornecerse un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:

-   `RowSelector`


## Examples

### Example #1
Devolve unha táboa dun valor de texto HTML de exemplo.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2
Extrae todos os href dun valor de texto HTML de exemplo.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accessing data
