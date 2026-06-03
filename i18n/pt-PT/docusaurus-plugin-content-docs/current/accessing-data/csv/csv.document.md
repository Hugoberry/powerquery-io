---
title: Csv.Document
---

# Csv.Document


Devolve o conteúdo do documento CSV como uma tabela.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Devolve o conteúdo do documento CSV como uma tabela.

-   `columns` pode ser nulo, o número de colunas, uma lista de nomes de colunas, um tipo de tabela ou um registo de opções.
-   `delimiter` pode ser um único caráter, uma lista de carateres, ou o valor `""`, que indica que as linhas têm de ser divididas por carateres de espaço em branco consecutivos. Predefinição: `","`.
-   Consulte `ExtraValues.Type` para conhecer os valores suportados de `extraValues`.
-   `encoding` especifica o tipo de codificação do texto.

Se for especificado um registo para `columns` (e `delimiter`, `extraValues` e `encoding` forem nulos), podem ser fornecidos os seguintes campos de registo:

-   `Delimiter`: um delimitador de colunas com um único caráter. Predefinição: `","`.
-   `Columns`: pode ser nulo, o número de colunas, uma lista de nomes de colunas ou um tipo de tabela. Se o número de colunas for inferior ao número encontrado na entrada, as colunas adicionais são ignoradas. Se o número de colunas for superior ao número encontrado na entrada, as colunas adicionais irão ser nulas. Quando não for especificado, o número de colunas é determinado pelo que é encontrado na entrada.
-   `Encoding`: a codificação de texto do ficheiro. Predefinição: 65001 (UTF-8).
-   `CsvStyle`: especifica como as aspas são processadas.
    -   `CsvStyle.QuoteAfterDelimiter` (predefinição): as aspas num campo só são consideradas significativas se colocadas imediatamente a seguir ao delimitador.
    -   `CsvStyle.QuoteAlways`: as aspas num campo são sempre significativas, independentemente de onde aparecem.
-   `QuoteStyle`: especifica a forma como as quebras de linha com aspas são processadas.
    -   `QuoteStyle.Csv` (predefinição): as quebras de linha em aspas são tratadas como parte dos dados, não como o final da linha atual.
    -   `QuoteStyle.None`: todas as quebras de linha são tratadas como o final da linha atual, mesmo que ocorram dentro de um valor em aspas.
-   `IncludeByteOrderMark`: um valor lógico que indica se deve incluir uma Marca de Ordem de Bytes (BOM) no início da saída CSV. Quando definido como verdadeiro, a BOM é escrita (por exemplo, BOM UTF-8: `0xEF 0xBB 0xBF`); quando definido como falso, nenhuma BOM é incluída. Esta opção só é aplicável em cenários de saída. A predefinição é `false`.
-   `ExtraValues`: consulte `ExtraValues.Type` para obter os valores suportados de ExtraValues.


## Examples

### Example #1
Processar texto em formato CSV com cabeçalhos de colunas.
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
