---
title: Html.Table
---

# Html.Table


## Description

Retorna uma tabela que contém os resultados da execução dos seletores CSS especificados em relação ao HTML fornecido.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Retorna uma tabela contendo os resultados da execução dos seletores de CSS em relação ao <code>html</code> fornecido. Um parâmetro de registro opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Retorna uma tabela de um valor de texto de html de amostra.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Gerente</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Extrai todos os hrefs de um valor de texto de html de exemplo.
```powerquery
Html.Table("<a href=""/test.html"">Teste</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Acessando dados
