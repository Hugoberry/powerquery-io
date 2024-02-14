---
title: Html.Table
---

# Html.Table


Devolve uma tabela que contém os resultados da execução dos seletores CSS especificados em relação ao HTML fornecido.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela contendo os resultados da execução dos seletores de CSS especificados em relação ao <code>html</code> fornecido. Um parâmetro de registo opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. O registo pode conter os seguintes campos:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Devolve uma tabela de um valor de texto html de exemplo.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Extrai todos os href a partir de um valor de texto de html de exemplo.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
A aceder aos dados
